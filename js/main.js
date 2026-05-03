// Switch between pages with active nav indicator
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active-section');
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active-nav');
    });
    
    // Add active class to selected nav item
    const activeNav = document.getElementById(`nav-${sectionId}`);
    if (activeNav) {
        activeNav.classList.add('active-nav');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle blog post expansion
function toggleBlog(elementId, btnElement) {
    const textElement = document.getElementById(elementId);
    
    if (textElement.classList.contains('truncated')) {
        textElement.classList.remove('truncated');
        btnElement.textContent = 'See Less';
    } else {
        textElement.classList.add('truncated');
        btnElement.textContent = 'See More';
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const statusDiv = document.getElementById('formStatus');
    statusDiv.style.display = 'block';
    statusDiv.style.background = '#f0e4de';
    statusDiv.style.color = '#c07a5b';
    statusDiv.innerHTML = '⏱️ Sending...';
    
    // Get form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // DEMO MODE - shows success message
    setTimeout(() => {
        statusDiv.style.background = '#e0f0e0';
        statusDiv.style.color = '#2d2d2d';
        statusDiv.innerHTML = '✓ Message sent! (Demo mode)';
        document.getElementById('contactForm').reset();
    }, 1500);
}

// Medium posts data
const mediumPosts = [
    {
        title: "Love That Changed Me",
        url: "https://medium.com/@anusaghmr/love-that-changed-me-b18a1d50dd69",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*MfBKLvzLfEeIgcf2",
        excerpt: "I never thought I'd make excuses just to stay, never thought I'd let my guarded walls fall away...",
        date: "Feb 19, 2025"
    },
    {
        title: "The Woolen Sweater",
        url: "https://medium.com/@anusaghmr/the-woolen-sweater-7ff2866d8dc1",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*aVh6LPlDdffD6j0-w60XUw.png",
        excerpt: "Ful haru muskauxan, timile dekhxau ra?? Putali le geet gauxa, timile sunxau ra?? This newly released movie...",
        date: "Jan 25, 2025"
    },
    {
        title: "How AI Is Transforming Coffee",
        url: "https://medium.com/@anusaghmr/how-ai-is-transforming-the-coffee-from-farm-to-your-cup-4b63f06afcbd",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gYlMkvHsPcUFzmyy",
        excerpt: "Farm to cup, smarter: Have you ever held a warm cup of coffee and wondered about the journey it took...",
        date: "Mar 10, 2025"
    },
    {
        title: "The Intro",
        url: "https://medium.com/@anusaghmr/the-intro-dce3833fd902",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*PEL9WDOD31frV2cl",
        excerpt: "Call me a cinephile, and you'll see the widest smile spread across my face. My journey started when I was a kid...",
        date: "Feb 5, 2025"
    },
    {
        title: "My Watched List",
        url: "https://medium.com/@anusaghmr/my-watched-list-ad5c3161598c",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jGEuCxSkpqpGWPMn",
        excerpt: "I'm not sure if it's a good or bad habit, but I've always had a habit of writing things down...",
        date: "Mar 1, 2025"
    },
    {
        title: "Don’t Love Me This Hard",
        url: "https://medium.com/@anusaghmr/dont-love-me-this-hard-4d5fea9f3b6e",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*Ohs9Qqe8ur_XSANP",
        excerpt: "Don’t tell me what u feel, I see a connection build Don’t check on me from time to time, I will believe you are with me…..",
        date: "Sep 22, 2022"
    }
];

// Function to load Medium posts
function loadMediumPosts() {
    const container = document.getElementById('medium-posts-container');
    if (!container) return;
    
    let html = '';
    mediumPosts.forEach((post, index) => {
        html += `
            <div class="example-item">
                <a href="${post.url}" target="_blank" style="text-decoration: none; color: inherit;">
                    <div style="position: relative; width: 100%; height: 200px; overflow: hidden; border-radius: 16px; margin-bottom: 1rem;">
                        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" onerror="this.src='https://via.placeholder.com/400x200?text=${post.title.replace(/ /g, '+')}'">
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <span class="shining-star" id="star${index+1}">⭐</span>
                        <span style="font-weight: 600; font-size: 1.2rem; color: #c07a5b;">${post.title}</span>
                    </div>
                    <p style="color: #888; font-size: 0.9rem; margin-bottom: 0.5rem;">${post.date}</p>
                    <p style="color: #3e3e3e; font-size: 0.95rem; line-height: 1.5;">${post.excerpt}</p>
                    <p style="color: #c07a5b; font-size: 0.9rem; margin-top: 0.5rem; text-decoration: underline;">Read on Medium →</p>
                </a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadMediumPosts();
    
    // Check which section is active and set nav accordingly
    const activeSection = document.querySelector('.page-section.active-section');
    if (activeSection) {
        const sectionId = activeSection.getAttribute('id');
        if (sectionId && sectionId !== 'home') {
            const activeNav = document.getElementById(`nav-${sectionId}`);
            if (activeNav) {
                activeNav.classList.add('active-nav');
            }
        }
    }
});