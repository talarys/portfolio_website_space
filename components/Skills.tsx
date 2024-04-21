import React from "react";
import Skill from "./Skill";
import SkillText from "./SkillText";
import path from "node:path";
import { promises as fs } from "node:fs";

const Skills = async () => {
	const skillsList = await fs.readdir(
		path.join(process.cwd(), "/public/svg/skills"),
	);
	console.log(skillsList);

	return (
		<section
			id="skills"
			className="flex flex-col items-center justify-center gap-3 max-w-[1000px] mx-auto relative overflow-hidden pb-80 py-20"
			style={{ transform: "scale(0.9" }}
		>
			<SkillText />

			<div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
				{skillsList.map((skill, index) => (
					<Skill key={skill} index={index} name={skill} />
				))}
			</div>

			<div className="w-full h-full absolute">
				<div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
					<video
						className="w-full h-auto"
						preload="false"
						playsInline
						loop
						muted
						autoPlay
						src="webm/cards-video.webm"
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
