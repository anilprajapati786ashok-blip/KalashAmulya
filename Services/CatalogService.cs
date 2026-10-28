using System;
using System.Collections.Generic;
using System.Linq;
using KalashAmulya.Models;

namespace KalashAmulya.Services
{
    public class CatalogService
    {
        private readonly object _lock = new();
        private readonly List<AdminProductItem> _products = new();
        private readonly List<AdminOrderItem> _orders = new();

        public CatalogService()
        {
            SeedInitialCatalog();
            SeedInitialOrders();
        }

        private void SeedInitialCatalog()
        {
            var initialProducts = new List<AdminProductItem>
            {
                // DRY FRUITS (5 items)
                new AdminProductItem
                {
                    Id = 1,
                    Name = "Royal Jumbo Cashews (Kaju W240)",
                    Category = "Dry Fruits",
                    Price = 420m,
                    Mrp = 520m,
                    Weight = "250g Jar",
                    Stock = 85,
                    Description = "Hand-graded jumbo whole white cashews. Naturally creamy & rich in healthy fats.",
                    ImageUrl = "/images/cashew_bowl.png",
                    Tag = "BESTSELLER",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 2,
                    Name = "California Crisp Almonds (Badam)",
                    Category = "Dry Fruits",
                    Price = 380m,
                    Mrp = 480m,
                    Weight = "250g Jar",
                    Stock = 64,
                    Description = "Crunchy, golden-brown California badam rich in Vitamin E, magnesium and antioxidants.",
                    ImageUrl = "/images/almond_bowl.png",
                    Tag = "HARVEST SELECT",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 3,
                    Name = "Salted Roasted Pistachios (Pista)",
                    Category = "Dry Fruits",
                    Price = 520m,
                    Mrp = 650m,
                    Weight = "250g Jar",
                    Stock = 42,
                    Description = "Naturally cracked, gently roasted with Himalayan sea salt. Unopened shell-free guarantee.",
                    ImageUrl = "/images/pistachio_bowl.png",
                    Tag = "POPULAR",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 4,
                    Name = "Royal Iranian Mamra Badam",
                    Category = "Dry Fruits",
                    Price = 750m,
                    Mrp = 950m,
                    Weight = "250g Jar",
                    Stock = 28,
                    Description = "Original high-oil Iranian Mamra giri. Unrivalled natural sweetness and brain nourishment.",
                    ImageUrl = "/images/almond_bowl.png",
                    Tag = "ROYAL HARVEST",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 5,
                    Name = "Jumbo Foxnut Phool Makhana",
                    Category = "Dry Fruits",
                    Price = 290m,
                    Mrp = 360m,
                    Weight = "200g Jar",
                    Stock = 14,
                    Description = "Handpicked jumbo 6-suta fox nuts. Air-popped to airy crispness with zero bitter seeds.",
                    ImageUrl = "/images/makhana_bowl.png",
                    Tag = "SUPER-CRUNCH",
                    IsActive = true
                },

                // SEEDS (4 items)
                new AdminProductItem
                {
                    Id = 6,
                    Name = "Raw Sunflower Seeds",
                    Category = "Seeds",
                    Price = 190m,
                    Mrp = 240m,
                    Weight = "250g Jar",
                    Stock = 82,
                    Description = "Cleaned kernel kernels supporting cellular repair, cardiac health, and radiant skin.",
                    ImageUrl = "/images/cashew_bowl.png",
                    Tag = "VITAMIN E",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 7,
                    Name = "Roasted Watermelon Seeds",
                    Category = "Seeds",
                    Price = 210m,
                    Mrp = 260m,
                    Weight = "200g Jar",
                    Stock = 65,
                    Description = "Crunchy hulled tarbooj seeds loaded with magnesium and plant protein for quick snacking.",
                    ImageUrl = "/images/pistachio_bowl.png",
                    Tag = "ZINC & PROTEIN",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 8,
                    Name = "Golden Flax Seeds (Alsi)",
                    Category = "Seeds",
                    Price = 150m,
                    Mrp = 190m,
                    Weight = "250g Jar",
                    Stock = 90,
                    Description = "Highest natural vegetarian source of ALA Omega-3 fatty acids for lipid management.",
                    ImageUrl = "/images/almond_bowl.png",
                    Tag = "OMEGA-3 HERO",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 9,
                    Name = "Organic Chia Seeds",
                    Category = "Seeds",
                    Price = 220m,
                    Mrp = 280m,
                    Weight = "250g Jar",
                    Stock = 75,
                    Description = "Pristine raw black chia seeds that form a soothing gut-protective gel when soaked in water.",
                    ImageUrl = "/images/walnut_bowl.png",
                    Tag = "SOLUBLE FIBER",
                    IsActive = true
                },

                // SALTS & SEASONINGS (4 items)
                new AdminProductItem
                {
                    Id = 10,
                    Name = "Himalayan Pink Rock Salt Crystals",
                    Category = "Salts & Seasonings",
                    Price = 140m,
                    Mrp = 180m,
                    Weight = "500g Jar",
                    Stock = 120,
                    Description = "Unrefined pink subterranean crystals rich in natural trace electrolytes.",
                    ImageUrl = "/images/pistachio_pile.png",
                    Tag = "MINERAL RICH",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 11,
                    Name = "Kala Namak (Black Salt Powder)",
                    Category = "Salts & Seasonings",
                    Price = 110m,
                    Mrp = 140m,
                    Weight = "500g Jar",
                    Stock = 95,
                    Description = "Authentic kiln-fired digestive rock salt with traditional pungent aroma.",
                    ImageUrl = "/images/cashew_pile.png",
                    Tag = "AYURVEDIC",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 12,
                    Name = "Organic Oregano & Herb Blend",
                    Category = "Salts & Seasonings",
                    Price = 160m,
                    Mrp = 200m,
                    Weight = "100g Jar",
                    Stock = 60,
                    Description = "Sun-dried aromatic Mediterranean oregano leaves, crushed pepper & sea salt.",
                    ImageUrl = "/images/walnut_pile.png",
                    Tag = "HANDCRAFTED",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 13,
                    Name = "Royal Heritage Spices & Shahi Garam Masala",
                    Category = "Salts & Seasonings",
                    Price = 210m,
                    Mrp = 260m,
                    Weight = "100g Jar",
                    Stock = 55,
                    Description = "Stone-ground whole spice blend featuring green cardamom, clove, cinnamon & mace.",
                    ImageUrl = "/images/cashew_pile.png",
                    Tag = "AROMATIC",
                    IsActive = true
                },

                // PRESERVES & SWEETS (5 items)
                new AdminProductItem
                {
                    Id = 14,
                    Name = "Pure Desi Shakkariya Jaggery (Gur)",
                    Category = "Preserves & Sweets",
                    Price = 195m,
                    Mrp = 250m,
                    Weight = "500g Jar",
                    Stock = 48,
                    Description = "Additive-free raw cane sugar blocks clarifying gut toxins and boosting iron.",
                    ImageUrl = "/images/walnut_bowl.png",
                    Tag = "PURE GUR",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 15,
                    Name = "Satvik Pure Cow Ghee Besan Ladoo",
                    Category = "Preserves & Sweets",
                    Price = 320m,
                    Mrp = 400m,
                    Weight = "400g Jar",
                    Stock = 30,
                    Description = "Traditional slow-roasted gram flour sweets crafted with A2 bilona cow ghee and rock sugar.",
                    ImageUrl = "/images/almond_pile.png",
                    Tag = "DESI GHEE",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 16,
                    Name = "Organic Amla Murabba in Mishri",
                    Category = "Preserves & Sweets",
                    Price = 260m,
                    Mrp = 325m,
                    Weight = "500g Glass Jar",
                    Stock = 35,
                    Description = "Whole Himalayan wild amla steeped slowly in unrefined raw rock sugar syrup.",
                    ImageUrl = "/images/makhana_bowl.png",
                    Tag = "HERITAGE",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 17,
                    Name = "Chatpata Amla Candy",
                    Category = "Preserves & Sweets",
                    Price = 180m,
                    Mrp = 225m,
                    Weight = "300g Jar",
                    Stock = 70,
                    Description = "Sweet and sour Vitamin-C bites spiced with digestive rock salt and cumin.",
                    ImageUrl = "/images/cashew_bowl.png",
                    Tag = "DIGESTIVE",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 18,
                    Name = "Traditional Ramkela Mango Pickles",
                    Category = "Preserves & Sweets",
                    Price = 240m,
                    Mrp = 300m,
                    Weight = "500g Jar",
                    Stock = 40,
                    Description = "Sun-cured raw Ramkela mango steeped in cold-pressed mustard oil with fenugreek & fennel.",
                    ImageUrl = "/images/walnut_pile.png",
                    Tag = "COLD-PRESSED",
                    IsActive = true
                },

                // GRAINS & PULSES (3 items)
                new AdminProductItem
                {
                    Id = 19,
                    Name = "Certified Unpolished Pulses (20 Varieties)",
                    Category = "Grains & Pulses",
                    Price = 185m,
                    Mrp = 230m,
                    Weight = "1kg Jar",
                    Stock = 110,
                    Description = "Cooperative harvested unpolished pulses. Zero chemical wash, maximum protein & earthy broth.",
                    ImageUrl = "/images/pistachio_bowl.png",
                    Tag = "100% UNPOLISHED",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 20,
                    Name = "Organic White Quinoa",
                    Category = "Grains & Pulses",
                    Price = 280m,
                    Mrp = 350m,
                    Weight = "500g Jar",
                    Stock = 45,
                    Description = "Pre-washed, saponin-free ancient super grain containing all 9 essential amino acids.",
                    ImageUrl = "/images/makhana_pile.png",
                    Tag = "COMPLETE PROTEIN",
                    IsActive = true
                },
                new AdminProductItem
                {
                    Id = 21,
                    Name = "Heritage Roasted Daliya",
                    Category = "Grains & Pulses",
                    Price = 120m,
                    Mrp = 150m,
                    Weight = "500g Jar",
                    Stock = 75,
                    Description = "Stone-milled broken whole wheat gently pre-roasted for quick morning porridge & khichdi.",
                    ImageUrl = "/images/cashew_solid.jpg",
                    Tag = "HIGH FIBER",
                    IsActive = true
                }
            };

            lock (_lock)
            {
                _products.AddRange(initialProducts);
            }
        }

        private void SeedInitialOrders()
        {
            var initialOrders = new List<AdminOrderItem>
            {
                new AdminOrderItem
                {
                    OrderId = "KA-98421",
                    CustomerName = "Sneha Sharma",
                    DateFormatted = DateTime.Now.AddHours(-2).ToString("dd MMM yyyy, hh:mm tt"),
                    ItemsSummary = "Royal Jumbo Cashews (x2), Himalayan Pink Salt (x1)",
                    TotalAmount = 980m,
                    City = "Kanpur",
                    Status = "Processing"
                },
                new AdminOrderItem
                {
                    OrderId = "KA-98420",
                    CustomerName = "Vikram Mehta",
                    DateFormatted = DateTime.Now.AddHours(-5).ToString("dd MMM yyyy, hh:mm tt"),
                    ItemsSummary = "California Crisp Almonds (x1), Pure Desi Jaggery (x2)",
                    TotalAmount = 770m,
                    City = "Lucknow",
                    Status = "Shipped"
                },
                new AdminOrderItem
                {
                    OrderId = "KA-98419",
                    CustomerName = "Priya Patel",
                    DateFormatted = DateTime.Now.AddDays(-1).ToString("dd MMM yyyy, hh:mm tt"),
                    ItemsSummary = "Unpolished Pulses (x3), White Quinoa (x1)",
                    TotalAmount = 835m,
                    City = "Kanpur",
                    Status = "Delivered"
                },
                new AdminOrderItem
                {
                    OrderId = "KA-98418",
                    CustomerName = "Amit Verma",
                    DateFormatted = DateTime.Now.AddDays(-1).AddHours(-4).ToString("dd MMM yyyy, hh:mm tt"),
                    ItemsSummary = "Salted Roasted Pistachios (x2), Amla Murabba (x1)",
                    TotalAmount = 1300m,
                    City = "Varanasi",
                    Status = "Delivered"
                },
                new AdminOrderItem
                {
                    OrderId = "KA-98417",
                    CustomerName = "Rohan Deshmukh",
                    DateFormatted = DateTime.Now.AddDays(-2).ToString("dd MMM yyyy, hh:mm tt"),
                    ItemsSummary = "Jumbo Foxnut Makhana (x2), Sunflower Seeds (x2)",
                    TotalAmount = 960m,
                    City = "Prayagraj",
                    Status = "Delivered"
                }
            };

            lock (_lock)
            {
                _orders.AddRange(initialOrders);
            }
        }

        public List<AdminProductItem> GetProducts()
        {
            lock (_lock)
            {
                return _products.Select(p => new AdminProductItem
                {
                    Id = p.Id,
                    Name = p.Name,
                    Category = p.Category,
                    Price = p.Price,
                    Mrp = p.Mrp,
                    Weight = p.Weight,
                    Stock = p.Stock,
                    Description = p.Description,
                    ImageUrl = p.ImageUrl,
                    Tag = p.Tag,
                    IsActive = p.IsActive
                }).ToList();
            }
        }

        public AdminProductItem? GetProductById(int id)
        {
            lock (_lock)
            {
                var prod = _products.FirstOrDefault(p => p.Id == id);
                if (prod == null) return null;
                return new AdminProductItem
                {
                    Id = prod.Id,
                    Name = prod.Name,
                    Category = prod.Category,
                    Price = prod.Price,
                    Mrp = prod.Mrp,
                    Weight = prod.Weight,
                    Stock = prod.Stock,
                    Description = prod.Description,
                    ImageUrl = prod.ImageUrl,
                    Tag = prod.Tag,
                    IsActive = prod.IsActive
                };
            }
        }

        public AdminProductItem AddProduct(AdminProductItem product)
        {
            lock (_lock)
            {
                product.Id = _products.Count > 0 ? _products.Max(p => p.Id) + 1 : 1;
                if (product.Mrp <= 0) product.Mrp = Math.Round(product.Price * 1.25m);
                if (string.IsNullOrWhiteSpace(product.ImageUrl)) product.ImageUrl = "/images/cashew.png";
                product.IsActive = true;
                _products.Add(product);
                return product;
            }
        }

        public bool UpdateStock(int productId, int newStock)
        {
            lock (_lock)
            {
                var target = _products.FirstOrDefault(p => p.Id == productId);
                if (target == null) return false;
                target.Stock = Math.Max(0, newStock);
                return true;
            }
        }

        public bool DeleteProduct(int id)
        {
            lock (_lock)
            {
                var target = _products.FirstOrDefault(p => p.Id == id);
                if (target == null) return false;
                return _products.Remove(target);
            }
        }

        public List<AdminOrderItem> GetOrders()
        {
            lock (_lock)
            {
                return _orders.Select(o => new AdminOrderItem
                {
                    OrderId = o.OrderId,
                    CustomerName = o.CustomerName,
                    DateFormatted = o.DateFormatted,
                    ItemsSummary = o.ItemsSummary,
                    TotalAmount = o.TotalAmount,
                    City = o.City,
                    Status = o.Status
                }).ToList();
            }
        }

        public AdminOrderItem AddOrder(AdminOrderItem order)
        {
            lock (_lock)
            {
                if (string.IsNullOrWhiteSpace(order.OrderId))
                {
                    order.OrderId = "KA-" + new Random().Next(10000, 99999);
                }
                if (string.IsNullOrWhiteSpace(order.DateFormatted))
                {
                    order.DateFormatted = DateTime.Now.ToString("dd MMM yyyy, hh:mm tt");
                }
                _orders.Insert(0, order);
                return order;
            }
        }

        public bool UpdateOrderStatus(string orderId, string status)
        {
            lock (_lock)
            {
                var target = _orders.FirstOrDefault(o => o.OrderId == orderId);
                if (target == null) return false;
                target.Status = status;
                return true;
            }
        }

        public AdminKpiSummary GetKpiSummary()
        {
            lock (_lock)
            {
                decimal totalRev = _orders.Sum(o => o.TotalAmount);
                int totalOrd = _orders.Count;
                int lowStock = _products.Count(p => p.Stock <= 20);
                int activeCount = _products.Count(p => p.IsActive);

                return new AdminKpiSummary
                {
                    TotalRevenue = totalRev,
                    TotalOrders = totalOrd,
                    ActiveProductsCount = activeCount,
                    LowStockCount = lowStock,
                    AverageRating = 4.92
                };
            }
        }
    }
}
