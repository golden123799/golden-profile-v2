import {
	Bootstrap,
	Dart,
	Docker,
	Figma,
	Firebase,
	Flutter,
	Git,
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
			"Develop system used by 48 licensed online casino operators. Includes handling 50 thousand deposits and 240,000 transactional wagers per day. AWS stack including ECS, CloudWatch, RDS (Postgres) and ElastiCache.",
			"Developed backend services using Node.js and Fastify, improving API response times by 25%.",
			"Implemented CI/CD pipelines using Bitbucket Pipelines, reducing deployment time by 40%.",
			"Maintained a full suite of unit, integration, and functional tests, increasing code coverage to 85%.",
			"Developed a custom internationalization (i18n) package, supporting 10+ languages.",
			"Designed a multi-DB, multi-tenant homogeneous database architecture, enhancing scalability and reducing query response time by 20%.",
			"Created custom PubSub service for inter-service communication, improving message delivery reliability by 30%.",
			"Built an in-house CRUD Generator to streamline development processes, reducing development time for new features by 20 %.",
		],
	},
	{
		title: "Full-stack Web Developer",
		company_name: "Infollective Solutions Company",
		iconBg: "#E6DEDD",
		date: "Apr 2021 - June 2023",
		points: [
			"Developed and maintained robust server-side applications using PHP, Yii2, improving system uptime by 20%.",
			"Designed and implemented secure APIs and web services, reducing data retrieval time by 30%.",
			"Integrated MySQL databases with PHP, optimizing queries to increase database performance by 25%.",
			"Ensured data integrity and consistency, achieving 99.9% accuracy in data storage and retrieval.",
			"Conducted backend testing and debugging, decreasing bug occurrence by 15% and enhancing code quality.",
			"Developed responsive and dynamic frontend components using JavaScript, HTML, and CSS, enhancing the overall user interface.",
			"Implemented backend features ensuring scalability and performance, handling up to 100,000 million user requests per day.",
		],
	}
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
