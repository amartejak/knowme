import { ArrowIcon } from "@/components/icons";
import Link from "next/link";

export default function ResumePage() {
	return (
		<div className="flex flex-col h-full text-inherit p-4 border shadow-md rounded-lg mt-4">
		<div className="flex lg:justify-between max-lg:flex-col max-lg:self-center lg:items-center mb-4">
		  <div className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center">
			<h1 className="text-5xl max-lg:mt-10 text-center font-semibold">Amar Teja Kommineni</h1>
			<a  href="mailto:amarteja2@gmail.com" className="text-gray-500">amarteja2@gmail.com</a>
		  </div>
		  {/* <div className="self-center max-lg:pt-4">
			<Link href="/resume.pdf" target="_blank">
				<h1 className="text-center font-bold rounded-full p-1 bg-transparent shadow-sm shadow-zinc-700 animate-bounce">🡻 Download Resume</h1>
			</Link>
		  </div> */}
		</div>
		<hr className="my-4" />
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Education:</h2>
		  <h2 className="text-left text-md font-semibold ml-4">University of Kansas  -  Masters in Computer Science</h2>
					<p className="text-left text-sm mb-2 ml-4">Lawrence, KS, USA | January 2022 - present</p>
		</div>
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Experience:</h2>
		  	<div className="flex flex-col">
				<div className="flex flex-col max-sm:flex-shrink-0 rounded-2xl ml-4">
					<h2 className="text-left text-md font-semibold">Full Stack Application Developer</h2>
					<p className="text-left text-gray-500 text-sm mb-2">ACM KITS - AP INDIA | June 2018 - May 2021</p>
					
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
					<p className="text-left text-gray-500 text-sm mb-2">University of Kansas - Lawrence KS USA | Febraury 2023 - October 2023</p>
											
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
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Skills:</h2>
		  <ul className="list-disc  pl-16">
			<li>
				<strong>Front-End Development:</strong>
				<ul className="pl-8">
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Tailwind CSS</li>
				<li>JavaScript (ES6+)</li>
				<li>TypeScript</li>
				<li>Next.js</li>
				<li>React.js</li>
				<li>Responsive Web Design</li>
				<li>State Management (Redux, Context API)</li>
				<li>AJAX and Asynchronous Programming</li>
				<li>Front-End Build Tools (Webpack)</li>
				<li>Browser Developer Tools</li>
				</ul>
			</li>

			<li>
				<strong>Back-End Development:</strong>
				<ul className="pl-8">
				<li>Node.js</li>
				<li>Express.js</li>
				<li>Python,Java, PHP, C++, Ruby</li>
				<li>Database Management (MySQL, PostgreSQL, MongoDB)</li>
				<li>RESTful API Design</li>
				<li>Server Management and Deployment (AWS)</li>
				</ul>
			</li>

			<li>
				<strong>Version Control and Collaboration:</strong>
				<ul className="pl-8">
				<li>Git and GitHub</li>
				<li>Collaboration using Git workflows</li>
				<li>Agile/Scrum Methodologies</li>
				</ul>
			</li>

			<li>
				<strong>Testing:</strong>
				<ul className="pl-8">
				<li>Unit Testing</li>
				<li>Integration Testing</li>
				<li>Test-Driven Development (TDD)</li>
				</ul>
			</li>

			<li>
				<strong>Tools and Package Managers:</strong>
				<ul className="pl-8">
				<li>npm</li>
				<li>Yarn</li>
				<li>Build Tools (Webpack, Gulp)</li>
				</ul>
			</li>

			<li>
				<strong>APIs and Microservices:</strong>
				<ul className="pl-8">
				<li>RESTful APIs</li>
				<li>Microservices Architecture</li>
				</ul>
			</li>

			<li>
				<strong>Development Environment:</strong>
				<ul className="pl-8">
				<li>Command Line/Shell</li>
				<li>Visual Studio Code, Sublime Text, Atom</li>
				</ul>
			</li>

			<li>
				<strong>Web Performance Optimization:</strong>
				<ul className="pl-8">
				<li>Caching Strategies</li>
				<li>Code Splitting</li>
				<li>Lazy Loading</li>
				</ul>
			</li>

			<li>
				<strong>Soft Skills:</strong>
				<ul className="pl-8">
				<li>Problem-Solving</li>
				<li>Critical Thinking</li>
				<li>Effective Communication</li>
				<li>Team Collaboration</li>
				<li>Time Management</li>
				<li>Continuous Learning</li>
				</ul>
			</li>
			</ul>
		</div>
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Certifications:</h2>
		  <ul className="list-disc  pl-16">
			<li>AWS Machine Learning Foundations</li>
			<li>AWS Cloud Computing 101</li>
			<li>AWS Web Builder</li>
			<li>AWS Cloud Ops</li>
			<li>Infosys Certified Software Programmer</li>
			<li>Python Programming - NPTEL</li>
			<li>R Programming - NPTEL</li>  
		  </ul>
		</div>
	  </div>
	);
}

