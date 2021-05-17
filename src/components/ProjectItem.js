import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log('name ' + {name});
 { /*const nMap = name.map((elem)=><span key={elem.id}>{elem.name}</span>)*/}
  return (
    <div className="project-item">
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
          {name.map((elem)=><scan>{elem}</scan>)}
        <scan>{about}</scan>
        <scan>{technologies}</scan>
      </div>
    </div>
  );
}

export default ProjectItem;
