import { Socials } from "@/utils/constants";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 text-gray-200">
			<div className="w-full h-full flex flex-row items-center  m-auto px-3 justify-between">
				<h1>Talarys</h1>
				{/* Navigation */}
				<div className="w-[500px] flex justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[30px] py-[10px] rounded-full">
					<a href="#about-me" className="cursor-pointer">
						About me
					</a>
					<a href="#skills" className="cursor-pointer">
						Skills
					</a>
					<a href="#projects" className="cursor-pointer">
						Projects
					</a>
				</div>

				{/* Socials */}
				<div className="flex flex-row gap-5">
					{Socials.map((social) => (
						<a href={social.link} key={social.name}>
							<Image
								src={social.src}
								alt={social.name}
								width={24}
								height={24}
								style={{ fill: "white" }}
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
