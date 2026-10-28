using Microsoft.AspNetCore.Authentication.Cookies;
using KalashAmulya.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews().AddRazorRuntimeCompilation();

// Register Singleton Catalog Service for unified Storefront & Admin data
builder.Services.AddSingleton<CatalogService>();

// Register Cookie Authentication for Amulya Customer Accounts
builder.Services.AddAuthentication("AmulyaAuth")
    .AddCookie("AmulyaAuth", options =>
    {
        options.Cookie.Name = "KalashAmulya_Auth";
        options.LoginPath = "/Account/Login";
        options.LogoutPath = "/Account/Logout";
        options.AccessDeniedPath = "/Account/Login";
        options.ExpireTimeSpan = TimeSpan.FromDays(30);
        options.SlidingExpiration = true;
    });

builder.Services.AddAuthorization();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
