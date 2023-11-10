import { ArrowIcon } from "@/components/icons";
import Link from "next/link";

export default function ResumePage() {
	return (
		<div className="flex flex-col h-full text-inherit p-4 border shadow-md rounded-lg mt-4">
		<div className="flex lg:justify-between max-lg:flex-col max-lg:self-center lg:items-center mb-4">
		  <div>
			<h1 className="text-5xl max-lg:mt-10 text-center font-semibold">Amar Teja Kommineni</h1>
			<p className="text-gray-500 max-lg:text-center ">Full Stack Application Developer | Data Scientist | Freelancer </p>
		  </div>
		  <div className="self-center max-lg:pt-4">
			<Link href="/resume.pdf" target="_blank">
				<h1 className="text-center font-bold rounded-full p-1 bg-transparent shadow-sm shadow-zinc-700 animate-bounce">🡻 Download Resume</h1>
			</Link>
		  </div>
		</div>
		<hr className="my-4" />
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Education</h2>
		  <h2 className="text-left text-md font-semibold ml-4">University of Kansas  -  Masters in Computer Science</h2>
					<p className="text-left text-sm mb-2 ml-4">Lawrence, KS, USA | January 2022 - present</p>
		</div>
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Experience</h2>
		  	<div className="flex flex-col">
				<div className="flex flex-col max-sm:flex-shrink-0 rounded-2xl ml-4">
					<h2 className="text-left text-md font-semibold">Full Stack Application Developer</h2>
					<p className="text-left text-sm mb-2">ACM KITS - AP INDIA | June 2018 - May 2021</p>
					
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
				<div className="flex flex-col max-sm:flex-shrink-0 rounded-2xl ml-4 mt-2">
					<h2 className="text-left text-md font-semibold">Data Scientist</h2>
					<p className="text-left text-sm mb-2">University of Kansas - Lawrence KS USA | Febraury 2023 - October 2023</p>
											
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
	  </div>
	);
}

