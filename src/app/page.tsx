import React from "react";
import ProjectLayout from "./components/ProjectLayout";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <ProjectLayout />
      <Link href="/projects">
        <button>View Projects</button>
      </Link>
    </div>
  );
};

export default Home;
