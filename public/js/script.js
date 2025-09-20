// NodeFarm Frontend JavaScript

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌱 NodeFarm loaded successfully!');
    
    // Initialize the application
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Add smooth scrolling for anchor links
    addSmoothScrolling();
    
    // Add loading animation for cards
    addCardAnimations();
    
    // Add shopping cart functionality
    initializeShoppingCart();
    
    // Add search functionality
    addSearchFunctionality();
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add animation effects to cards
function addCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    // Intersection Observer for fade-in animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Set initial state and observe cards
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Shopping cart functionality
let cart = [];

function initializeShoppingCart() {
    // Add to cart button functionality
    const addToCartButtons = document.querySelectorAll('.product__link');
    
    addToCartButtons.forEach(button => {
        if (button.href.includes('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                addToCart();
            });
        }
    });
    
    // Display cart count
    updateCartDisplay();
}

function addToCart() {
    // Get product information from the current page
    const productName = document.querySelector('.product__name')?.textContent;
    const productPrice = document.querySelector('.product__details p:last-child')?.textContent.match(/\$(\d+\.?\d*)/)?.[1];
    
    if (productName && productPrice) {
        const product = {
            name: productName,
            price: parseFloat(productPrice),
            id: Date.now() // Simple ID generation
        };
        
        cart.push(product);
        localStorage.setItem('nodeFarmCart', JSON.stringify(cart));
        
        // Show success message
        showNotification(`✅ ${productName} added to cart!`, 'success');
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('nodeFarmCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    // Update cart count in UI (if cart display exists)
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Search functionality
function addSearchFunctionality() {
    // Create search input if on overview page
    if (document.querySelector('.cards-container')) {
        createSearchInput();
    }
}

function createSearchInput() {
    const container = document.querySelector('.container');
    const subtitle = document.querySelector('.subtitle');
    
    const searchHTML = `
        <div class="search-container" style="text-align: center; margin-bottom: 3rem;">
            <input type="text" id="productSearch" placeholder="🔍 Search products..." 
                   style="padding: 1rem 2rem; font-size: 1.6rem; border: none; border-radius: 25px; 
                          width: 30rem; max-width: 80%; box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);">
        </div>
    `;
    
    subtitle.insertAdjacentHTML('afterend', searchHTML);
    
    // Add search functionality
    const searchInput = document.getElementById('productSearch');
    searchInput.addEventListener('input', filterProducts);
}

function filterProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const productName = card.querySelector('.card__title').textContent.toLowerCase();
        const isVisible = productName.includes(searchTerm);
        
        card.style.display = isVisible ? 'block' : 'none';
        
        // Animate the filtering
        if (isVisible) {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 100);
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        padding: '1rem 2rem',
        backgroundColor: type === 'success' ? '#51cf66' : '#339af0',
        color: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.2)',
        fontSize: '1.4rem',
        fontWeight: '600',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// API functionality for future enhancements
class NodeFarmAPI {
    static async getProducts() {
        try {
            const response = await fetch('/api/products');
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    }
    
    static async getProduct(id) {
        try {
            const response = await fetch(`/api/products/${id}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NodeFarmAPI, showNotification };
}


