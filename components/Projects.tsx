import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<div
			className="flex flex-col items-center justify-center py-20"
			id="projects"
		>
			<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
				My Projects
			</h1>
			<div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
				<ProjectCard
					src="/portfolio/Disney.png"
					title="Disney+ Clone"
					description="Disney+ Clone made using NextJS + TailwindCSS + Shadcn, with touch scrolling and search function using tmdb API"
					link="https://disney-talarys.vercel.app"
				/>
				<ProjectCard
					src="/portfolio/Medium.png"
					title="Medium Clone"
					description="Medium clone made with Next.js + TailwindCSS with Sanity as backend"
					link="https://medium-2-0-liart.vercel.app"
				/>
				<ProjectCard
					src="/portfolio/Netflix.png"
					title="Space Themed Website"
					description="Netflix Clone made using NextJS + TailwindCSS, implements Stripe for payments and firebase backend, with tmdb API."
					link="https://netflix-talarys.vercel.app"
				/>
			</div>
		</div>
	);
};

export default Projects;
