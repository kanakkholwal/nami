import HeroSection from "app/layouts/hero";
import Navbar from "app/layouts/navbar";


export const dynamic = 'force-dynamic';

export default async function HomePage() {
	


	return (<>
		<header>
			<Navbar />
		</header>
		<main className="space-y-20 mb-40">

			<HeroSection />
	
			
			<div className="relative py-16">
				<div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
					<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
					<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
				</div>
	
			</div>
			
		</main>


	</>)
}