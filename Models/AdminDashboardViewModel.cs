using System;
using System.Collections.Generic;

namespace KalashAmulya.Models
{
    public class AdminProductItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public decimal Mrp { get; set; }
        public string Weight { get; set; } = string.Empty;
        public int Stock { get; set; } = 100;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string Tag { get; set; } = "POPULAR";
        public bool IsActive { get; set; } = true;
    }

    public class AdminOrderItem
    {
        public string OrderId { get; set; } = string.Empty;
        public string CustomerName { get; set; } = string.Empty;
        public string ItemsSummary { get; set; } = string.Empty;
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } = "Processing"; // Processing, Shipped, Delivered, Cancelled
        public string City { get; set; } = string.Empty;
        public string DateFormatted { get; set; } = string.Empty;
    }

    public class AdminKpiSummary
    {
        public decimal TotalRevenue { get; set; } = 842950m;
        public int TotalOrders { get; set; } = 1428;
        public int ActiveProductsCount { get; set; } = 10;
        public int LowStockCount { get; set; } = 1;
        public double AverageRating { get; set; } = 4.92;
    }

    public class AdminDashboardViewModel
    {
        public AdminKpiSummary Kpi { get; set; } = new AdminKpiSummary();
        public List<AdminProductItem> Products { get; set; } = new List<AdminProductItem>();
        public List<AdminOrderItem> Orders { get; set; } = new List<AdminOrderItem>();
        public List<string> Categories { get; set; } = new List<string>
        {
            "All", "Dry Fruits", "Seeds", "Salts & Seasonings", "Preserves & Sweets", "Grains & Pulses"
        };
    }
}
