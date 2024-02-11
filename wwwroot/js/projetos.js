import data from "../Projects.json" assert { type: "json" };

const projectList = document.querySelector(".projects__list");
let projectId = 0;

data.forEach((project) => {
  let listItemContent = `<li class="projects__list-item clearfix">
    <div class="projects__card-image-container">
    <img src="<projectImageUrl>" class="projects__card-portrait" alt="<projectTitle>">
</div>
<section class="projects__card-text">
    <label for="<projectId>"><projectTitle></label>
    <input type="checkbox" id="<projectId>" class="projects__expand" />
    <div class="projects__card-description">
        <span style="white-space: pre-line">
            <projectDescription>
        </span>
        <div class="projects__card-link">
            <projectLinks>
        </div>
</div>
</section>
</li>`;

  let listItemDescricaoContent = "";
  project.descricao.forEach((descLine) => {
    listItemDescricaoContent = "<p>" + listItemDescricaoContent + descLine + "</p>";
  });

  let listItemLinks = "";
  Object.keys(project.links).forEach((linkKey) => {
    listItemLinks =
      "<a href=" +
      project.links[linkKey] +
      ">Disponível em " +
      linkKey +
      "</a>";
  });

  listItemContent = listItemContent.replaceAll("<projectImageUrl>", project.img);
  listItemContent = listItemContent.replaceAll("<projectTitle>", project.nome);
  listItemContent = listItemContent.replaceAll("<projectId>", projectId);
  listItemContent = listItemContent.replaceAll("<projectDescription>", listItemDescricaoContent);
  listItemContent = listItemContent.replaceAll("<projectLinks>", listItemLinks);

  projectList.innerHTML = projectList.innerHTML + listItemContent;
  projectId += 1;
});