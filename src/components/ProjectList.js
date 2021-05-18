import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projects.map((item) => 
    <ProjectItem  name ={item.name} about = {item.about} key = {item.id} technologies = {item.technologies}/>)}
      </div>
    </div>
  );
}

export default ProjectList;
