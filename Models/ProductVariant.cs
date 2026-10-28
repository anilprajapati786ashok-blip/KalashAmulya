namespace KalashAmulya.Models
{
    public class ProductVariant
    {
        public int Id { get; set; }
        public string Weight { get; set; } = string.Empty; // e.g. "250g", "500g", "1 Kg"
        public decimal Price { get; set; }
        public decimal? OriginalPrice { get; set; }
        public bool IsSelected { get; set; }
    }
}
