"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Props {
	name: string;
	index: number;
}

const Skill = ({ name, index }: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	const imageVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};
	const animationDelay = 0.3;

	return (
		<div>
			<motion.div
				ref={ref}
				initial="hidden"
				animate={inView ? "visible" : "hidden"}
				variants={imageVariants}
				custom={index}
				transition={{ delay: animationDelay * index }}
			>
				<Image
					src={`svg/skills/${name}`}
					alt={name}
					height={80}
					width={80}
					style={{ height: "80px" }}
				/>
			</motion.div>
		</div>
	);
};

export default Skill;
