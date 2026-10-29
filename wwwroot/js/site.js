// ==========================================================================
// KALASH AMULYA E-COMMERCE JAVASCRIPT ARCHITECTURE (ROOPAK STORES SYSTEM)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----------------------------------------------------------------------
    // 1. PRODUCT CATALOG DATA REPOSITORY (DYNAMIC FROM CATALOG SERVICE)
    // ----------------------------------------------------------------------
        let productsData = (window.AMULYA_CATALOG && Array.isArray(window.AMULYA_CATALOG) && window.AMULYA_CATALOG.length > 0)
        ? window.AMULYA_CATALOG
        : [
            // DRY FRUITS (5 items)
            {
                id: 1,
                name: "Royal Jumbo Cashews (Kaju W240)",
                category: "Dry Fruits",
                price: 420,
                mrp: 520,
                weight: "250g Jar",
                description: "Hand-graded jumbo whole white cashews. Naturally creamy & rich in healthy fats.",
                image: "/images/cashew_bowl.png",
                tag: "BESTSELLER",
                stock: 85
            },
            {
                id: 2,
                name: "California Crisp Almonds (Badam)",
                category: "Dry Fruits",
                price: 380,
                mrp: 480,
                weight: "250g Jar",
                description: "Crunchy, golden-brown California badam rich in Vitamin E, magnesium and antioxidants.",
                image: "/images/almond_bowl.png",
                tag: "HARVEST SELECT",
                stock: 64
            },
            {
                id: 3,
                name: "Salted Roasted Pistachios (Pista)",
                category: "Dry Fruits",
                price: 520,
                mrp: 650,
                weight: "250g Jar",
                description: "Naturally cracked, gently roasted with Himalayan sea salt. Unopened shell-free guarantee.",
                image: "/images/pistachio_bowl.png",
                tag: "POPULAR",
                stock: 42
            },
            {
                id: 4,
                name: "Royal Iranian Mamra Badam",
                category: "Dry Fruits",
                price: 750,
                mrp: 950,
                weight: "250g Jar",
                description: "Original high-oil Iranian Mamra giri. Unrivalled natural sweetness and brain nourishment.",
                image: "/images/almond_bowl.png",
                tag: "ROYAL HARVEST",
                stock: 28
            },
            {
                id: 5,
                name: "Jumbo Foxnut Phool Makhana",
                category: "Dry Fruits",
                price: 290,
                mrp: 360,
                weight: "200g Jar",
                description: "Handpicked jumbo 6-suta fox nuts. Air-popped to airy crispness with zero bitter seeds.",
                image: "/images/makhana_bowl.png",
                tag: "SUPER-CRUNCH",
                stock: 14
            },

            // SEEDS (4 items)
            {
                id: 6,
                name: "Raw Sunflower Seeds",
                category: "Seeds",
                price: 190,
                mrp: 240,
                weight: "250g Jar",
                description: "Cleaned kernel kernels supporting cellular repair, cardiac health, and radiant skin.",
                image: "/images/cashew_bowl.png",
                tag: "VITAMIN E",
                stock: 82
            },
            {
                id: 7,
                name: "Roasted Watermelon Seeds",
                category: "Seeds",
                price: 210,
                mrp: 260,
                weight: "200g Jar",
                description: "Crunchy hulled tarbooj seeds loaded with magnesium and plant protein for quick snacking.",
                image: "/images/pistachio_bowl.png",
                tag: "ZINC & PROTEIN",
                stock: 65
            },
            {
                id: 8,
                name: "Golden Flax Seeds (Alsi)",
                category: "Seeds",
                price: 150,
                mrp: 190,
                weight: "250g Jar",
                description: "Highest natural vegetarian source of ALA Omega-3 fatty acids for lipid management.",
                image: "/images/almond_bowl.png",
                tag: "OMEGA-3 HERO",
                stock: 90
            },
            {
                id: 9,
                name: "Organic Chia Seeds",
                category: "Seeds",
                price: 220,
                mrp: 280,
                weight: "250g Jar",
                description: "Pristine raw black chia seeds that form a soothing gut-protective gel when soaked in water.",
                image: "/images/walnut_bowl.png",
                tag: "SOLUBLE FIBER",
                stock: 75
            },

            // SALTS & SEASONINGS (4 items)
            {
                id: 10,
                name: "Himalayan Pink Rock Salt Crystals",
                category: "Salts & Seasonings",
                price: 140,
                mrp: 180,
                weight: "500g Jar",
                description: "Unrefined pink subterranean crystals rich in natural trace electrolytes.",
                image: "/images/pistachio_pile.png",
                tag: "MINERAL RICH",
                stock: 120
            },
            {
                id: 11,
                name: "Kala Namak (Black Salt Powder)",
                category: "Salts & Seasonings",
                price: 110,
                mrp: 140,
                weight: "500g Jar",
                description: "Authentic kiln-fired digestive rock salt with traditional pungent aroma.",
                image: "/images/cashew_pile.png",
                tag: "AYURVEDIC",
                stock: 95
            },
            {
                id: 12,
                name: "Organic Oregano & Herb Blend",
                category: "Salts & Seasonings",
                price: 160,
                mrp: 200,
                weight: "100g Jar",
                description: "Sun-dried aromatic Mediterranean oregano leaves, crushed pepper & sea salt.",
                image: "/images/walnut_pile.png",
                tag: "HANDCRAFTED",
                stock: 60
            },
            {
                id: 13,
                name: "Royal Heritage Spices & Shahi Garam Masala",
                category: "Salts & Seasonings",
                price: 210,
                mrp: 260,
                weight: "100g Jar",
                description: "Stone-ground whole spice blend featuring green cardamom, clove, cinnamon & mace.",
                image: "/images/cashew_pile.png",
                tag: "AROMATIC",
                stock: 55
            },

            // PRESERVES & SWEETS (5 items)
            {
                id: 14,
                name: "Pure Desi Shakkariya Jaggery (Gur)",
                category: "Preserves & Sweets",
                price: 195,
                mrp: 250,
                weight: "500g Jar",
                description: "Additive-free raw cane sugar blocks clarifying gut toxins and boosting iron.",
                image: "/images/walnut_bowl.png",
                tag: "PURE GUR",
                stock: 48
            },
            {
                id: 15,
                name: "Satvik Pure Cow Ghee Besan Ladoo",
                category: "Preserves & Sweets",
                price: 320,
                mrp: 400,
                weight: "400g Jar",
                description: "Traditional slow-roasted gram flour sweets crafted with A2 bilona cow ghee and rock sugar.",
                image: "/images/almond_pile.png",
                tag: "DESI GHEE",
                stock: 30
            },
            {
                id: 16,
                name: "Organic Amla Murabba in Mishri",
                category: "Preserves & Sweets",
                price: 260,
                mrp: 325,
                weight: "500g Glass Jar",
                description: "Whole Himalayan wild amla steeped slowly in unrefined raw rock sugar syrup.",
                image: "/images/makhana_bowl.png",
                tag: "HERITAGE",
                stock: 35
            },
            {
                id: 17,
                name: "Chatpata Amla Candy",
                category: "Preserves & Sweets",
                price: 180,
                mrp: 225,
                weight: "300g Jar",
                description: "Sweet and sour Vitamin-C bites spiced with digestive rock salt and cumin.",
                image: "/images/cashew_bowl.png",
                tag: "DIGESTIVE",
                stock: 70
            },
            {
                id: 18,
                name: "Traditional Ramkela Mango Pickles",
                category: "Preserves & Sweets",
                price: 240,
                mrp: 300,
                weight: "500g Jar",
                description: "Sun-cured raw Ramkela mango steeped in cold-pressed mustard oil with fenugreek & fennel.",
                image: "/images/walnut_pile.png",
                tag: "COLD-PRESSED",
                stock: 40
            },

            // GRAINS & PULSES (3 items)
            {
                id: 19,
                name: "Certified Unpolished Pulses (20 Varieties)",
                category: "Grains & Pulses",
                price: 185,
                mrp: 230,
                weight: "1kg Jar",
                description: "Cooperative harvested unpolished pulses. Zero chemical wash, maximum protein & earthy broth.",
                image: "/images/pistachio_bowl.png",
                tag: "100% UNPOLISHED",
                stock: 110
            },
            {
                id: 20,
                name: "Organic White Quinoa",
                category: "Grains & Pulses",
                price: 280,
                mrp: 350,
                weight: "500g Jar",
                description: "Pre-washed, saponin-free ancient super grain containing all 9 essential amino acids.",
                image: "/images/makhana_pile.png",
                tag: "COMPLETE PROTEIN",
                stock: 45
            },
            {
                id: 21,
                name: "Heritage Roasted Daliya",
                category: "Grains & Pulses",
                price: 120,
                mrp: 150,
                weight: "500g Jar",
                description: "Stone-milled broken whole wheat gently pre-roasted for quick morning porridge & khichdi.",
                image: "/images/cashew_solid.jpg",
                tag: "HIGH FIBER",
                stock: 75
            }
        ];

    // ----------------------------------------------------------------------
    // 2. STATE MANAGEMENT
    // ----------------------------------------------------------------------
    let cart = [];
    let activeFilter = "All";
    let searchQuery = "";
    let selectedModalProduct = null;

    // Load persisted demo cart from localStorage if available
    try {
        const savedCart = localStorage.getItem('kalash_amulya_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        cart = [];
    }

    function saveCart() {
        try {
            localStorage.setItem('kalash_amulya_cart', JSON.stringify(cart));
        } catch (e) {}
    }

    // ----------------------------------------------------------------------
    // 3. CORE DOM CACHE
    // ----------------------------------------------------------------------
    const productsContainer = document.getElementById('products');
    const filterTabs = document.getElementById('filterTabs');
    const productSearch = document.getElementById('productSearch');
    const globalSearchInput = document.getElementById('globalSearchInput');
    const globalSearchForm = document.getElementById('globalSearchForm');

    // Cart Drawer Elements
    const openCartBtn = document.getElementById('openCart');
    const closeCartBtn = document.getElementById('closeCart');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartCountEl = document.getElementById('cartCount');
    const drawerCountEl = document.getElementById('drawerCount');
    const cartItemsEl = document.getElementById('cartItems');
    const cartEmptyEl = document.getElementById('cartEmpty');
    const cartFooterEl = document.getElementById('cartFooter');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const continueShoppingBtn = document.getElementById('continueShopping');
    const checkoutDemoBtn = document.getElementById('checkoutDemo');
    const shippingText = document.getElementById('shippingText');

    // Quick View Modal Elements
    const productModal = document.getElementById('productModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModal');
    const modalPhoto = document.getElementById('modalPhoto');
    const modalCategory = document.getElementById('modalCategory');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalMrp = document.getElementById('modalMrp');
    const modalTag = document.getElementById('modalTag');
    const modalAddBtn = document.getElementById('modalAdd');

    // Checkout Overlay Elements
    const checkoutOverlay = document.getElementById('checkoutOverlay');
    const closeCheckoutBtn = document.getElementById('closeCheckout');
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutStepForm = document.getElementById('checkoutStepForm');
    const checkoutSuccess = document.getElementById('checkoutSuccess');
    const doneCheckoutBtn = document.getElementById('doneCheckout');
    const checkoutSummaryItems = document.getElementById('checkoutSummaryItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutShipping = document.getElementById('checkoutShipping');
    const checkoutGrandTotal = document.getElementById('checkoutGrandTotal');
    const checkoutOrderNumber = document.getElementById('checkoutOrderNumber');
    const checkoutSuccessMessage = document.getElementById('checkoutSuccessMessage');

    // Bulk Enquiry Modal Elements
    const bulkModal = document.getElementById('bulkEnquiryModal');
    const openBulkModalBtn = document.getElementById('openBulkModalBtn');
    const footerBulkBtn = document.getElementById('footerBulkBtn');
    const closeBulkModalBtn = document.getElementById('closeBulkModal');
    const bulkModalBackdrop = document.getElementById('bulkModalBackdrop');
    const bulkEnquiryForm = document.getElementById('bulkEnquiryForm');
    const bulkSuccessMessage = document.getElementById('bulkSuccessMessage');

    // Video Reels Modal Elements
    const videoModal = document.getElementById('videoModal');
    const closeVideoModalBtn = document.getElementById('closeVideoModal');
    const videoBackdrop = document.getElementById('videoBackdrop');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalDesc = document.getElementById('videoModalDesc');

    // Feedback Toast
    const toast = document.getElementById('toast');

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('visible');
        setTimeout(() => {
            toast.classList.remove('visible');
        }, 3200);
    }

    // ----------------------------------------------------------------------
    // 4. CATALOG RENDERING & FILTERING
    // ----------------------------------------------------------------------
    function renderProducts() {
        if (!productsContainer) return;

        const filtered = productsData.filter(product => {
            const matchesFilter = (activeFilter === "All" || product.category.toLowerCase() === activeFilter.toLowerCase());
            const term = searchQuery.toLowerCase();
            const matchesSearch = !term ||
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term) ||
                product.category.toLowerCase().includes(term);
            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            productsContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
                    <div style="font-size: 32px; color: var(--gold); margin-bottom: 12px;">&#10047;</div>
                    <h3 style="font-family: var(--serif); color: var(--forest); margin-bottom: 8px;">No matching products found</h3>
                    <p style="font-size: 13px;">Try searching for cashews, unpolished dal, seeds, or murabba.</p>
                </div>
            `;
            return;
        }

        productsContainer.innerHTML = filtered.map(product => {
            const isOutOfStock = product.stock !== undefined && product.stock <= 0;
            const priceFormatted = parseFloat(product.price).toFixed(2);
            const isPopular = product.tag && (
                product.tag.toUpperCase().includes('POPULAR') || 
                product.tag.toUpperCase().includes('BESTSELLER') ||
                product.tag.toUpperCase().includes('ROYAL')
            );
            const ribbonHtml = isPopular 
                ? '<div class="card-ribbon-popular">Most Popular</div>' 
                : '';

            const buttonHtml = isOutOfStock
                ? '<button type="button" class="btn-outline-add btn-out-of-stock" disabled>OUT OF STOCK</button>'
                : `<button type="button" class="btn-outline-add" onclick="event.stopPropagation(); window.handleProductCardClick(${product.id})">ADD TO CART</button>`;

            return `
            <div class="roopak-product-card" data-product-id="${product.id}" data-category="${product.category}" onclick="window.handleProductCardClick(${product.id})" style="cursor: pointer;">
                ${ribbonHtml}
                <div class="product-thumb-box" onclick="event.stopPropagation(); window.handleProductCardClick(${product.id})">
                    <div class="amulya-jar-showcase">
                        <div class="amulya-jar-cap"></div>
                        <div class="amulya-jar-neck"></div>
                        <div class="amulya-jar-body">
                            <img class="amulya-jar-fill" src="${product.image}" alt="${product.name}" onerror="this.src='/images/cashew.png'" loading="lazy">
                            <div class="amulya-jar-glare"></div>
                            <div class="amulya-jar-sticker">
                                <span class="st-brand">AMULYA</span>
                                <span class="st-name">${product.name.toUpperCase()}</span>
                            </div>
                        </div>
                        <div class="amulya-jar-shadow"></div>
                    </div>
                </div>
                <div class="product-details-box">
                    <h3 class="product-name" onclick="event.stopPropagation(); window.handleProductCardClick(${product.id})">${product.name}</h3>
                    <div class="product-price-tag">&#8377;${priceFormatted}</div>
                    ${buttonHtml}
                </div>
            </div>
            `;
        }).join('');
    }

    // Filter Buttons
    if (filterTabs) {
        filterTabs.querySelectorAll('.filter-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                filterTabs.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.getAttribute('data-filter') || "All";
                renderProducts();
            });
        });
    }

    // Category highlight pill clicks in Section 3
    document.querySelectorAll('.category-pill-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            if (cat) {
                applyCategoryFilter(cat);
            }
        });
    });

    // Nav Category links in sticky nav Tier 3
    document.querySelectorAll('.category-nav-list a[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-category');
            if (cat) {
                applyCategoryFilter(cat);
            }
        });
    });

    function applyCategoryFilter(cat) {
        activeFilter = cat;
        if (filterTabs) {
            filterTabs.querySelectorAll('.filter-pill').forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-filter') === cat);
            });
        }
        renderProducts();
        const shopSection = document.getElementById('shop');
        if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Live search handling
    if (productSearch) {
        productSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderProducts();
        });
    }

    if (globalSearchForm && globalSearchInput) {
        globalSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            searchQuery = globalSearchInput.value.trim();
            if (productSearch) productSearch.value = searchQuery;
            renderProducts();
            const shopSection = document.getElementById('shop');
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ----------------------------------------------------------------------
        // ----------------------------------------------------------------------
    // 5. CART OPERATIONS & UI SYNCHRONIZATION
    // ----------------------------------------------------------------------
    function addToCartWithDetails(productId, quantity = 1, weight = null, customPrice = null, openDrawer = true) {
        const product = productsData.find(p => p.id === parseInt(productId));
        if (!product) return;

        if (product.stock !== undefined && product.stock <= 0) {
            showToast(`Sorry, ${product.name} is currently out of stock.`);
            return;
        }

        const itemWeight = weight || product.weight || "250 g";
        const itemPrice = customPrice !== null ? customPrice : parseFloat(product.price);

        const existing = cart.find(item => item.id === product.id && item.weight === itemWeight);
        if (existing) {
            if (product.stock !== undefined && (existing.qty + quantity) > product.stock) {
                showToast(`Cannot add more than available stock (${product.stock}).`);
                return;
            }
            existing.qty += quantity;
        } else {
            cart.push({
                ...product,
                price: itemPrice,
                weight: itemWeight,
                qty: quantity
            });
        }

        saveCart();
        updateCartUI();
        showToast(`Added ${quantity} &times; ${product.name} (${itemWeight}) to your bag`);

        if (openDrawer) {
            openCart();
        }
    }

    // Default addToCart now routes to Product Details Modal per Directive
    function addToCart(productId) {
        handleProductCardClick(productId);
    }

    function removeFromCart(productId, weight = null) {
        if (weight) {
            cart = cart.filter(item => !(item.id === parseInt(productId) && item.weight === weight));
        } else {
            cart = cart.filter(item => item.id !== parseInt(productId));
        }
        saveCart();
        updateCartUI();
    }

    function updateQty(productId, delta, weight = null) {
        const item = weight 
            ? cart.find(i => i.id === parseInt(productId) && i.weight === weight)
            : cart.find(i => i.id === parseInt(productId));
        if (!item) return;

        const product = productsData.find(p => p.id === parseInt(productId));
        if (delta > 0 && product && product.stock !== undefined && item.qty >= product.stock) {
            showToast(`Cannot add more than available stock (${product.stock}).`);
            return;
        }

        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId, weight);
        } else {
            saveCart();
            updateCartUI();
        }
    }

    function updateCartUI() {
        const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        if (cartCountEl) cartCountEl.textContent = totalCount;
        if (drawerCountEl) drawerCountEl.textContent = `(${totalCount})`;
        const bottomCartCountEl = document.getElementById('bottomCartCount');
        if (bottomCartCountEl) bottomCartCountEl.textContent = totalCount;
        if (cartSubtotalEl) cartSubtotalEl.innerHTML = `&#8377;${subtotal}`;

        if (shippingText) {
            if (subtotal >= 999) {
                shippingText.innerHTML = `<strong>Congratulations!</strong> You qualify for <strong>FREE Delivery</strong> across India!`;
            } else if (subtotal > 0) {
                const diff = 999 - subtotal;
                shippingText.innerHTML = `Add <strong>&#8377;${diff}</strong> more to unlock <strong>FREE Delivery</strong>!`;
            } else {
                shippingText.innerHTML = `Free delivery on orders of &#8377;999 or more`;
            }
        }

        if (totalCount === 0) {
            if (cartEmptyEl) cartEmptyEl.style.display = 'block';
            if (cartItemsEl) cartItemsEl.innerHTML = '';
            if (cartFooterEl) cartFooterEl.style.display = 'none';
        } else {
            if (cartEmptyEl) cartEmptyEl.style.display = 'none';
            if (cartFooterEl) cartFooterEl.style.display = 'block';
            if (cartItemsEl) {
                cartItemsEl.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}" onerror="this.src='/images/cashew.png'">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <div style="font-size: 11px; color: #777; margin-bottom: 2px;">Nett Wt: <strong>${item.weight || '250 g'}</strong></div>
                            <p>&#8377;${item.price} &times; ${item.qty} = <strong>&#8377;${item.price * item.qty}</strong></p>
                            <div class="cart-item-controls">
                                <button type="button" class="qty-btn" onclick="window.kalashUpdateQty(${item.id}, -1, '${item.weight || ''}')">&minus;</button>
                                <span>${item.qty}</span>
                                <button type="button" class="qty-btn" onclick="window.kalashUpdateQty(${item.id}, 1, '${item.weight || ''}')">&#43;</button>
                                <button type="button" class="remove-btn" title="Remove item" onclick="window.kalashRemove(${item.id}, '${item.weight || ''}')">&times;</button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }

    function openCart() {
        if (cartDrawer) cartDrawer.classList.add('open');
        if (cartBackdrop) cartBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (cartBackdrop) cartBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (openCartBtn) openCartBtn.addEventListener('click', openCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
    if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
    if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);

    // Expose Global Cart Helpers
    window.kalashAddToCart = addToCart;
    window.kalashOpenCart = openCart;
    window.kalashCloseCart = closeCart;
    window.kalashUpdateQty = updateQty;
    window.kalashRemove = removeFromCart;

    // ----------------------------------------------------------------------
    // 6. 2-STAGE PRODUCT DETAILS MODAL (ROOPAK DESIGN SYSTEM)
    // ----------------------------------------------------------------------
    let currentGalleryIndex = 0;
    let selectedModalWeight = "250 g";
    let selectedModalQty = 1;
    let selectedModalPrice = 0;
    let isModalWishlisted = false;

    function setGalleryView(index) {
        currentGalleryIndex = (index + 3) % 3;
        for (let i = 0; i < 3; i++) {
            const pane = document.getElementById(`pdmView${i}`);
            const thumb = document.getElementById(`pdmThumb${i}`);
            if (pane) {
                if (i === currentGalleryIndex) pane.classList.add('active');
                else pane.classList.remove('active');
            }
            if (thumb) {
                if (i === currentGalleryIndex) thumb.classList.add('active');
                else thumb.classList.remove('active');
            }
        }
    }

    function setModalTab(tabName) {
        const tabNavs = document.querySelectorAll('.pdm-tab-nav');
        tabNavs.forEach(btn => {
            if (btn.getAttribute('data-tab') === tabName) btn.classList.add('active');
            else btn.classList.remove('active');
        });

        const tabPanes = {
            'ingredient': document.getElementById('pdmPaneIngredient'),
            'description': document.getElementById('pdmPaneDescription'),
            'company': document.getElementById('pdmPaneCompany'),
            'reviews': document.getElementById('pdmPaneReviews')
        };

        for (const [key, el] of Object.entries(tabPanes)) {
            if (el) {
                if (key === tabName) el.classList.add('active');
                else el.classList.remove('active');
            }
        }
    }

    function updateQtyDisplay() {
        const qtyEl = document.getElementById('pdmQtyVal');
        if (qtyEl) qtyEl.textContent = selectedModalQty;
    }

    function updateModalPricing() {
        if (!selectedModalProduct) return;
        const basePrice = parseFloat(selectedModalProduct.price);
        const baseMrp = parseFloat(selectedModalProduct.mrp || Math.round(basePrice * 1.25));

        const multipliers = {
            '200 g': 0.85,
            '250 g': 1.0,
            '500 g': 1.9,
            '1 kg': 3.7
        };

        const mult = multipliers[selectedModalWeight] || 1.0;
        selectedModalPrice = Math.round(basePrice * mult);
        const calcMrp = Math.round(baseMrp * mult);
        const discountPct = Math.round(((calcMrp - selectedModalPrice) / calcMrp) * 100);

        const priceEl = document.getElementById('modalPrice');
        const mrpEl = document.getElementById('modalMrp');
        const saveBadge = document.getElementById('modalSaveBadge');
        const weightLabel = document.getElementById('pdmSelectedWeightLabel');

        if (priceEl) priceEl.innerHTML = `&#8377;${selectedModalPrice.toFixed(2)}`;
        if (mrpEl) mrpEl.innerHTML = `&#8377;${calcMrp.toFixed(2)}`;
        if (saveBadge) saveBadge.textContent = `SAVE ${discountPct > 0 ? discountPct : 20}%`;
        if (weightLabel) weightLabel.textContent = selectedModalWeight;
    }

    function renderModalRelatedProducts(currentId) {
        const relatedGrid = document.getElementById('pdmRelatedGrid');
        if (!relatedGrid) return;

        const otherProds = productsData.filter(p => p.id !== currentId).slice(0, 4);
        relatedGrid.innerHTML = otherProds.map(p => `
            <div class="pdm-related-card" onclick="window.handleProductCardClick(${p.id})">
                <img class="pdm-related-img" src="${p.image}" alt="${p.name}" onerror="this.src='/images/cashew.png'">
                <div class="pdm-related-name" title="${p.name}">${p.name}</div>
                <div class="pdm-related-price">&#8377;${parseFloat(p.price).toFixed(2)}</div>
                <button type="button" class="pdm-related-btn">+ View</button>
            </div>
        `).join('');
    }

    function openProductModal(productId) {
        const product = productsData.find(p => p.id === parseInt(productId));
        if (!product || !productModal) return;
        selectedModalProduct = product;
        selectedModalQty = 1;
        selectedModalWeight = "250 g";
        isModalWishlisted = false;

        // Reset gallery
        setGalleryView(0);

        // Populate images
        const jarImg = document.getElementById('modalJarImg');
        const jarStickerName = document.getElementById('modalJarStickerName');
        const textureImg = document.getElementById('modalTextureImg');
        if (jarImg) jarImg.src = product.image;
        if (jarStickerName) jarStickerName.textContent = product.name.toUpperCase();
        if (textureImg) textureImg.src = product.image;

        // Populate titles & details
        const nameEl = document.getElementById('modalName');
        const catEl = document.getElementById('modalCategory');
        const descEl = document.getElementById('modalDescription');
        if (nameEl) nameEl.textContent = product.name;
        if (catEl) catEl.textContent = `${product.category} • Unpolished Staples`;
        if (descEl) descEl.textContent = product.description || "100% natural, unpolished and graded farm staples.";

        // Reset Wishlist Heart
        const heartEl = document.getElementById('pdmHeartIcon');
        const wishlistBtn = document.getElementById('pdmWishlistBtn');
        if (heartEl) heartEl.innerHTML = '&#9825;';
        if (wishlistBtn) wishlistBtn.classList.remove('active');

        // Reset Stepper
        updateQtyDisplay();

        // Reset Weight Pills
        const weightPills = document.querySelectorAll('.pdm-weight-pill');
        weightPills.forEach(pill => {
            if (pill.getAttribute('data-weight') === '250 g') pill.classList.add('active');
            else pill.classList.remove('active');
        });

        // Calculate Pricing
        updateModalPricing();

        // Reset Tab
        setModalTab('ingredient');

        // Render Related Products
        renderModalRelatedProducts(product.id);

        // Out of stock validation
        const modalAddBtn = document.getElementById('modalAdd');
        const modalBuyNowBtn = document.getElementById('modalBuyNow');
        const isOutOfStock = product.stock !== undefined && product.stock <= 0;
        if (modalAddBtn) {
            modalAddBtn.disabled = isOutOfStock;
            modalAddBtn.textContent = isOutOfStock ? 'OUT OF STOCK' : 'Add To Cart';
            modalAddBtn.style.opacity = isOutOfStock ? '0.6' : '1';
        }
        if (modalBuyNowBtn) {
            modalBuyNowBtn.disabled = isOutOfStock;
            modalBuyNowBtn.style.opacity = isOutOfStock ? '0.6' : '1';
        }

        // Show Modal
        productModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        if (productModal) productModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Modal Interaction Listeners
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

    const prevGalleryBtn = document.getElementById('pdmGalleryPrev');
    const nextGalleryBtn = document.getElementById('pdmGalleryNext');
    if (prevGalleryBtn) prevGalleryBtn.addEventListener('click', (e) => { e.stopPropagation(); setGalleryView(currentGalleryIndex - 1); });
    if (nextGalleryBtn) nextGalleryBtn.addEventListener('click', (e) => { e.stopPropagation(); setGalleryView(currentGalleryIndex + 1); });

    for (let i = 0; i < 3; i++) {
        const thumb = document.getElementById(`pdmThumb${i}`);
        if (thumb) thumb.addEventListener('click', (e) => { e.stopPropagation(); setGalleryView(i); });
    }

    const weightPillElements = document.querySelectorAll('.pdm-weight-pill');
    weightPillElements.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.stopPropagation();
            weightPillElements.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            selectedModalWeight = pill.getAttribute('data-weight') || '250 g';
            updateModalPricing();
        });
    });

    const qtyMinusBtn = document.getElementById('pdmQtyMinus');
    const qtyPlusBtn = document.getElementById('pdmQtyPlus');
    if (qtyMinusBtn) {
        qtyMinusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedModalQty > 1) {
                selectedModalQty--;
                updateQtyDisplay();
            }
        });
    }
    if (qtyPlusBtn) {
        qtyPlusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedModalProduct && selectedModalProduct.stock && selectedModalQty >= selectedModalProduct.stock) {
                showToast(`Cannot select more than available stock (${selectedModalProduct.stock}).`);
                return;
            }
            selectedModalQty++;
            updateQtyDisplay();
        });
    }

    const modalWishlistBtn = document.getElementById('pdmWishlistBtn');
    if (modalWishlistBtn) {
        modalWishlistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isModalWishlisted = !isModalWishlisted;
            const heartEl = document.getElementById('pdmHeartIcon');
            if (isModalWishlisted) {
                modalWishlistBtn.classList.add('active');
                if (heartEl) heartEl.innerHTML = '&#9829;';
                showToast(`Saved ${selectedModalProduct ? selectedModalProduct.name : 'item'} to your Cherubic Wishlist!`);
            } else {
                modalWishlistBtn.classList.remove('active');
                if (heartEl) heartEl.innerHTML = '&#9825;';
                showToast('Removed from your Wishlist.');
            }
        });
    }

    const pdmTabButtons = document.querySelectorAll('.pdm-tab-nav');
    pdmTabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const tab = btn.getAttribute('data-tab');
            if (tab) setModalTab(tab);
        });
    });

    // Stage 3 Action 1: Add to Cart (adds to bag and opens Slide-in Cart Drawer)
    if (modalAddBtn) {
        modalAddBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedModalProduct) {
                addToCartWithDetails(
                    selectedModalProduct.id,
                    selectedModalQty,
                    selectedModalWeight,
                    selectedModalPrice,
                    true // Opens Slide-in Cart Drawer
                );
                closeProductModal();
            }
        });
    }

    // Stage 3 Action 2: Buy Now (adds to bag and immediately opens Complete Your Order Modal)
    const modalBuyNowBtn = document.getElementById('modalBuyNow');
    if (modalBuyNowBtn) {
        modalBuyNowBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedModalProduct) {
                addToCartWithDetails(
                    selectedModalProduct.id,
                    selectedModalQty,
                    selectedModalWeight,
                    selectedModalPrice,
                    false // Do not open drawer
                );
                closeProductModal();
                openCheckout(); // Immediately open Complete Your Order Modal
            }
        });
    }

    // Stage 1: Storefront Trigger (Clicking any card or ADD TO CART button opens Product Details Modal)
    function handleProductCardClick(productId) {
        openProductModal(productId);
    }
    window.handleProductCardClick = handleProductCardClick;
    window.openProductDetailModal = handleProductCardClick;
    window.kalashOpenModal = handleProductCardClick;

    // ----------------------------------------------------------------------
    // 7. DEMO CHECKOUT FLOW
    // ----------------------------------------------------------------------
    function openCheckout() {
        if (cart.length === 0) {
            showToast('Your bag is currently empty.');
            return;
        }
        closeCart();

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const shipping = subtotal >= 999 ? 0 : 50;
        const grandTotal = subtotal + shipping;

        if (checkoutSummaryItems) {
            checkoutSummaryItems.innerHTML = cart.map(i => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 11px;">
                    <span>${i.name} &times; ${i.qty}</span>
                    <strong>&#8377;${i.price * i.qty}</strong>
                </div>
            `).join('');
        }

        if (checkoutSubtotal) checkoutSubtotal.innerHTML = `&#8377;${subtotal}`;
        if (checkoutShipping) checkoutShipping.innerHTML = shipping === 0 ? '<span style="color:#2a9d8f">FREE</span>' : `&#8377;${shipping}`;
        if (checkoutGrandTotal) checkoutGrandTotal.innerHTML = `&#8377;${grandTotal}`;

        if (checkoutStepForm) checkoutStepForm.hidden = false;
        if (checkoutSuccess) checkoutSuccess.hidden = true;
        if (checkoutOverlay) checkoutOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCheckout() {
        if (checkoutOverlay) checkoutOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (checkoutDemoBtn) checkoutDemoBtn.addEventListener('click', openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);

    if (doneCheckoutBtn) {
        doneCheckoutBtn.addEventListener('click', () => {
            closeCheckout();
            cart = [];
            saveCart();
            updateCartUI();
            syncCatalog();
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('deliveryName');
            const name = nameInput ? nameInput.value : 'Valued Customer';
            const cityInput = document.getElementById('deliveryCity');
            const city = cityInput && cityInput.value ? cityInput.value : 'Kanpur';
            const orderNum = 'KA-' + Math.floor(100000 + Math.random() * 900000);

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const shipping = subtotal >= 500 ? 0 : 50;
            const grandTotal = subtotal + shipping;
            const itemsSummary = cart.map(i => `${i.name} (x${i.qty})`).join(', ');

            // Fire order sync to backend Admin Console (Singleton CatalogService)
            fetch('/Admin/PlaceOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orderId: orderNum,
                    customerName: name,
                    itemsSummary: itemsSummary,
                    totalAmount: grandTotal,
                    city: city,
                    status: 'Confirmed'
                })
            }).then(res => res.json())
              .then(data => {
                  console.log('Order registered in Admin Console:', data);
              }).catch(err => {
                  console.warn('Admin order sync:', err);
              });

            if (checkoutOrderNumber) checkoutOrderNumber.textContent = orderNum;
            if (checkoutSuccessMessage) {
                checkoutSuccessMessage.textContent = `Thank you, ${name}! Your demonstration order has been recorded. Our Kanpur depot has received your simulated dispatch request.`;
            }

            if (checkoutStepForm) checkoutStepForm.hidden = true;
            if (checkoutSuccess) checkoutSuccess.hidden = false;
        });
    }

    // ----------------------------------------------------------------------
    // 8. BULK ENQUIRY MODAL LOGIC
    // ----------------------------------------------------------------------
    function openBulkModal() {
        if (bulkModal) bulkModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeBulkModal() {
        if (bulkModal) bulkModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (openBulkModalBtn) openBulkModalBtn.addEventListener('click', openBulkModal);
    if (footerBulkBtn) footerBulkBtn.addEventListener('click', openBulkModal);
    if (closeBulkModalBtn) closeBulkModalBtn.addEventListener('click', closeBulkModal);
    if (bulkModalBackdrop) bulkModalBackdrop.addEventListener('click', closeBulkModal);

    if (bulkEnquiryForm) {
        bulkEnquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (bulkSuccessMessage) {
                bulkSuccessMessage.hidden = false;
                setTimeout(() => {
                    closeBulkModal();
                    bulkSuccessMessage.hidden = true;
                    bulkEnquiryForm.reset();
                    showToast('Bulk inquiry submitted successfully!');
                }, 2200);
            }
        });
    }

    // ----------------------------------------------------------------------
    // 9. VIDEO REELS POPUP MODAL
    // ----------------------------------------------------------------------
    document.querySelectorAll('.video-reel-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-video-title') || "Amulya Heritage Harvest";
            const desc = card.getAttribute('data-video-desc') || "Behind the scenes at Kalash Amulya Kanpur processing facility.";
            if (videoModalTitle) videoModalTitle.textContent = title;
            if (videoModalDesc) videoModalDesc.textContent = desc;
            if (videoModal) videoModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeVideoModal() {
        if (videoModal) videoModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoModal);
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideoModal);

    // ----------------------------------------------------------------------
    // 10. FAQ ACCORDION INTERACTIVITY
    // ----------------------------------------------------------------------
    document.querySelectorAll('.faq-accordion-card').forEach(card => {
        const btn = card.querySelector('.faq-question-btn');
        const panel = card.querySelector('.faq-answer-panel');
        const indicator = card.querySelector('.faq-indicator');

        if (btn && panel) {
            btn.addEventListener('click', () => {
                const isOpen = card.classList.contains('open');

                // Optional: close other accordions in the same column
                const parentCol = card.closest('.faq-column');
                if (parentCol) {
                    parentCol.querySelectorAll('.faq-accordion-card').forEach(other => {
                        if (other !== card) {
                            other.classList.remove('open');
                            const otherPanel = other.querySelector('.faq-answer-panel');
                            const otherBtn = other.querySelector('.faq-question-btn');
                            const otherInd = other.querySelector('.faq-indicator');
                            if (otherPanel) otherPanel.hidden = true;
                            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                            if (otherInd) otherInd.textContent = '+';
                        }
                    });
                }

                if (isOpen) {
                    card.classList.remove('open');
                    panel.hidden = true;
                    btn.setAttribute('aria-expanded', 'false');
                    if (indicator) indicator.textContent = '+';
                } else {
                    card.classList.add('open');
                    panel.hidden = false;
                    btn.setAttribute('aria-expanded', 'true');
                    if (indicator) indicator.textContent = '−';
                }
            });
        }
    });

    // ----------------------------------------------------------------------
    // 11. RECIPE EXPANDER INTERACTIVITY
    // ----------------------------------------------------------------------
    document.querySelectorAll('.recipe-card').forEach(card => {
        const toggleBtn = card.querySelector('.recipe-toggle-btn');
        const stepsDrawer = card.querySelector('.recipe-steps-drawer');

        if (toggleBtn && stepsDrawer) {
            toggleBtn.addEventListener('click', () => {
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    stepsDrawer.hidden = true;
                    toggleBtn.setAttribute('aria-expanded', 'false');
                    toggleBtn.innerHTML = `<span>View Recipe Steps</span> <span class="recipe-arrow">&darr;</span>`;
                } else {
                    stepsDrawer.hidden = false;
                    toggleBtn.setAttribute('aria-expanded', 'true');
                    toggleBtn.innerHTML = `<span>Hide Recipe Steps</span> <span class="recipe-arrow">&uarr;</span>`;
                }
            });
        }
    });

    // ----------------------------------------------------------------------
    // 12. NEWSLETTER FORM HANDLER
    // ----------------------------------------------------------------------
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('emailInput');
            if (emailInput && newsletterMessage) {
                newsletterMessage.textContent = `Thank you! ${emailInput.value} has been added to our private heritage dispatch.`;
                emailInput.value = '';
            }
        });
    }

    // ----------------------------------------------------------------------

    // Realtime Catalog Synchronization with Server Singleton
    function syncCatalog() {
        fetch('/Home/GetCatalogJson')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    productsData = data;
                    renderProducts();
                }
            })
            .catch(err => console.log('Catalog sync error:', err));
    }


    // ----------------------------------------------------------------------
    // MOBILE SLIDING DRAWER LOGIC
    // ----------------------------------------------------------------------
    const mobileMenuOpenBtn = document.getElementById('mobileMenuOpen');
    const mobileNavCloseBtn = document.getElementById('mobileNavClose');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileBulkBtn = document.getElementById('mobileBulkBtn');

    function openMobileNav() {
        if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
        if (mobileNavBackdrop) mobileNavBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
        if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileMenuOpenBtn) mobileMenuOpenBtn.addEventListener('click', openMobileNav);
    if (mobileNavCloseBtn) mobileNavCloseBtn.addEventListener('click', closeMobileNav);
    if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

    if (mobileBulkBtn) {
        mobileBulkBtn.addEventListener('click', () => {
            closeMobileNav();
            openBulkModal();
        });
    }

    document.querySelectorAll('.mobile-link[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-category');
            closeMobileNav();
            if (cat) applyCategoryFilter(cat);
        });
    });

    // Global Helpers for Mobile Bottom Nav
    window.kalashFocusSearch = function () {
        const prodSearch = document.getElementById('productSearch');
        const shopSec = document.getElementById('shop');
        if (shopSec) {
            shopSec.scrollIntoView({ behavior: 'smooth' });
        }
        if (prodSearch) {
            setTimeout(() => prodSearch.focus(), 300);
        }
    };

    window.kalashToast = showToast;

    // 13. INITIAL BOOTSTRAP
    // ----------------------------------------------------------------------
    renderProducts();
    updateCartUI();
    syncCatalog();
});
