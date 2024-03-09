import HeroSection from "app/layouts/hero";
import Navbar from "app/layouts/navbar";
import Link from 'next/link';


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
				<div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
					<div className="relative">
						
						<div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
							<h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Get Started now</h1>
							<p className="text-center text-xl text-gray-600 dark:text-gray-300">
								Discover the best travel experience with Straw Hat Crew
							</p>
							<div className="flex flex-wrap justify-center gap-6">
								<Link href="/signup" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
									<span className="relative text-base font-semibold text-white dark:text-dark">Get Started</span>
								</Link>
								<a href="/about" className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
									<span className="relative text-base font-semibold text-primary dark:text-white">
										Learn More 
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</main>


	</>)
}