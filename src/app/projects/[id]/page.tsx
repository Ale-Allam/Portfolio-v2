"use client"; // Mark this file as a Client Component

import { useParams } from "next/navigation";
import React from "react";

// Define a project data type
interface Project {
  name: string;
  description: string;
}

// Placeholder project data
const projects: Record<string, Project> = {
  1: { name: "Project 1", description: "Details about Project PRO 11111" },
  2: { name: "Project 2", description: "Details about Project PRO 22222" },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams(); // Use useParams to get the dynamic route parameter

  const project = projects[id as keyof typeof projects]; // Get project data based on the id

  if (!project) {
    return <div>Loading...</div>; // Show loading or error state
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={() => window.history.back()}>Go Back</button>{" "}
      {/* Use window.history.back for navigation */}
    </div>
  );
};

export default ProjectDetail;
