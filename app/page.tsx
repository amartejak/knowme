import { Card } from "@/components/card";
import SubNavbar from "@/components/subnavbar";
import { Chakra } from "@/components/icons";


export default function Home() {	
	return (
		<section className="">
			<div className="relative h-[95vh] flex items-center justify-center">  {/* screen-div-1 */}

				<Chakra className="max-sm:hidden absolute inset-y-0 z-0 w-full h-[90vh] text-center fill-transparent dark:stroke-zinc-700 stroke-zinc-400"/>
				<div className="relative z-10 p-10">
					<div className="mb-2 self-center">
						<h1 className="text-center border-b-1 border-zinc-500 border-opacity-30 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 tracking-tight font-semibold text-4xl md:text-5xl lg:text-6xl 2xl:text-9xl">Amar&nbsp;Teja Kommineni</h1>
						<h2 className=" text-center tracking-tight dark:text-zinc-300 text-inherit text-xl lg:text-2xl 2xl:text-6xl">
							A Full Stack Application Developer.
						</h2>
					</div>
					<div className="flex 2xl:mt-4 justify-center">
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
					<div className="flex flex-col max-sm:flex-shrink-0 bg-transparent rounded-2xl p-2 m-2 shadow-lg transform dark:hover:bg-zinc-800 hover:bg-zinc-500 transition-all ease-in-out duration-500">
						<h2 className="text-left mb-6 text-3xl font-semibold">Full Stack Application Developer
						<p className="text-left text-sm bg-inherit">ACM KITS - AP INDIA | June 2018 - May 2021</p>
						</h2>
						
						<ul className="pl-8">
							<li>
								<ul className="list-disc pl-4">
									<li className="list-none mb-2">Lead the development and implementation of innovative web solutions, contributing to the company&apos;s success in delivering high-quality products to clients.</li>
									<li>
										<strong>Front-End Development:</strong>
										<ul className="pl-8">
											<li>Spearheaded the front-end development of several client projects, utilizing advanced skills in HTML, CSS, and JavaScript.</li>
											<li>Developed responsive and intuitive user interfaces using React.js, enhancing the overall user experience and engagement.</li>
										</ul>
									</li>
									<li>
										<strong>Back-End Development:</strong>
										<ul className="pl-8">
											<li>Designed and implemented robust server-side applications using Node.js, ensuring efficient data processing and system reliability.</li>
											<li>Managed and optimized relational databases (MySQL) for improved performance and scalability.</li>
										</ul>
									</li>
									<li>
										<strong>API Development:</strong>
										<ul className="pl-8">
											<li>Engineered RESTful APIs to facilitate seamless communication between front-end and back-end systems, enabling efficient data exchange.</li>
											<li>Implemented secure authentication mechanisms to safeguard user data and privacy.</li>
										</ul>
									</li>
									<li>
										<strong>Collaborative Development:</strong>
										<ul className="pl-8">
											<li>Worked collaboratively with cross-functional teams, participating in Agile/Scrum ceremonies to ensure project alignment with business goals.</li>
											<li>Utilized Git for version control, leading to streamlined collaboration and efficient code management.</li>
										</ul>
									</li>
									<li>
										<strong>Deployment and Infrastructure:</strong>
										<ul className="pl-8">
											<li>Orchestrated deployment processes using AWS, automating server configurations and enhancing system scalability.</li>
											<li>Monitored and maintained production environments, ensuring system availability and reliability.</li>
										</ul>
									</li>
									<li>
										<strong>Continuous Improvement:</strong>
										<ul className="pl-8">
											<li>Actively participated in ongoing professional development, staying abreast of emerging technologies and integrating them into project workflows.</li>
											<li>Implemented testing strategies, including unit testing and integration testing, resulting in a reduction of post-release issues by 20%.</li>
										</ul>
									</li>
									<li>
										<strong>Client Interaction:</strong>
										<ul className="pl-8">
											<li>Engaged with clients to understand project requirements, provided technical insights, and delivered solutions that exceeded expectations.</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="flex flex-col max-sm:flex-shrink-0 bg-transparent rounded-2xl p-2 m-2 shadow-lg transform dark:hover:bg-zinc-800 hover:bg-zinc-500 transition-all ease-in-out duration-500">
						<h2 className="text-left mb-6 text-3xl font-semibold">Data Scientist
						<p className="text-left text-sm bg-inherit">University of Kansas - Lawrence KS USA | Febraury 2023 - October 2023</p>
						</h2>
						
						<ul className="list-disc  pl-12">
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
