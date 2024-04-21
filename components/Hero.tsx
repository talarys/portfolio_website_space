import HeroContent from "./HeroContent";

const Hero = () => {
	return (
		<div className="relative flex flex-col h-full w-full" id="about-me">
			<video
				autoPlay
				muted
				loop
				className="rotate-180 absolute top-[-340px] left-0 z-10 w-full h-full object-contain"
			>
				<source src="/webm/blackhole.webm" type="video/webm" />
			</video>
			<HeroContent />
		</div>
	);
};

export default Hero;
