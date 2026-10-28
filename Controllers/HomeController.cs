using System.Linq;
using Microsoft.AspNetCore.Mvc;
using KalashAmulya.Models;
using KalashAmulya.Services;

namespace KalashAmulya.Controllers
{
    public class HomeController : Controller
    {
        private readonly CatalogService _catalogService;

        public HomeController(CatalogService catalogService)
        {
            _catalogService = catalogService;
        }

        public IActionResult Index()
        {
            var products = _catalogService.GetProducts();
            return View(products);
        }
        
        public IActionResult Products()
        {
            var products = _catalogService.GetProducts();
            return View(products);
        }

        [HttpGet]
        public IActionResult GetCatalogJson()
        {
            return Json(_catalogService.GetProducts());
        }
        
        public IActionResult About() => View();

        [HttpGet]
        public IActionResult Contact() => View();

        [HttpPost]
        public IActionResult Contact(string? name, string? email, string? phone, string? subject, string? message)
        {
            ViewBag.Submitted = true;
            ViewBag.CustomerName = string.IsNullOrWhiteSpace(name) ? "Valued Patron" : name.Trim();
            ViewBag.SuccessMessage = $"Thank you, {ViewBag.CustomerName}! Your inquiry has been dispatched to our Kanpur corporate desk (173-B Dada Nagar). A quality executive will connect with you within 24 hours.";
            return View();
        }

        public IActionResult Privacy() => View();
    }
}
