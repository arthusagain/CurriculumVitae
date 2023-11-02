using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CurriculumVitae.Models;

namespace CurriculumVitae.Controllers;

public class CurriculosController : Controller
{
    private readonly ILogger<CurriculosController> _logger;

    public CurriculosController(ILogger<CurriculosController> logger)
    {
        _logger = logger;
    }

    public IActionResult Curriculos()
    {
        return View();
    }
}
