using System.Collections.Concurrent;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KalashAmulya.Controllers
{
    public class UserModel
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Phone { get => PhoneNumber; set => PhoneNumber = value; }
        public string Password { get; set; } = string.Empty;
        public string Address { get; set; } = "173-B, Dada Nagar, Kanpur-208022";
        public string City { get; set; } = "Kanpur";
        public string State { get; set; } = "Uttar Pradesh";
        public string Pincode { get; set; } = "208022";
        public DateTime RegisteredDate { get; set; } = DateTime.Now;
    }

    // Alias for backward compatibility with existing views
    public class CustomerUser : UserModel { }

    public class CustomerOrder
    {
        public string OrderNumber { get; set; } = string.Empty;
        public string OrderDate { get; set; } = string.Empty;
        public string ItemsSummary { get; set; } = string.Empty;
        public decimal TotalAmount { get; set; }
        public string Status { get; set; } = string.Empty;
        public string DeliveryAddress { get; set; } = string.Empty;
    }

    public class AccountController : Controller
    {
        // Thread-safe dynamic user registry
        private static readonly ConcurrentDictionary<string, UserModel> _users = new(StringComparer.OrdinalIgnoreCase);

        // Static sample order tracking history
        private static readonly List<CustomerOrder> _sampleOrders = new()
        {
            new CustomerOrder
            {
                OrderNumber = "KA-98421",
                OrderDate = "26 Oct 2026",
                ItemsSummary = "Royal Jumbo Cashews (250g) x 1, California Almonds (250g) x 1, Himalayan Pink Salt (500g) x 1",
                TotalAmount = 940m,
                Status = "Out for Delivery (Kanpur Express)",
                DeliveryAddress = "173-B, Dada Nagar, Kanpur-208022, Uttar Pradesh"
            },
            new CustomerOrder
            {
                OrderNumber = "KA-87210",
                OrderDate = "14 Oct 2026",
                ItemsSummary = "Organic Amla Murabba (500g) x 1, Organic Chia Seeds (250g) x 1",
                TotalAmount = 480m,
                Status = "Delivered & Verified",
                DeliveryAddress = "173-B, Dada Nagar, Kanpur-208022, Uttar Pradesh"
            }
        };

        static AccountController()
        {
            // Seed initial account
            _users["rajesh.sharma@example.com"] = new UserModel
            {
                FullName = "Rajesh Sharma",
                Email = "rajesh.sharma@example.com",
                PhoneNumber = "+91 98765 43210",
                Password = "Password@123",
                Address = "173-B, Dada Nagar, Kanpur-208022",
                City = "Kanpur",
                State = "Uttar Pradesh",
                Pincode = "208022",
                RegisteredDate = DateTime.Now.AddDays(-30)
            };
        }

        [HttpGet]
        public IActionResult Login(string? returnUrl = null)
        {
            if (User?.Identity?.IsAuthenticated == true)
            {
                return RedirectToAction(nameof(Profile));
            }
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(string email, string password, bool rememberMe = false, string? returnUrl = null)
        {
            ViewBag.ReturnUrl = returnUrl;

            if (string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
            {
                ViewBag.Error = "Please enter both registered email address and password.";
                return View();
            }

            email = email.Trim().ToLowerInvariant();

            // Dynamic credential check against registered users
            if (_users.TryGetValue(email, out var user) && user.Password == password)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.FullName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.MobilePhone, user.PhoneNumber),
                    new Claim(ClaimTypes.StreetAddress, user.Address),
                    new Claim("City", user.City),
                    new Claim("State", user.State),
                    new Claim(ClaimTypes.PostalCode, user.Pincode),
                    new Claim("RegisteredOn", user.RegisteredDate.ToString("dd MMM yyyy"))
                };

                var claimsIdentity = new ClaimsIdentity(claims, "AmulyaAuth");
                var authProperties = new AuthenticationProperties
                {
                    IsPersistent = rememberMe,
                    ExpiresUtc = rememberMe ? DateTimeOffset.UtcNow.AddDays(30) : DateTimeOffset.UtcNow.AddHours(2)
                };

                await HttpContext.SignInAsync("AmulyaAuth", new ClaimsPrincipal(claimsIdentity), authProperties);

                if (!string.IsNullOrEmpty(returnUrl) && Url.IsLocalUrl(returnUrl))
                    return Redirect(returnUrl);

                return RedirectToAction("Profile");
            }

            ViewBag.Error = "Invalid email address or password. Please check your credentials or create a new account below.";
            return View();
        }

        [HttpGet]
        public IActionResult Register()
        {
            if (User?.Identity?.IsAuthenticated == true)
            {
                return RedirectToAction(nameof(Profile));
            }
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(
            string fullName,
            string email,
            string? phoneNumber,
            string? phone,
            string password,
            string confirmPassword,
            string? address,
            string? city,
            string? pincode)
        {
            if (string.IsNullOrWhiteSpace(fullName) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
            {
                ViewBag.Error = "All required fields must be filled.";
                return View();
            }

            if (password != confirmPassword)
            {
                ViewBag.Error = "Passwords do not match. Please re-enter.";
                return View();
            }

            email = email.Trim().ToLowerInvariant();

            if (_users.ContainsKey(email))
            {
                ViewBag.Error = "An account with this email address already exists. Please login instead.";
                return View();
            }

            var resolvedPhone = !string.IsNullOrWhiteSpace(phoneNumber) ? phoneNumber.Trim() : (!string.IsNullOrWhiteSpace(phone) ? phone.Trim() : "+91 00000 00000");
            var resolvedCity = !string.IsNullOrWhiteSpace(city) ? city.Trim() : "Kanpur";
            var resolvedPincode = !string.IsNullOrWhiteSpace(pincode) ? pincode.Trim() : "208001";
            var resolvedAddress = !string.IsNullOrWhiteSpace(address) ? address.Trim() : $"{resolvedCity}, Uttar Pradesh - {resolvedPincode}";

            // Register new user dynamically
            var newUser = new UserModel
            {
                FullName = fullName.Trim(),
                Email = email,
                PhoneNumber = resolvedPhone,
                Password = password,
                Address = resolvedAddress,
                City = resolvedCity,
                State = "Uttar Pradesh",
                Pincode = resolvedPincode,
                RegisteredDate = DateTime.Now
            };

            _users[email] = newUser;

            // Immediately sign-in the newly registered user
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, newUser.FullName),
                new Claim(ClaimTypes.Email, newUser.Email),
                new Claim(ClaimTypes.MobilePhone, newUser.PhoneNumber),
                new Claim(ClaimTypes.StreetAddress, newUser.Address),
                new Claim("City", newUser.City),
                new Claim("State", newUser.State),
                new Claim(ClaimTypes.PostalCode, newUser.Pincode),
                new Claim("RegisteredOn", newUser.RegisteredDate.ToString("dd MMM yyyy"))
            };

            var claimsIdentity = new ClaimsIdentity(claims, "AmulyaAuth");
            await HttpContext.SignInAsync("AmulyaAuth", new ClaimsPrincipal(claimsIdentity));

            return RedirectToAction("Profile");
        }

        [HttpGet]
        public IActionResult Profile()
        {
            if (User?.Identity?.IsAuthenticated != true)
            {
                return RedirectToAction("Login", new { returnUrl = "/Account/Profile" });
            }

            var email = User.FindFirst(ClaimTypes.Email)?.Value ?? "";
            ViewBag.Orders = _sampleOrders;

            if (_users.TryGetValue(email, out var user))
            {
                return View(user);
            }

            // Fallback from claims
            var fallbackUser = new UserModel
            {
                FullName = User.FindFirst(ClaimTypes.Name)?.Value ?? "Customer",
                Email = email,
                PhoneNumber = User.FindFirst(ClaimTypes.MobilePhone)?.Value ?? "",
                Address = User.FindFirst(ClaimTypes.StreetAddress)?.Value ?? "Kanpur, Uttar Pradesh",
                City = User.FindFirst("City")?.Value ?? "Kanpur",
                State = User.FindFirst("State")?.Value ?? "Uttar Pradesh",
                Pincode = User.FindFirst(ClaimTypes.PostalCode)?.Value ?? "208022",
                RegisteredDate = DateTime.Now
            };

            return View(fallbackUser);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateProfile(
            string fullName,
            string? phoneNumber,
            string? phone,
            string? address,
            string? city,
            string? state,
            string? pincode)
        {
            var email = User.FindFirst(ClaimTypes.Email)?.Value ?? "";
            var pPhone = !string.IsNullOrWhiteSpace(phoneNumber) ? phoneNumber.Trim() : (phone?.Trim() ?? "");

            if (!string.IsNullOrEmpty(email) && _users.TryGetValue(email, out var user))
            {
                if (!string.IsNullOrWhiteSpace(fullName)) user.FullName = fullName.Trim();
                if (!string.IsNullOrWhiteSpace(pPhone)) user.PhoneNumber = pPhone;
                if (!string.IsNullOrWhiteSpace(address)) user.Address = address.Trim();
                if (!string.IsNullOrWhiteSpace(city)) user.City = city.Trim();
                if (!string.IsNullOrWhiteSpace(state)) user.State = state.Trim();
                if (!string.IsNullOrWhiteSpace(pincode)) user.Pincode = pincode.Trim();

                // Re-issue claims with updated details
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.FullName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.MobilePhone, user.PhoneNumber),
                    new Claim(ClaimTypes.StreetAddress, user.Address),
                    new Claim("City", user.City),
                    new Claim("State", user.State),
                    new Claim(ClaimTypes.PostalCode, user.Pincode),
                    new Claim("RegisteredOn", user.RegisteredDate.ToString("dd MMM yyyy"))
                };

                var claimsIdentity = new ClaimsIdentity(claims, "AmulyaAuth");
                await HttpContext.SignInAsync("AmulyaAuth", new ClaimsPrincipal(claimsIdentity));
            }

            TempData["SuccessMessage"] = "Your delivery profile has been updated successfully.";
            return RedirectToAction("Profile");
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync("AmulyaAuth");
            return RedirectToAction("Index", "Home");
        }
    }
}
