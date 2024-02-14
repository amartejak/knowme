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
					<Card title="NextJs"  alttext="nextjs svg" imageUrl="/nextlogo.svg" />
					<Card title="React"  alttext="reactjs svg" imageUrl="/react.svg" />
					<Card title="NodeJs"  alttext="nodejs svg" imageUrl="nodejs.svg" />
					<Card title="JavaScript" alttext="javascript svg" imageUrl="/js.svg" />
					<Card title="HTML" alttext="html svg" imageUrl="/html.svg" />
					<Card title="CSS" alttext="css svg" imageUrl="/css.svg" />
					<Card title="Tailwind CSS"  alttext="tailwind svg" imageUrl="/tailwind.svg" />
					<Card title="AWS"  alttext="aws svg" imageUrl="/aws.svg" />
					<Card title="Git"  alttext="git svg" imageUrl="/git.svg" />
					<Card title="RestAPI"  alttext="restapi svg" imageUrl="/restapi.svg" />
					<Card title="PHP"  alttext="php svg" imageUrl="/phplogo.svg" />
					<Card title="Python"  alttext="python svg" imageUrl="/python.svg" />
					<Card title="Django"  alttext="Django svg" imageUrl="/django.svg" />
					<Card title="Flask"  alttext="flask svg" imageUrl="/flask.svg" />
					<Card title="Mongo DB"  alttext="mongodb svg" imageUrl="/mongodb.svg" />
					<Card title="MYSQL"  alttext="mysql svg" imageUrl="/mysql.svg" />
					<Card title="Linux"  alttext="linux png" imageUrl="/linux.png" />
					<Card title="C++"  alttext="c++ svg" imageUrl="/c++logo.svg" />
					<Card title="Java"  alttext="java svg" imageUrl="/java.svg" />
					{/* <Card title="Flutter"  alttext="flutter svg" imageUrl="/flutter.svg" /> */}
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
									<li>Developed and kept both front-end and back-end components of web applications using React, NextJs, TypeScript, Python, Django, and Flask frameworks.</li>
									<li>Implemented responsive and user-friendly front-end interfaces using ReactJs, HTML5, CSS3, TypeScript and JavaScript.</li>
									<li>Managed database systems including PostgreSQL, MySQL, MongoDB, and Elasticsearch, ensuring efficient data storage and retrieval.</li>
									<li>Utilized Docker for containerization to streamline application deployment and management processes.</li>
									<li>Orchestrate containerized applications using Kubernetes, ensuring scalability and reliability of production environments.</li>
									<li>Implement continuous integration and continuous deployment (CI/CD) pipelines using Jenkins, easing automated testing and deployment processes.</li>
									<li>Created and managed infrastructure as code (IaC) using Terraform, automating the provisioning and configuration of cloud resources.</li>
									<li>Collaborated with cross-functional teams in an Agile environment, taking part in sprint planning, daily stand-ups, and retrospectives.</li>
									<li>Developed interactive data visualizations using eCharts and D3.js to present complex data in a comprehensible manner.</li>
									<li>Communicated effectively with team members and stakeholders to gather requirements, provided updates, and ensured alignment with project goals.</li>
									<li>Proficient in data visualization tools like Tableau or Power BI to create insightful dashboards and reports for data-driven decision-making.</li>
									<li>Proficient in big data analytics concepts, including data processing, storage, and analysis at scale.</li>
									<li>Experienced working with data lakes, such as Apache Hadoop or AWS S3, to store and manage large volumes of structured and unstructured data.</li>
									<li>Familiarity with Delta Lake, an open-source storage layer that brings reliability to data lakes, ensuring ACID transactions and data integrity.</li>
									<li>Hands-on experience with Databricks, a unified analytics platform built on Apache Spark, for data engineering, machine learning, and analytics tasks.</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</section>
	);
}
