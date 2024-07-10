import {
	Bootstrap,
	CSS,
	Dart,
	Docker,
	Figma,
	Firebase,
	Flutter,
	Git,
	Html,
	Javascript,
	Laravel,
	MongoDB,
	Nodejs,
	Reactjs,
	Redux,
	Tailwind,
	Typescript,
	Yii2,
	PostgreSQL,
	Canva,
	YTCloneApp,
	GoFitnessApp,
	GenerateQuoteApp,
	AndroidStudio,
	GRPC,
	Svelte,
	Drizzle,
	AWS
} from "../assets";

export const navLinks = [
	{
		id: "About",
		title: "About",
	},
	{
		id: "Experience",
		title: "Experience",
	},
	{
		id: "Project",
		title: "Project",
	},
	{
		id: "Contact",
		title: "Contact",
	},
];

export const services = ["Web Developer", "Backend Developer", "Web Designer"];

export const technologies = [
	{
		name: "AWS",
		icon: AWS,
	},
	{
		name: "gRPC",
		icon: GRPC,
	},
	{
		name: "Svelte",
		icon: Svelte,
	},
	{
		name: "Nodejs",
		icon: Nodejs,
	},
	{
		name: "Javascript",
		icon: Javascript,
	},
	{
		name: "Typescript",
		icon: Typescript,
	},
	{
		name: "Docker",
		icon: Docker,
	},
	{
		name: "Reactjs",
		icon: Reactjs,
	},
	{
		name: "Drizzle",
		icon: Drizzle,
	},
	{
		name: "MongoDB",
		icon: MongoDB,
	},
	{
		name: "PostgreSQL",
		icon: PostgreSQL,
	},
	{
		name: "Redux",
		icon: Redux,
	},
	{
		name: "Tailwind",
		icon: Tailwind,
	},
	{
		name: "Git",
		icon: Git,
	},
	{
		name: "Yii2",
		icon: Yii2,
	},
	{
		name: "Laravel",
		icon: Laravel,
	},
	{
		name: "Bootstrap",
		icon: Bootstrap,
	},
	{
		name: "Flutter",
		icon: Flutter,
	},
	{
		name: "Dart",
		icon: Dart,
	},
	{
		name: "Firebase",
		icon: Firebase,
	},
	{
		name: "Figma",
		icon: Figma,
	},
	{
		name: "Canva",
		icon: Canva,
	},
	{
		name: "Android Studio",
		icon: AndroidStudio,
	}
];

export const experiences = [
	{
		title: "Software Engineer",
		company_name: "9LOOP Software Sdn. Bhd.",
		iconBg: "#383E56",
		date: "Aug 2023 - Present",
		points: [
			"Working on a system that is used by 48 licensed online casino operators. Includes handling 50 thousand deposits per day and 240,000 transactional wagers. AWS stack including ECS, CloudWatch, RDS (Postgres) and ElastiCache.",
			"CI/CD using Bitbucket pipelines.",
			"Full suite of unit, integration and functional test.",
			"Multi DB, multi tenant homogeneous database design.",
			"Custom PubSub service.",
			"Functional programming.",
			"CRUD Generator.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Infollective Solutions Company",
		iconBg: "#E6DEDD",
		date: "Apr 2021 - June 2023",
		points: [
			"Collaborated closely with the frontend development team to integrate the HTML, CSS, Bootstrap, JavaScript, and jQuery components seamlessly into the overall application design.",
			"Developed and implemented backend infrastructure using PHP and utilized Yii2 framework to accelerate backend development and enhance code maintainability",
			"Implemented security measures in the backend code to protect against vulnerabilities and unauthorized access.",
			"Documented the backend codebases and provided technical documentation for future reference and knowledge sharing using SwaggerUI.",
			"Conducted thorough testing and debugging of both frontend and backend components to ensure the overall application’s reliability and functionality",
		],
	},
	{
		title: "Full-Stack Web Developer",
		company_name: "Infollective Solutions Company",
		iconBg: "#383E56",
		date: "Aug 2020 - Mar 2021",
		points: [
			"Developed, maintained, and shipped production code for client website primarily using HTML, CSS, JavaScript, jQuery and PHP.",
			"Conducted quality assurance testing across multiple web browsers and devices to ensure seamless cross-browser compatibility and optimal mobile responsiveness.",
			"Implemented robust and secure APIs and web services using PHP to facilitate seamless communication between frontend and backend systems.",
			"Integrated MySQL database with PHP to store and retrieve data efficiently",
		],
	},
];

export const projects = [
	{
		name: "Youtube Clone",
		description: "Web-based platform that allows users to search videos",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: YTCloneApp,
		source_code_link: "https://github.com/golden123799/youtube-clone",
		webpage_link: "https://ut-clone.netlify.app/",
	},
	{
		name: "Go Fitness",
		description:
			"Web application that enables users to search for exercises by targetted muscle group.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "Material UI",
				color: "pink-text-gradient",
			},
		],
		image: GoFitnessApp,
		source_code_link: "https://github.com/golden123799/go-fitness",
		webpage_link: "https://go-for-fitness.netlify.app/",
	},
	{
		name: "Quote Generator",
		description:
			"Web application that enables users to generate a random quote",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: GenerateQuoteApp,
		source_code_link: "https://github.com/golden123799/quote-generator",
		webpage_link: "https://generate-your-quote.netlify.app/",
	},
];
