// Navigation active state
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    const navMap = {
        'index': 'notes',
        'notes': 'notes',
        'unfiltered': 'unfiltered',
        'socials': 'socials',
        'highlights': 'highlights',
        'about': 'about'
    };
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active-nav'));
    const activePage = navMap[currentPage];
    if (activePage) {
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.getAttribute('href').includes(activePage + '.html')) {
                item.classList.add('active-nav');
            }
        });
    }
}

// Extract first image from HTML content
function extractFirstImage(html) {
    if (!html) return null;
    const div = document.createElement('div');
    div.innerHTML = html;
    const img = div.querySelector('img');
    return img ? img.src : null;
}

// Get best image from Medium post
function getPostImage(post) {
    if (post.thumbnail && post.thumbnail.startsWith('http')) return post.thumbnail;
    if (post.content) {
        const img = extractFirstImage(post.content);
        if (img) return img;
    }
    if (post.description) {
        const img = extractFirstImage(post.description);
        if (img) return img;
    }
    return null;
}

// Fetch Medium posts – only image, title, read more
async function fetchMediumPosts() {
    const container = document.getElementById('medium-posts-container');
    if (!container) return;

    container.innerHTML = '<div class="loading-posts">Loading thoughts...</div>';

    try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anusaghmr');
        const data = await response.json();

        if (data.status === 'ok' && data.items && data.items.length) {
            const posts = data.items.slice(0, 6);
            container.innerHTML = posts.map(post => {
                const imageUrl = getPostImage(post);
                const title = escapeHtml(post.title);

                return `
                    <a href="${post.link}" target="_blank" class="blog-card-link">
                        <article class="blog-card">
                            <div class="blog-card-image">
                                ${imageUrl ? 
                                    `<img src="${imageUrl}" alt="${title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'image-fallback\'><i class=\'fas fa-image\'></i></div>'">` : 
                                    `<div class="image-fallback"><i class="fas fa-image"></i></div>`
                                }
                            </div>
                            <div class="blog-card-content">
                                <h3 class="blog-title">${title}</h3>
                                <div class="read-more-wrapper">
                                    <span class="read-more">Read more <i class="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </article>
                    </a>
                `;
            }).join('');
        } else {
            container.innerHTML = `<div class="error-placeholder"><i class="fas fa-book-open"></i><p>No posts yet. Check back soon!</p><a href="https://medium.com/@anusaghmr" target="_blank">Visit my Medium →</a></div>`;
        }
    } catch (error) {
        console.error('Medium fetch error:', error);
        container.innerHTML = `<div class="error-placeholder"><i class="fas fa-exclamation-triangle"></i><p>Can't load posts right now.</p><a href="https://medium.com/@anusaghmr" target="_blank">Read on Medium →</a></div>`;
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Contact form handler (unchanged)
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    if (!firstName || !lastName || !email || !message) {
        showFormStatus('All fields are required.', 'error');
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormStatus('Please enter a valid email.', 'error');
        return;
    }
    const subject = `Message from ${firstName} ${lastName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:heyyanusha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showFormStatus('Opening your email client... Thank you!', 'success');
    document.getElementById('contactForm')?.reset();
    setTimeout(() => {
        const statusDiv = document.getElementById('formStatus');
        if (statusDiv) statusDiv.style.display = 'none';
    }, 5000);
}

function showFormStatus(msg, type) {
    const statusDiv = document.getElementById('formStatus');
    if (!statusDiv) return;
    statusDiv.textContent = msg;
    statusDiv.style.display = 'block';
    statusDiv.style.backgroundColor = type === 'success' ? '#d4edda' : '#f8d7da';
    statusDiv.style.color = type === 'success' ? '#155724' : '#721c24';
}

// Floating rose petals
function initFloatingPetals() {
    if (document.getElementById('global-petals')) return;
    const petalsContainer = document.createElement('div');
    petalsContainer.id = 'global-petals';
    document.body.appendChild(petalsContainer);
    
    const petalColors = ['#f5d6d6', '#f9c8d4', '#e8b4c0', '#fce4ec', '#f8bbd0', '#f3cfd7'];
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.className = 'global-petal';
        const size = 10 + Math.random() * 10;
        petal.style.cssText = `
            left: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size + 4}px;
            background: ${petalColors[Math.floor(Math.random() * petalColors.length)]};
            animation-duration: ${5 + Math.random() * 12}s;
            animation-delay: ${Math.random() * 15}s;
            transform: rotate(${Math.random() * 360}deg);
        `;
        petalsContainer.appendChild(petal);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    if (window.location.pathname.includes('notes.html')) fetchMediumPosts();
    if (window.location.pathname.includes('socials.html')) initContactForm();
    initFloatingPetals();
});