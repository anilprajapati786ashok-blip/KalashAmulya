using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KalashAmulya.Models;
using KalashAmulya.Services;

namespace KalashAmulya.Controllers
{
    public class AdminController : Controller
    {
        private readonly CatalogService _catalogService;

        public AdminController(CatalogService catalogService)
        {
            _catalogService = catalogService;
        }

        // GET: /Admin
        [HttpGet]
        public IActionResult Index()
        {
            var model = BuildDashboardViewModel();
            return View(model);
        }

        // GET: /Admin/Product
        [HttpGet]
        public IActionResult Product()
        {
            var model = BuildDashboardViewModel();
            return View(model);
        }

        // GET: /Admin/GetProducts
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Json(_catalogService.GetProducts());
        }

        // POST: /Admin/AddProduct
        [HttpPost]
        public IActionResult AddProduct([FromBody] AdminProductItem product)
        {
            if (product == null || string.IsNullOrWhiteSpace(product.Name))
            {
                return BadRequest(new { success = false, message = "Invalid product data" });
            }

            var created = _catalogService.AddProduct(product);
            return Json(new { success = true, product = created });
        }

        // POST: /Admin/UpdateStock
        [HttpPost]
        public IActionResult UpdateStock([FromBody] StockUpdateModel model)
        {
            if (model == null) return BadRequest();

            bool success = _catalogService.UpdateStock(model.ProductId, model.Stock);
            if (success)
            {
                var prod = _catalogService.GetProductById(model.ProductId);
                return Json(new { success = true, stock = prod?.Stock ?? model.Stock });
            }

            return NotFound(new { success = false, message = "Product not found" });
        }

        // POST: /Admin/UpdateOrderStatus
        [HttpPost]
        public IActionResult UpdateOrderStatus([FromBody] OrderStatusUpdateModel model)
        {
            if (model == null) return BadRequest();

            bool success = _catalogService.UpdateOrderStatus(model.OrderId, model.Status);
            if (success)
            {
                return Json(new { success = true, status = model.Status });
            }

            return NotFound(new { success = false, message = "Order not found" });
        }

        // POST: /Admin/DeleteProduct
        [HttpPost]
        public IActionResult DeleteProduct(int id)
        {
            bool success = _catalogService.DeleteProduct(id);
            if (success)
            {
                return Json(new { success = true });
            }

            return NotFound(new { success = false, message = "Product not found" });
        }

        // POST: /Admin/PlaceOrder
        [HttpPost]
        public IActionResult PlaceOrder([FromBody] PlaceOrderModel model)
        {
            if (model == null) return BadRequest();

            var order = new AdminOrderItem
            {
                OrderId = !string.IsNullOrWhiteSpace(model.OrderId) ? model.OrderId : "KA-" + new Random().Next(10000, 99999),
                CustomerName = !string.IsNullOrWhiteSpace(model.CustomerName) ? model.CustomerName : "Storefront Patron",
                ItemsSummary = !string.IsNullOrWhiteSpace(model.ItemsSummary) ? model.ItemsSummary : "Amulya Pantry Harvest",
                TotalAmount = model.TotalAmount > 0 ? model.TotalAmount : 420m,
                City = !string.IsNullOrWhiteSpace(model.City) ? model.City : "Kanpur",
                Status = !string.IsNullOrWhiteSpace(model.Status) ? model.Status : "Processing",
                DateFormatted = DateTime.Now.ToString("dd MMM yyyy, hh:mm tt")
            };

            var created = _catalogService.AddOrder(order);
            return Json(new { success = true, order = created });
        }

        private AdminDashboardViewModel BuildDashboardViewModel()
        {
            return new AdminDashboardViewModel
            {
                Kpi = _catalogService.GetKpiSummary(),
                Products = _catalogService.GetProducts(),
                Orders = _catalogService.GetOrders(),
                Categories = new List<string>
                {
                    "All", "Dry Fruits", "Seeds", "Salts & Seasonings", "Preserves & Sweets", "Grains & Pulses"
                }
            };
        }
    }

    public class StockUpdateModel
    {
        public int ProductId { get; set; }
        public int Stock { get; set; }
    }

    public class OrderStatusUpdateModel
    {
        public string OrderId { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
    }

    public class PlaceOrderModel
    {
        public string? OrderId { get; set; }
        public string? CustomerName { get; set; }
        public string? ItemsSummary { get; set; }
        public decimal TotalAmount { get; set; }
        public string? City { get; set; }
        public string? Status { get; set; }
    }
}
