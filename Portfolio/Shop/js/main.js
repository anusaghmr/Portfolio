/* ==========================================================================
   Wholesale Puja Items Shop - Main Javascript
   ========================================================================== */

// Base Product Catalog
const baseProducts = [
  // Puja Samagri
  {
    id: "ps-thali",
    name: "Premium Copper Puja Thali Set",
    category: "puja-samagri",
    image: "assets/images/cat_puja_samagri.png",
    badge: "Best Seller"
  },
  {
    id: "ps-panchapatra",
    name: "Pure Brass Pancha Patra & Spoon",
    category: "puja-samagri",
    image: "assets/images/cat_puja_samagri.png",
    badge: "Artisan Made"
  },
  {
    id: "ps-camphor",
    name: "Premium Bhimseni Camphor (Pure)",
    category: "puja-samagri",
    image: "assets/images/cat_puja_samagri.png",
    badge: "100% Organic"
  },

  // Idols and Statues
  {
    id: "id-ganesha",
    name: "Handcrafted Brass Ganesha Idol",
    category: "idols",
    image: "assets/images/cat_idols.png",
    badge: "Pure Brass"
  },
  {
    id: "id-lakshmi",
    name: "Glow Brass Lakshmi Statue",
    category: "idols",
    image: "assets/images/cat_idols.png",
    badge: "Premium Finish"
  },
  {
    id: "id-radhakrishna",
    name: "Marble Dust Radha Krishna Statue",
    category: "idols",
    image: "assets/images/cat_idols.png",
    badge: "Hand-painted"
  },

  // Incense and Dhoop
  {
    id: "inc-sandalwood",
    name: "Premium Sandalwood Agarbatti",
    category: "incense",
    image: "assets/images/cat_incense.png",
    badge: "Wholesale Pack"
  },
  {
    id: "inc-dhoop",
    name: "Organic Guggal & Loban Dhoop Cones",
    category: "incense",
    image: "assets/images/cat_incense.png",
    badge: "Eco-Friendly"
  },
  {
    id: "inc-sambrani",
    name: "Traditional Sambrani Cups",
    category: "incense",
    image: "assets/images/cat_incense.png",
    badge: "Fragrant"
  },

  // Rudraksha and Malas
  {
    id: "rud-mala",
    name: "Panchmukhi Rudraksha Japa Mala",
    category: "rudraksha",
    image: "assets/images/cat_rudraksha.png",
    badge: "Lab Certified"
  },
  {
    id: "rud-sandal",
    name: "Red Sandalwood (Lal Chandan) Mala",
    category: "rudraksha",
    image: "assets/images/cat_rudraksha.png",
    badge: "Authentic"
  },
  {
    id: "rud-tulsi",
    name: "Natural Tulsi Japa Mala",
    category: "rudraksha",
    image: "assets/images/cat_rudraksha.png",
    badge: "Devotional"
  },

  // Decorative Religious Items
  {
    id: "dec-bell",
    name: "Ornate Brass Hanging Temple Bell",
    category: "decorative",
    image: "assets/images/cat_decorative.png",
    badge: "Heavy Brass"
  },
  {
    id: "dec-toran",
    name: "Marigold & Mango Leaves Door Toran",
    category: "decorative",
    image: "assets/images/cat_decorative.png",
    badge: "Festive Art"
  },
  {
    id: "dec-aasan",
    name: "Velvet Puja Aasan Cloth",
    category: "decorative",
    image: "assets/images/cat_decorative.png",
    badge: "Zari Work"
  },

  // Festival Essentials
  {
    id: "fest-diyas",
    name: "Traditional Clay Diyas (Bulk)",
    category: "festivals",
    image: "https://images.unsplash.com/photo-1605847444195-223040b5d97d?auto=format&fit=crop&w=600&q=80",
    badge: "Eco-Friendly"
  },
  {
    id: "fest-akhand",
    name: "Brass Akhand Diya with Glass Chimney",
    category: "festivals",
    image: "https://images.unsplash.com/photo-1605847444195-223040b5d97d?auto=format&fit=crop&w=600&q=80",
    badge: "Premium Glass"
  },
  {
    id: "fest-stencils",
    name: "Festival Rangoli Stencil Kit",
    category: "festivals",
    image: "https://images.unsplash.com/photo-1605847444195-223040b5d97d?auto=format&fit=crop&w=600&q=80",
    badge: "Kid-Friendly"
  }
];

function generateRandomProducts(count) {
  const categories = [
    {
      slug: "puja-samagri",
      image: "assets/images/cat_puja_samagri.png",
      nameParts: [
        "Divine Aarti Plate Set",
        "Sacred Kumkum Box",
        "Holy Ghee Diya Pack",
        "Ritual Sandalwood Paste",
        "Pooja Cotton Wicks",
        "Brass Lota Vessel",
        "Scented Agarbatti Bundle",
        "Holy Water Copper Lota",
        "Prayer Thread Bundle",
        "Sacred Flower Basket"
      ],
      badges: ["Wholesale Pack", "Best Seller", "New Arrival", "Premium"]
    },
    {
      slug: "idols",
      image: "assets/images/cat_idols.png",
      nameParts: [
        "Mini Shiva Lingam",
        "Brass Saraswati Idol",
        "Ganesha Blessing Figurine",
        "Krishna Flute Statue",
        "Hanuman Wall Plaque",
        "Durga Face Frame",
        "Lakshmi Lotus Idol",
        "Vishnu Chakra Murti",
        "Radha Krishna Pair",
        "Shakti Yantra Sculpt"
      ],
      badges: ["Pure Brass", "Handcrafted", "Limited Stock", "Premium Finish"]
    },
    {
      slug: "incense",
      image: "assets/images/cat_incense.png",
      nameParts: [
        "Herbal Dhoop Stick Pack",
        "Forest Sandal Incense",
        "Nag Champa Resin Box",
        "Pure Musk Pooja Cone",
        "Camphor Cube Bundle",
        "Aromatic Temple Oil",
        "Lotus Incense Cup",
        "Bamboo Holder Kit",
        "Sacred Smudge Bundle",
        "Golden Aura Agarbatti"
      ],
      badges: ["Eco-Friendly", "Fragrant", "Wholesale Pack", "Long Burn"]
    },
    {
      slug: "rudraksha",
      image: "assets/images/cat_rudraksha.png",
      nameParts: [
        "Gauri Shankar Rudraksha",
        "Navgraha Bead Set",
        "Tulsi Japa Wrist Mala",
        "Sandalwood Pendant Mala",
        "Silver Cap Rudraksha",
        "108 Seed Prayer Belt",
        "Chakra Healing Mala",
        "Devotional Rosary Strand",
        "Blessing Bead Bracelet",
        "Meditation Mala Pack"
      ],
      badges: ["Authentic", "Lab Certified", "Devotional", "Premium"]
    },
    {
      slug: "decorative",
      image: "assets/images/cat_decorative.png",
      nameParts: [
        "Temple Curtain Panel",
        "Golden Wall Mandala",
        "Silk Puja Mat",
        "Decorative Candle Stand",
        "Brass Bell Chain",
        "Marigold Door Garlands",
        "Silk Toran Set",
        "Festive Lantern Pair",
        "Prayer Flags Bundle",
        "Floral Wall Accent"
      ],
      badges: ["Festive Art", "Handcrafted", "Premium", "Limited Edition"]
    },
    {
      slug: "festivals",
      image: "https://images.unsplash.com/photo-1605847444195-223040b5d97d?auto=format&fit=crop&w=600&q=80",
      nameParts: [
        "Festival Gift Box",
        "Aarti Lamp Combo",
        "Diwali Candle Tray",
        "Navratri Idol Kit",
        "Rangoli Color Pack",
        "Eco Diya Stand",
        "Temple Banner Set",
        "Festival Bell Set",
        "Holy Puja Kit",
        "Pooja Sweets Basket"
      ],
      badges: ["Eco-Friendly", "Bulk Discount", "New Arrival", "Limited Stock"]
    }
  ];

  const products = [];

  for (let index = 0; index < count; index += 1) {
    const category = categories[index % categories.length];
    const itemName = category.nameParts[index % category.nameParts.length];
    const badge = category.badges[index % category.badges.length];
    const id = `rnd-${category.slug}-${String(index + 1).padStart(3, "0")}`;

    products.push({
      id,
      name: itemName,
      category: category.slug,
      image: category.image,
      badge
    });
  }

  return products;
}

function enrichProduct(product) {
  const categoryDefaults = {
    "puja-samagri": {
      material: "Brass, copper, and holy wood",
      packaging: "Packed in strong cartons with moisture-resistant liners",
      uses: ["Daily puja","Temple rituals","Retail gifting"],
      moq: "MOQ 25 sets",
      customization: "Custom engraving and premium gift packaging available on request"
    },
    idols: {
      material: "Brass, marble dust, and hand-painted finishes",
      packaging: "Wrapped in cloth and secured with foam inserts",
      uses: ["Home temples","Festival displays","Temple offerings"],
      moq: "MOQ 10 pieces",
      customization: "Custom size, finish, and packaging options available"
    },
    incense: {
      material: "Natural herbs, resins, and aromatic woods",
      packaging: "Sealed bulk cartons with inner sachets",
      uses: ["Daily worship","Meditation","Festival ceremonies"],
      moq: "MOQ 100 packs",
      customization: "Private label fragrance blends and custom boxes available"
    },
    rudraksha: {
      material: "Authentic Rudraksha seeds and Tulsi wood",
      packaging: "Cloth pouches and wholesale cartons",
      uses: ["Japa mala","Meditation","Spiritual gifting"],
      moq: "MOQ 50 malas",
      customization: "Thread color, bead counts, and gift sets can be customized"
    },
    decorative: {
      material: "Brass, fabric, lacquer, and wood",
      packaging: "Protected in tissue paper and packed in strong carton boxes",
      uses: ["Home decor","Festival styling","Retail display"],
      moq: "MOQ 40 pieces",
      customization: "Custom motifs and festival bundles available"
    },
    festivals: {
      material: "Clay, brass, fiber, and silk",
      packaging: "Festival-ready boxed sets for bulk wholesale orders",
      uses: ["Festival celebrations","Temple puja","Corporate gifting"],
      moq: "MOQ 30 kits",
      customization: "Branded festival bundles and gift trays available"
    }
  };

  const defaults = categoryDefaults[product.category] || {};

  return {
    description: product.description || `${product.name} is a premium wholesale item suitable for temple stores and festive retail.`,
    significance: product.significance || `Ideal for ceremonial use, gifting, and spiritual retail layouts. Perfect for bulk ordering and wholesale resale.`,
    variants: product.variants || "Standard wholesale bundles and retail-count packs available.",
    material: product.material || defaults.material || "Temple-grade materials",
    packaging: product.packaging || defaults.packaging || "Bulk protective packaging with retail-friendly branding available.",
    uses: product.uses || defaults.uses || ["Daily puja","Festival use","Retail display"],
    moq: product.moq || defaults.moq || "MOQ 50 units",
    customization: product.customization || defaults.customization || "Customization available on request.",
    images: product.images || [product.image],
    sku: product.sku || product.id.toUpperCase().replace(/-/g, "-"),
    related: product.related || [],
    ...product
  };
}

const productsData = [...baseProducts, ...generateRandomProducts(82)].map(enrichProduct);

// Configuration
const WHATSAPP_NUMBER = "9779851014810"; // Replace with store's wholesale WhatsApp number

// Initialize Functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupStickyHeader();
  setupMobileMenu();
  relocateCatalogSidebar();
  setupScrollReveal();
  setupDarkMode();
  setupProductModalEvents();

  // Page Specific Init
  if (document.getElementById("products-catalog")) {
    initProductsPage();
  }
  if (document.getElementById("gallery-wrapper")) {
    initGalleryPage();
  }
  if (document.getElementById("contact-form")) {
    initContactForm();
    setupFAQAccordion();
  }
  
  setupDynamicWhatsAppFloater();
});

// 1. Sticky Header
function setupStickyHeader() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. Mobile Burger Navigation
function setupMobileMenu() {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// 3. Move catalog sidebar into mobile menu on small screens
function relocateCatalogSidebar() {
  const sidebar = document.querySelector(".filter-sidebar");
  const navMenu = document.querySelector(".nav-menu");
  const productsWrapper = document.querySelector(".products-wrapper");
  const productsDisplay = document.querySelector(".products-display");
  if (!sidebar || !navMenu || !productsWrapper || !productsDisplay) return;

  const mobileBreakpoint = 900;
  if (window.innerWidth <= mobileBreakpoint) {
    if (!navMenu.contains(sidebar)) {
      const insertBeforeNode = navMenu.querySelector(".nav-cta") || null;
      navMenu.insertBefore(sidebar, insertBeforeNode);
    }
  } else {
    if (!productsWrapper.contains(sidebar)) {
      productsWrapper.insertBefore(sidebar, productsDisplay);
    }
  }
}

window.addEventListener("resize", relocateCatalogSidebar);

// Close mobile menu when clicking outside it
window.addEventListener("click", (event) => {
  const navMenu = document.querySelector(".nav-menu");
  const burger = document.querySelector(".burger");
  if (!navMenu || !burger) return;
  if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
    navMenu.classList.remove("active");
    burger.classList.remove("active");
  }
});

// 4. Floating WhatsApp Setup
function setupDynamicWhatsAppFloater() {
  const floater = document.querySelector(".whatsapp-float");
  if (floater) {
    const text = encodeURIComponent("Hello! I am visiting your website and have some questions about wholesale puja items.");
    floater.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }
}

// Product Modal Helpers
function setupProductModalEvents() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".product-modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductModal);
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeProductModal();
    }
  });
}

function openProductModal(product) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  modal.classList.add("active");
  document.body.classList.add("no-scroll");
  modal.setAttribute("aria-hidden", "false");

  const mainImage = modal.querySelector("#modal-main-image");
  const thumbs = modal.querySelector("#modal-thumbs");
  const modalCategory = modal.querySelector("#modal-category");
  const modalName = modal.querySelector("#modal-name");
  const modalDescription = modal.querySelector("#modal-description");
  const modalSignificance = modal.querySelector("#modal-significance");
  const modalMaterial = modal.querySelector("#modal-material");
  const modalVariants = modal.querySelector("#modal-variants");
  const modalPackaging = modal.querySelector("#modal-packaging");
  const modalMoq = modal.querySelector("#modal-moq");
  const modalCustomization = modal.querySelector("#modal-customization");
  const modalUses = modal.querySelector("#modal-uses");
  const modalSku = modal.querySelector("#modal-sku");
  const requestLink = modal.querySelector("#modal-request-price");
  const orderLink = modal.querySelector("#modal-order-whatsapp");

  const whatsappText = encodeURIComponent(`Hello, I want to request the wholesale price for ${product.name} (SKU: ${product.sku}). Please share bulk order details and MOQ.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  if (mainImage) {
    mainImage.src = product.images[0] || product.image;
    mainImage.alt = product.name;
  }

  if (thumbs) {
    thumbs.innerHTML = product.images.map((src, index) => `
      <img src="${src}" alt="${product.name} image ${index + 1}" class="product-modal-thumb${index === 0 ? " active" : ""}" data-src="${src}">
    `).join("");

    thumbs.querySelectorAll(".product-modal-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => switchModalImage(thumb.dataset.src));
    });
  }

  if (modalCategory) modalCategory.textContent = product.category.replace("-", " ");
  if (modalName) modalName.textContent = product.name;
  if (modalDescription) modalDescription.textContent = product.description;
  if (modalSignificance) modalSignificance.textContent = product.significance;
  if (modalMaterial) modalMaterial.textContent = product.material;
  if (modalVariants) modalVariants.textContent = product.variants;
  if (modalPackaging) modalPackaging.textContent = product.packaging;
  if (modalMoq) modalMoq.textContent = product.moq;
  if (modalCustomization) modalCustomization.textContent = product.customization;
  if (modalSku) modalSku.textContent = product.sku;

  if (modalUses) {
    modalUses.innerHTML = product.uses.map((use) => `<li>${use}</li>`).join("");
  }

  if (requestLink) requestLink.href = whatsappUrl;
  if (orderLink) orderLink.href = whatsappUrl;

  renderRelatedProducts(product);
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  modal.classList.remove("active");
  document.body.classList.remove("no-scroll");
  modal.setAttribute("aria-hidden", "true");
}

function switchModalImage(src) {
  const mainImage = document.getElementById("modal-main-image");
  if (mainImage && src) {
    mainImage.src = src;
  }

  const thumbs = document.querySelectorAll(".product-modal-thumb");
  thumbs.forEach((thumb) => {
    if (thumb.dataset.src === src) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function getRelatedProducts(product) {
  const relatedIds = product.related || [];
  const relatedProducts = relatedIds
    .map((id) => productsData.find((item) => item.id === id))
    .filter(Boolean);

  const sameCategory = productsData
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4 - relatedProducts.length);

  return [...relatedProducts, ...sameCategory].slice(0, 4);
}

function renderRelatedProducts(product) {
  const relatedContainer = document.getElementById("modal-related");
  if (!relatedContainer) return;

  const related = getRelatedProducts(product);
  if (related.length === 0) {
    relatedContainer.innerHTML = `<p>No related products available.</p>`;
    return;
  }

  relatedContainer.innerHTML = related
    .map(
      (item) => `
        <button class="product-modal-related-card" type="button" data-product-id="${item.id}">
          <span>${item.name}</span>
          <small>${item.category.replace("-", " ")}</small>
        </button>
      `
    )
    .join("");

  relatedContainer.querySelectorAll(".product-modal-related-card").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.productId;
      const relatedProduct = productsData.find((item) => item.id === id);
      if (relatedProduct) {
        openProductModal(relatedProduct);
      }
    });
  });
}

// 4. Products Page Logic
function initProductsPage() {
  const productsGrid = document.getElementById("products-grid");
  const searchInput = document.getElementById("search-input");
  const categoryBtns = document.querySelectorAll(".category-btn");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");

  let currentCategory = "all";
  let searchQuery = "";

  // Render Product Catalog
  function renderProducts() {
    productsGrid.innerHTML = "";
    
    // Filter
    const filtered = productsData.filter(product => {
      const matchesCategory = (currentCategory === "all" || product.category === currentCategory);
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Update Counter
    resultsCount.textContent = `Showing ${filtered.length} products`;

    if (filtered.length === 0) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
      
      filtered.forEach(product => {
        // Construct pre-filled WhatsApp link for product inquiry
        const wsText = encodeURIComponent(`Hello, I want to inquire about the wholesale price of: "${product.name}" (ID: ${product.id}). Please share bulk pricing details.`);
        const wsUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${wsText}`;

        const card = document.createElement("div");
        card.className = "product-card scroll-reveal";
        card.innerHTML = `
          <span class="product-badge">${product.badge}</span>
          <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          </div>
          <div class="product-info">
            <span class="product-cat-label">${product.category.replace("-", " ")}</span>
            <h3 class="product-title">${product.name}</h3>
            </div>
          </div>
        `;
        card.addEventListener("click", () => openProductModal(product));
        const whatsappBtn = card.querySelector(".btn-whatsapp");
        if (whatsappBtn) {
          whatsappBtn.addEventListener("click", (event) => event.stopPropagation());
        }
        productsGrid.appendChild(card);
      });
    }

    // Refresh scroll animations
    setupScrollReveal();
  }

  // Update categories count badges
  function updateCategoryCounts() {
    categoryBtns.forEach(btn => {
      const cat = btn.dataset.category;
      const countSpan = btn.querySelector(".count");
      if (countSpan) {
        const count = cat === "all" 
          ? productsData.length 
          : productsData.filter(p => p.category === cat).length;
        countSpan.textContent = count;
      }
    });
  }

  // Search Event Listener
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Category Buttons Event Listeners
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Init Execution
  updateCategoryCounts();
  renderProducts();
}

// 5. Gallery Page Lightbox Logic
function initGalleryPage() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxTitle = lightbox.querySelector(".lightbox-title");
  const lightboxTag = lightbox.querySelector(".lightbox-tag");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => ({
    src: item.dataset.src,
    title: item.querySelector("h4").textContent,
    tag: item.querySelector("p").textContent
  }));

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
  }

  function updateLightboxContent() {
    const item = images[currentIndex];
    lightboxImg.src = item.src;
    lightboxTitle.textContent = item.title;
    lightboxTag.textContent = item.tag;
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxContent();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxContent();
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Close lightbox on clicking outside content
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
}

// 6. Contact Form Verification & Handling
function initContactForm() {
  const form = document.getElementById("contact-form");
  const modalAlert = document.getElementById("form-alert");
  const modalClose = modalAlert.querySelector(".btn-close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic client-side validation
    const name = document.getElementById("form-name").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const inquiryType = document.getElementById("form-inquiry").value;
    const msg = document.getElementById("form-message").value.trim();

    if (!name || !phone || !email || !inquiryType || !msg) {
      alert("Please fill out all required fields.");
      return;
    }

    // Success Mockup - Open Custom Modal
    modalAlert.classList.add("active");
    form.reset();
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalAlert.classList.remove("active");
    });
  }

  modalAlert.addEventListener("click", (e) => {
    if (e.target === modalAlert) {
      modalAlert.classList.remove("active");
    }
  });
}

// 7. Scroll Reveal Animation Setup
function setupScrollReveal() {
  const reveals = document.querySelectorAll(".scroll-reveal");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });
}

// 8. Dark Mode Toggle
function setupDarkMode() {
  const toggleBtns = document.querySelectorAll(".dark-mode-toggle");
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
    });
  });
}

// 9. FAQ Accordion
function setupFAQAccordion() {
  const faqHeaders = document.querySelectorAll(".faq-question-header");
  faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");
    });
  });
}
