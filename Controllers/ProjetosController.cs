using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CurriculumVitae.Models;
using System;
using System.IO;
using System.Text;

namespace CurriculumVitae.Controllers;

public class ProjetosController : Controller
{
    private readonly ILogger<ProjetosController> _logger;

    public ProjetosController(ILogger<ProjetosController> logger)
    {
        _logger = logger;
    }

    public IActionResult Projetos()
    {
        return View();
    }
}
