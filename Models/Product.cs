using System.Collections.Generic;

namespace KalashAmulya.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Subtitle { get; set; } = string.Empty;
        public string Tagline { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal BasePrice { get; set; }
        public double Rating { get; set; } = 5.0;
        public int ReviewCount { get; set; } = 128;
        public string MainImageUrl { get; set; } = string.Empty;
        public string FloatingImageUrl { get; set; } = string.Empty;
        public string CategoryName { get; set; } = string.Empty;
        public string Origin { get; set; } = string.Empty;
        public List<ProductVariant> Variants { get; set; } = new List<ProductVariant>();
    }
}
