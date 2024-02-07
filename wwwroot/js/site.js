// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*    inject IWebHostEnvironment env;

{
    ViewData["Title"] = "Projetos";
    
    var result = "";
    Array projectsFileData = null;
    char[] delimiterChar = { ';' }; 

    var path = System.IO.Path.Combine(env.WebRootPath, "Projects.txt");
    bool fileExists = File.Exists(path);
    if (fileExists)
    {
        projectsFileData = File.ReadAllLines(path);
        if (projectsFileData == null)
        {
            // Empty file.
            result = "Erro na página: Lista de projetos vazia.";
        }
    }
    else
    {
        // File does not exist.
        result = "Erro na página: Arquivo com lista de projetos não foi encontrado.";
    }





    @if (projectsFileData == null)
        {
            @result
        }else
        {
        <ul class="projects__list">
                for (int index=0; index<projectsFileData.Length;index++)
                {
                    var rawContentLine = projectsFileData.GetValue(index);
                    if (rawContentLine is not null)
                    {
                         /*string contentLine = rawContentLine.ToString();
                        string currLabel = "projects__expand" + index;
                        Array projectContents = contentLine.Split(';');
                        <li class="projects__list-item clearfix">
                            <div class="projects__card-image-container">
                                <img src="@projectContents.GetValue(1)" class="projects__card-portrait" alt="@projectContents.GetValue(0)">
                            </div>
                            <section class="projects__card-text">
                                <label for="@currLabel">@projectContents.GetValue(0)</label>
                                <input type="checkbox" id="@currLabel" class="projects__expand" />
                                <div class="projects__card-description">
                                    @if (projectContents.GetValue(2) is not null && projectContents.GetValue(2).ToString().Length > 0)
                                    {
                                        Array descriptionContents = projectContents.GetValue(2).ToString().Split('|');
                                        <span style="white-space: pre-line">
                                            @foreach (string descriptionLine in descriptionContents)
                                            {
                                                <p>@descriptionLine</p>
                                            }
                                        </span>
                                    }
                                    <div class="projects__card-link">
                                        @for (int i = 3; i < projectContents.Length - 1; i += 2)
                                        {
                                            <a href="@projectContents.GetValue(i+1)">Disponível em @projectContents.GetValue(i)</a>
                                        }
                                    </div>
                            </div>
                        </section>
                    </li>
                    }
                }
            </ul>
}*/

const headerTemplate = document.createElement('div');
const footerTemplate = document.createElement('div');
const docHeader = document.querySelector("header");
const docFooter = document.querySelector("footer");
docHeader.innerHTML = `
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light mb-0 bg-primary box-shadow navbar__main">
            <div class="container-fluid">
                <a class="navbar-brand" asp-area="" href="Index.html">Árthus James Erthal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                                <a class="nav-link" href="Projetos.html" asp-action="Projetos">Projetos</a>
                            
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="Curriculos.html" asp-action="Curriculos">Curriculos</a>
                            
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="Sobre.html" asp-action="Sobre">Sobre</a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`

docFooter.innerHTML = `
<div class="container">
            &copy; 2024 - Árthus James Erthal
        </div>
`

/*docHeader.appendChild(headerTemplate.innerHTML);
docFooter.appendChild(footerTemplate.innerHTML);*/

