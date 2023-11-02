using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CurriculumVitae.Models;

namespace CurriculumVitae.Controllers;

public class SobreController : Controller
{
    private readonly ILogger<SobreController> _logger;

    public SobreController(ILogger<SobreController> logger)
    {
        _logger = logger;
    }

    public IActionResult Sobre()
    {
        return View();
    }
}
