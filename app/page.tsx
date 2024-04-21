import Hero from "@/components/Hero";
import HeroContent from "@/components/HeroContent";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Hero />
			</div>
		</main>
	);
}
