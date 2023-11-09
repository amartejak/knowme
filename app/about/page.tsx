import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="flex flex-col h-full text-inherit p-4 border shadow-md rounded-lg mt-4">
		<div className="flex max-lg:flex-col max-lg:self-center lg:items-center mb-4">
		  <Image
			className="rounded-full bg-neutral-800 hover:border max-lg:self-center lg:ml-24 lg:mr-48"
			src="/model_bw.png"
			width={300}
			height={300}
			alt="Amar Teja Kommineni"
		  />
		  <div className="">
			<h1 className="text-5xl max-lg:mt-10 text-center font-semibold">Amar Teja Kommineni</h1>
			<p className="text-gray-500 max-lg:text-center ">Full Stack Application Developer | Data Scientist | Freelancer </p>
		  </div>
		</div>
		<hr className="my-4" />
		<div className="mb-4">
		  <h2 className="text-lg mb-2 font-semibold">Summary</h2>
		  <p className="ml-4">
		  I&apos;m a multifaceted professional, specializing as a Full Stack Application Developer, Data Scientist, and Freelancer. My journey in technology began with a fascination for coding, which led me to become a Full Stack Developer. I take pride in building responsive, user-centric applications that seamlessly bridge the gap between creativity and functionality. In parallel, I&apos;ve delved into the world of Data Science, where I explore data&apos;s hidden treasures, extracting valuable insights that drive informed decision-making. With expertise in algorithms, statistical analysis, and machine learning, I solve complex problems by transforming data into actionable knowledge. My career as a Freelancer has been a fulfilling adventure, allowing me to collaborate with diverse clients and teams worldwide. I&apos;m dedicated to understanding the unique needs of each project and delivering tailored solutions that consistently exceed expectations. In an ever-evolving tech landscape, I embrace continuous learning, staying at the forefront of emerging technologies, and approaching new challenges with zeal. I possess a strong foundation in programming, data analysis, and an unyielding passion for problem-solving. I&apos;m here to connect, collaborate, and transform your ideas into reality. Whether it&apos;s building applications, diving into data analysis, or taking on innovative projects, I&apos;m ready to work together to achieve success. Let&apos;s embark on a journey of innovation and growth, turning your ideas into tangible solutions that make a meaningful impact.
		  </p>
		</div>
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
				<div className="flex flex-col max-sm:flex-shrink-0 rounded-2xl ml-4 mt-2">
					<h2 className="text-left text-md font-semibold">Data Scientist</h2>
					<p className="text-left text-sm mb-2">University of Kansas - Lawrence KS USA | Febraury 2023 - October 2023</p>
											
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
	  </div>
	);
}
