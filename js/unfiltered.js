// UNFILTERED PAGE - CAROUSEL, PETALS, LIGHTBOX
// Complete functionality preserved from original

(function() {
    // ----- PHOTO DATA (exactly as original) -----
    const PHOTOS_1 = [
        { seed: 1082, title: "Petal Reverie", sub: "Spring 2025", desc: "Soft focus on wild garden roses at dawn. The dew still clinging, the light barely awake.", tags: ["floral", "editorial", "spring"] },
        { seed: 1065, title: "Golden Hour", sub: "Tuscany", desc: "A hillside vineyard at the last breath of sunlight. The kind of light that makes everything feel eternal.", tags: ["landscape", "golden hour", "travel"] },
        { seed: 1040, title: "Café Soleil", sub: "Paris, France", desc: "A corner table, a half-drunk espresso, and the whole city humming outside.", tags: ["lifestyle", "paris", "film"] },
        { seed: 1074, title: "First Bloom", sub: "Botanical Series", desc: "Japanese cherry blossoms at peak — photographed before the first petal fell.", tags: ["floral", "nature", "portrait"] },
        { seed: 1055, title: "Sea Glass", sub: "Côte d'Azur", desc: "The Mediterranean in early June, before the tourists arrived. Perfect stillness.", tags: ["ocean", "travel", "blue"] },
        { seed: 1022, title: "White Linen", sub: "Home Edit", desc: "Sunlight through sheer curtains — the simplest, most beautiful thing.", tags: ["interior", "minimal", "light"] },
        { seed: 1037, title: "Wildflower", sub: "Provence", desc: "Lavender fields stretching beyond the frame. The scent existed in the image somehow.", tags: ["nature", "provence", "purple"] },
        { seed: 1048, title: "Soft Morning", sub: "Portrait Series", desc: "Before the world gets loud. A quiet face turned to the window.", tags: ["portrait", "mood", "intimate"] }
    ];

    const PHOTOS_2 = [
        { seed: 1060, title: "Rosé Hour", sub: "Summer Edit", desc: "Peonies, linen, and an afternoon with nowhere to be.", tags: ["lifestyle", "pink", "summer"] },
        { seed: 1018, title: "Forest Path", sub: "Autumn Walk", desc: "Fallen leaves and filtered light — a forest that felt like a cathedral.", tags: ["nature", "autumn", "moody"] },
        { seed: 1071, title: "Terracotta", sub: "Morocco Edit", desc: "Dusty walls and window light in a riad in Marrakech. Silence between colours.", tags: ["travel", "architecture", "warm"] },
        { seed: 1033, title: "Blue Reverie", sub: "Greece Series", desc: "Cycladic white and Aegean blue. The most iconic view, made personal.", tags: ["travel", "greece", "blue"] },
        { seed: 1045, title: "Candlelight", sub: "Winter Series", desc: "Long-exposure dinner table. Wax dripping, wine poured, everyone laughing.", tags: ["lifestyle", "winter", "warmth"] },
        { seed: 1052, title: "Blossom Rain", sub: "Tokyo Spring", desc: "Cherry petals falling on a stone path in Shinjuku Gyoen.", tags: ["japan", "spring", "dreamy"] },
        { seed: 1028, title: "Lace & Light", sub: "Fashion Edit", desc: "A cream dress against crumbling plaster. Old world meeting something new.", tags: ["fashion", "editorial", "vintage"] },
        { seed: 1067, title: "Dusk Swim", sub: "Summer Diary", desc: "The pool at dusk, reflections shimmering. Someone just slipped beneath the surface.", tags: ["summer", "water", "film"] }
    ];

    // ----- FILM HOLES -----
    function buildHoles(id, count = 28) {
        const el = document.getElementById(id);
        if (!el) return;
        for (let i = 0; i < count; i++) {
            const d = document.createElement('div');
            d.className = 'hole';
            el.appendChild(d);
        }
    }

    // ----- BUILD TRACK -----
    function buildTrack(trackId, photos) {
        const track = document.getElementById(trackId);
        if (!track) return;
        const all = [...photos, ...photos, ...photos];
        all.forEach((p) => {
            const card = document.createElement('div');
            card.className = 'photo-card';
            card.innerHTML = `
                <img src="https://picsum.photos/seed/${p.seed}/440/400" alt="${p.title}" loading="lazy">
                <div class="card-caption">
                    <div class="caption-title">${p.title}</div>
                    <div class="caption-sub">${p.sub}</div>
                </div>
            `;
            card.addEventListener('click', () => openLightbox(p));
            track.appendChild(card);
        });
    }

    // ----- DOTS -----
    function buildDots(dotsId, photos, carousel) {
        const wrap = document.getElementById(dotsId);
        if (!wrap) return;
        photos.forEach((_, i) => {
            const d = document.createElement('div');
            d.className = 'dot' + (i === 0 ? ' active' : '');
            d.addEventListener('click', () => { carousel.jumpTo(i); });
            wrap.appendChild(d);
        });
    }

    // ----- CAROUSEL CLASS -----
    class Carousel {
        constructor(trackId, photos, speed, dotsId) {
            this.track = document.getElementById(trackId);
            this.photos = photos;
            this.count = photos.length;
            this.dotsId = dotsId;
            this.speed = speed;
            this.offset = 0;
            this.paused = false;
            this.dragging = false;
            this.dragStartX = 0;
            this.dragStartOffset = 0;
            this.lastTime = null;
            this.cardWidth = 0;
            this.gap = 20;
            this.activeIdx = 0;
            this.animationId = null;

            this.measure();
            this.offset = this.count * (this.cardWidth + this.gap);
            this.bindDrag();
            this.tick = this.tick.bind(this);
            this.animationId = requestAnimationFrame(this.tick);
        }

        measure() {
            const card = this.track?.querySelector('.photo-card');
            this.cardWidth = card ? card.offsetWidth : 220;
        }

        get unitW() { return this.cardWidth + this.gap; }

        tick(now) {
            if (!this.lastTime) this.lastTime = now;
            const dt = Math.min((now - this.lastTime) / 1000, 0.05);
            this.lastTime = now;

            if (!this.paused && !this.dragging) {
                this.offset += this.speed * dt;
            }

            const loopLen = this.count * this.unitW;
            if (this.offset >= loopLen * 2) this.offset -= loopLen;
            if (this.offset < loopLen) this.offset += loopLen;

            if (this.track) {
                this.track.style.transform = `translateX(${-this.offset.toFixed(2)}px)`;
            }

            const idx = Math.round((this.offset % loopLen) / this.unitW) % this.count;
            if (idx !== this.activeIdx) {
                this.activeIdx = (idx + this.count) % this.count;
                this.updateDots();
            }

            this.animationId = requestAnimationFrame(this.tick);
        }

        updateDots() {
            const dots = document.querySelectorAll(`#${this.dotsId} .dot`);
            dots.forEach((d, i) => d.classList.toggle('active', i === this.activeIdx));
        }

        jumpTo(idx) {
            const loopLen = this.count * this.unitW;
            const base = Math.floor(this.offset / loopLen) * loopLen;
            this.offset = base + idx * this.unitW;
        }

        nudge(dir) {
            this.offset += dir * this.unitW;
        }

        bindDrag() {
            const wrap = this.track?.parentElement;
            if (!wrap) return;

            const start = (x) => {
                this.dragging = true;
                this.dragStartX = x;
                this.dragStartOffset = this.offset;
                this.track.classList.add('dragging');
            };
            const move = (x) => {
                if (!this.dragging) return;
                this.offset = this.dragStartOffset - (x - this.dragStartX);
            };
            const end = () => {
                this.dragging = false;
                this.track.classList.remove('dragging');
            };

            wrap.addEventListener('mousedown', e => start(e.clientX));
            window.addEventListener('mousemove', e => move(e.clientX));
            window.addEventListener('mouseup', end);
            wrap.addEventListener('touchstart', e => start(e.touches[0].clientX), { passive: true });
            window.addEventListener('touchmove', e => move(e.touches[0].clientX), { passive: true });
            window.addEventListener('touchend', end);
        }
    }

    // ----- BIND CONTROLS -----
    function bindControls(prevId, nextId, pauseId, carousel) {
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);
        const pauseBtn = document.getElementById(pauseId);
        if (prevBtn) prevBtn.addEventListener('click', () => carousel.nudge(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => carousel.nudge(1));
        if (pauseBtn) {
            pauseBtn.addEventListener('click', () => {
                carousel.paused = !carousel.paused;
                pauseBtn.textContent = carousel.paused ? '▶' : '❚❚';
            });
        }
    }

    // ----- FLOATING PETALS -----
    function createPetals() {
        const petalColors = ['#f5d6d6', '#f9c8d4', '#e8b4c0', '#fce4ec', '#f8bbd0'];
        const petalWrap = document.getElementById('petals');
        if (!petalWrap) return;
        for (let i = 0; i < 14; i++) {
            const p = document.createElement('div');
            p.className = 'petal';
            p.style.cssText = `
                left: ${Math.random() * 100}%;
                background: ${petalColors[Math.floor(Math.random() * petalColors.length)]};
                animation-duration: ${6 + Math.random() * 8}s;
                animation-delay: ${Math.random() * 10}s;
                transform: rotate(${Math.random() * 360}deg);
                opacity: 0;
            `;
            petalWrap.appendChild(p);
        }
    }

    // ----- LIGHTBOX -----
    const lightbox = document.getElementById('lightbox');
    function openLightbox(p) {
        if (!lightbox) return;
        const lbImg = document.getElementById('lb-img');
        const lbTitle = document.getElementById('lb-title');
        const lbDesc = document.getElementById('lb-desc');
        const lbTags = document.getElementById('lb-tags');
        if (lbImg) lbImg.src = `https://picsum.photos/seed/${p.seed}/800/520`;
        if (lbTitle) lbTitle.innerHTML = p.title;
        if (lbDesc) lbDesc.textContent = p.desc;
        if (lbTags) lbTags.innerHTML = p.tags.map(t => `<span class="lb-tag">${t}</span>`).join('');
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        if (lightbox) lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ----- INITIALIZE EVERYTHING ON PAGE LOAD -----
    document.addEventListener('DOMContentLoaded', function() {
        // Build film holes
        buildHoles('holes-top-1');
        buildHoles('holes-bot-1');
        buildHoles('holes-top-2');
        buildHoles('holes-bot-2');

        // Build tracks
        buildTrack('track1', PHOTOS_1);
        buildTrack('track2', PHOTOS_2);

        // Initialize carousels
        const c1 = new Carousel('track1', PHOTOS_1, 55, 'dots1');
        const c2 = new Carousel('track2', PHOTOS_2, -45, 'dots2');

        // Build dots
        buildDots('dots1', PHOTOS_1, c1);
        buildDots('dots2', PHOTOS_2, c2);

        // Bind controls
        bindControls('prev1', 'next1', 'pause1', c1);
        bindControls('prev2', 'next2', 'pause2', c2);

        // Create floating petals
        createPetals();

        // Lightbox close handlers
        const lbClose = document.getElementById('lb-close');
        if (lbClose) lbClose.addEventListener('click', closeLightbox);
        if (lightbox) {
            lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
        }
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

        // Handle resize
        window.addEventListener('resize', () => { c1.measure(); c2.measure(); });
    });
})();