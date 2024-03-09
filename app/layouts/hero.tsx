import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroLayout() {


	return (
		<div className="relative" id="hero">
			<div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
				<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
				<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
			</div>
			<div className="max-w-7xl mx-auto relative isolate px-6 md:px-12 lg:px-8">
				<div
					className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className="mx-auto pt-32 sm:pt-48 lg:pt-56">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
	
					</div>
					<div className="text-center">
						<p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-400">
						Have your most immersive travel experience with
						</p>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
							Straw Hat Crew
						</h1>

						<div className="mt-10 flex items-center justify-center flex-wrap  gap-6">
							<Button
								size="lg"
								className='rounded-full overflow-hidden relative flex h-12 w-full items-center justify-center px-6 sm:max-w-[12rem] shadow-lg shadow-primary/30 bg-primary/80 backdrop-blur'
								asChild>
								<Link href="/signup">
									Sign Up Now
								</Link>
							</Button>
						</div>
						<div className="mt-56 flex items-center justify-center">
							<Button
								size="icon"
								variant="outline"
								className='rounded-full relative flex h-12 items-center justify-center w-max bg-transparent animate-moveVertical'
								asChild>
								<Link href="#solutions">
									<ChevronDown className="w-6 h-6" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true">
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
