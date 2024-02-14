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
					<p className="text-left text-gray-500 text-sm mb-2">Axis Point Solutions - Hyderabad, India | Jan 2019 - Dec 2021</p>
					
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

