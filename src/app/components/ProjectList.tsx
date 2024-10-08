// app/components/ProjectList.tsx
import Link from "next/link";
import { projectsData } from "../data/projectsData"; // Importing the project data

const ProjectList = () => {
  return (
    <ul>
      {projectsData.map((project) => (
        <li key={project.id}>
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
