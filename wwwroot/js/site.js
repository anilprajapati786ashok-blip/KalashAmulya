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
                : `<button type="button" class="btn-outline-add" onclick="window.kalashAddToCart(${product.id})">ADD TO CART</button>`;

            return `
            <div class="roopak-product-card" data-product-id="${product.id}" data-category="${product.category}">
                ${ribbonHtml}
                <div class="product-thumb-box" onclick="window.kalashOpenModal(${product.id})">
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
                    <h3 class="product-name" onclick="window.kalashOpenModal(${product.id})">${product.name}</h3>
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
    // 5. CART OPERATIONS & UI SYNCHRONIZATION
    // ----------------------------------------------------------------------
    function addToCart(productId) {
        const product = productsData.find(p => p.id === parseInt(productId));
        if (!product) return;

        if (product.stock !== undefined && product.stock <= 0) {
            showToast(`Sorry, ${product.name} is currently out of stock.`);
            return;
        }

        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            if (product.stock !== undefined && existing.qty >= product.stock) {
                showToast(`Cannot add more than available stock (${product.stock}).`);
                return;
            }
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        saveCart();
        updateCartUI();
        showToast(`Added ${product.name} to your bag`);
        openCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== parseInt(productId));
        saveCart();
        updateCartUI();
    }

    function updateQty(productId, delta) {
        const item = cart.find(i => i.id === parseInt(productId));
        if (!item) return;

        const product = productsData.find(p => p.id === parseInt(productId));
        if (delta > 0 && product && product.stock !== undefined && item.qty >= product.stock) {
            showToast(`Cannot add more than available stock (${product.stock}).`);
            return;
        }

        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
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
                            <p>&#8377;${item.price} &times; ${item.qty} = <strong>&#8377;${item.price * item.qty}</strong></p>
                            <div class="cart-item-controls">
                                <button type="button" class="qty-btn" onclick="window.kalashUpdateQty(${item.id}, -1)">&minus;</button>
                                <span>${item.qty}</span>
                                <button type="button" class="qty-btn" onclick="window.kalashUpdateQty(${item.id}, 1)">&#43;</button>
                                <button type="button" class="remove-btn" title="Remove item" onclick="window.kalashRemove(${item.id})">&times;</button>
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
    // 6. QUICK VIEW MODAL
    // ----------------------------------------------------------------------
    function openProductModal(productId) {
        const product = productsData.find(p => p.id === parseInt(productId));
        if (!product || !productModal) return;
        selectedModalProduct = product;

        if (modalCategory) modalCategory.textContent = `${product.category} · ${product.weight}`;
        if (modalName) modalName.textContent = product.name;
        if (modalDescription) modalDescription.textContent = product.description;
        if (modalPrice) modalPrice.innerHTML = `&#8377;${product.price}`;
        if (modalMrp) modalMrp.innerHTML = `&#8377;${product.mrp || Math.round(product.price * 1.25)}`;
        if (modalTag) modalTag.textContent = product.tag || "PREMIUM SELECTION";
        if (modalPhoto) {
            modalPhoto.innerHTML = `
                <div class="amulya-jar-showcase" style="margin: 0 auto;">
                    <div class="amulya-jar-cap"></div>
                    <div class="amulya-jar-neck"></div>
                    <div class="amulya-jar-body">
                        <img class="amulya-jar-fill" src="${product.image}" alt="${product.name}" onerror="this.src='/images/cashew.png'">
                        <div class="amulya-jar-glare"></div>
                        <div class="amulya-jar-sticker">
                            <span class="st-brand">AMULYA</span>
                            <span class="st-name">${product.name.toUpperCase()}</span>
                            <span class="st-pure">100% PURE &bull; FSSAI GRADE</span>
                        </div>
                    </div>
                    <div class="amulya-jar-shadow"></div>
                </div>
            `;
            modalPhoto.style.backgroundImage = 'none';
        }

        if (modalAddBtn) {
            if (product.stock !== undefined && product.stock <= 0) {
                modalAddBtn.disabled = true;
                modalAddBtn.textContent = 'OUT OF STOCK';
                modalAddBtn.style.opacity = '0.6';
                modalAddBtn.style.cursor = 'not-allowed';
            } else {
                modalAddBtn.disabled = false;
                modalAddBtn.textContent = 'Add to Bag';
                modalAddBtn.style.opacity = '1';
                modalAddBtn.style.cursor = 'pointer';
            }
        }

        productModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProductModal() {
        if (productModal) productModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProductModal);

    if (modalAddBtn) {
        modalAddBtn.addEventListener('click', () => {
            if (selectedModalProduct) {
                addToCart(selectedModalProduct.id);
                closeProductModal();
            }
        });
    }

    window.kalashOpenModal = openProductModal;

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
