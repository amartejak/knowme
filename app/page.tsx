"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles, image } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { Card } from "@/components/card";
import {motion} from 'framer-motion';
import SubNavbar from "@/components/subnavbar";
import { Chakra } from "@/components/icons";
import Image from "next/image"

export default function Home() {
	const containerStyle = {
		backgroundImage: `url('/hero.svg')`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		width: '100%',
		height: '100vh',
		animation: 'rotate 10s linear infinite', // Adjust the duration and animation name as needed
	  };
	
	return (
		<section className="">
			<div className="relative h-screen flex items-center justify-center">  {/* screen-div-1 */}

				<Chakra className="absolute inset-y-0 z-0 w-full h-[95vh] text-center fill-transparent dark:stroke-zinc-600 stroke-zinc-300 spin-slow"/>
				<div className="relative z-10 p-10"><div className="self-center">
						<h1 className="text-center  tracking-tight font-semibold text-4xl lg:text-5xl">Hi, This is&nbsp;</h1>
						<h1 className="text-center  bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 tracking-tight font-semibold text-4xl lg:text-5xl">Amar&nbsp;Teja Kommineni</h1>
						<h1 className="text-center  tracking-tight font-semibold text-4xl lg:text-5xl">
							Nice to meet you!
						</h1>
						<h2 className="pt-4 text-center tracking-tight text-xl lg:text-2xl">
							A Full Stack Developer, who loves to build things for the web.
						</h2>
					</div>
					<div className="flex pt-4 gap-2 justify-center py-2">
						<SubNavbar />
					</div>	
				</div>
			</div>
			
			<div id="skills" className="p-10 m-10"> {/* screen-div-2 */}
				<h2 className="text-center mb-10 mt-10 text-5xl font-semibold bg-inherit">My Skills</h2>
				<div className="grid grid-cols-2 mg:grid-cols-3 lg:grid-cols-4">
					<Card title="React"  alttext="reactjs svg" imageUrl="/react.svg" />
					<Card title="NodeJs"  alttext="nodejs svg" imageUrl="nodejs.svg" />
					<Card title="JavaScript" alttext="javascript svg" imageUrl="/js.svg" />
					<Card title="HTML" alttext="html svg" imageUrl="/html.svg" />
					<Card title="CSS" alttext="css svg" imageUrl="/css.svg" />
					<Card title="AWS"  alttext="aws svg" imageUrl="/aws.svg" />
					<Card title="Git"  alttext="git svg" imageUrl="/git.svg" />
					<Card title="Python"  alttext="python svg" imageUrl="/python.svg" />
					<Card title="Django"  alttext="Django svg" imageUrl="/django.svg" />
					<Card title="Flask"  alttext="flask svg" imageUrl="/flask.svg" />
					<Card title="Mongo DB"  alttext="mongodb svg" imageUrl="/mongodb.svg" />
					<Card title="MYSQL"  alttext="mysql svg" imageUrl="/mysql.svg" />
					<Card title="Linux"  alttext="linux png" imageUrl="/linux.png" />
					<Card title="Java"  alttext="java svg" imageUrl="/java.svg" />
					<Card title="Flutter"  alttext="flutter svg" imageUrl="/flutter.svg" />
					<Card title="R"  alttext="Rlanguage svg" imageUrl="/rlang.svg" />
				</div>
			</div>
			
			<div id="experience" className="p-4 m-4"> {/* screen-div-2 */}
				<h2 className="text-center mb-10 mt-12 text-5xl font-semibold bg-inherit">Experience</h2>
				<div className="flex flex-col">
					<div className="flex flex-col max-sm:flex-shrink-0 bg-[rgba(255,255,255,0.1)] rounded-2xl p-2 m-2 shadow-lg transform hover:bg-gray-500 transition-all ease-in-out duration-500">
						<h2 className="text-left mb-6 text-3xl font-semibold">Full Stack Application Developer
						<p className="text-left text-sm bg-inherit">ACM KITS -AP INDIA | June 2018 - May 2021</p>
						</h2>
						
						<ul className="list-disc  pl-8">
							<li>
							Actively participated in software development projects. This involved writing code, both front-end (HTML, CSS, JS/TypeScript - React) and back-end (Java - Node.js, Python - Django), to implement new features and functionalities for our applications.
							</li>
							<li>
							Managed databases, creating and modifying databases, writing SQL queries to extract, insert, and update the databases.
							</li>
							<li>
							Participated in code reviews with senior developers and team members. This allowed me to receive feedback on my code and learn from experienced developers&apos; best practices.
							</li>
							<li>
							Delivered 20+ software features and enhancements, developed software components resulting in an average 50% increase in development speed.
							</li>
						</ul>
					</div>
					<div className="flex flex-col max-sm:flex-shrink-0 bg-[rgba(255,255,255,0.1)] rounded-2xl p-2 m-2 shadow-lg transform hover:bg-gray-500 transition-all ease-in-out duration-500">
						<h2 className="text-left mb-6 text-3xl font-semibold">Data Scientist
						<p className="text-left text-sm bg-inherit">University of Kansas - Lawrence KS USA | Febraury 2023 - October 2023</p>
						</h2>
						
						<ul className="list-disc  pl-8">
							<li>
							Leveraged Python, SQL, and machine learning libraries (e.g., TensorFlow, Scikit-learn) to analyze complex datasets and develop predictive models.
							</li>
							<li>
							Led data collection, cleaning, and preprocessing efforts, ensuring data quality and readiness for analysis.
							</li>
							<li>
							Conducted A/B experiments, resulting in data-driven decisions that optimized processes and improved outcomes.
							</li>
							<li>
							Created impactful data visualizations using Tableau and Matplotlib to effectively communicate insights.
							</li>
							<li>
							Collaborated cross-functionally with teams, defining project goals and delivering data-driven solutions.
							</li>
							<li>
							Documented methodologies and findings, ensuring transparency and knowledge sharing.
							</li>
						</ul>
					</div>
				</div>
			</div>
			
			

		</section>
	);
}
