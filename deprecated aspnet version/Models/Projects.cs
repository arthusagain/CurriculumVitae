namespace CurriculumVitae.Models;

public class Projects
{
    public string ProjectTitle { get; set; } = "";
    public string ProjectPortraitUrl { get; set; } = "";
    public string ProjectDescription { get; set; } = "";
    public Dictionary<string,string> ProjectLinks { get; } = new Dictionary<string, string>();
    public void addLink(string linkKey, string linkUrl){
        this.ProjectLinks.Add(linkKey,linkUrl);
    }
}
