export type BlogCategory =
	| "Innovation"
	| "Design"
	| "AI & Machine Learning"
	| "Development"
	| "Technology"
	| "Business";

export type Blog = {
	id: string;
	title: string;
	excerpt: string;
	content?: string;
	author: string;
	date: string;
	readTimeMin: number;
	category: BlogCategory;
	tags: string[];
	cover: string;
	featured?: boolean;
};

// Images live under src/imgs. Import paths as string so Vite handles them.
import codeImg from "../imgs/code.jpeg";
import tableImg from "../imgs/table.jpg";
import workoutImg from "../imgs/44.jpeg";
import waveImg from "../imgs/22.png";
import footballImg from "../imgs/football.jpeg";
import nvidiaImg from "../imgs/nvidia.jpg";

export const blogs: Blog[] = [
	{
		id: "future-digital-innovation",
		title: "The Future of Digital Innovation: Transforming Ideas into Reality",
		excerpt:
			"Discover innovative approaches to digital transformation and cutting-edge solutions that bridge creativity and technology.",
		author: "Sarah Chen",
		date: "2024-01-15",
		readTimeMin: 8,
		category: "Innovation",
		tags: ["digital transformation", "innovation", "technology"],
		cover: footballImg,
		featured: true,
	},
	{
		id: "design-systems-scale",
		title: "Design Systems That Scale: Building for Tomorrow",
		excerpt:
			"Explore comprehensive case studies that showcase successful, scalable design systems across platforms.",
		author: "Marcus Rodriguez",
		date: "2024-01-12",
		readTimeMin: 6,
		category: "Design",
		tags: ["design systems", "ui/ux", "scalability"],
		cover: codeImg,
		featured: true,
	},
	{
		id: "ai-powered-development",
		title: "AI-Powered Development: The Next Frontier",
		excerpt:
			"Navigate the future of web development with emerging AI technologies and best practices that deliver real value.",
		author: "Dr. Amanda Foster",
		date: "2024-01-10",
		readTimeMin: 7,
		category: "AI & Machine Learning",
		tags: ["artificial intelligence", "development", "automation"],
		cover: waveImg,
		featured: true,
	},
	{
		id: "responsive-web-design-2024",
		title: "Responsive Web Design in 2024: Beyond Mobile-First",
		excerpt:
			"Advanced techniques for scalable architecture, performance optimization, and user-centered design.",
		author: "Jake Thompson",
		date: "2024-01-08",
		readTimeMin: 9,
		category: "Development",
		tags: ["responsive design", "css", "web development"],
		cover: workoutImg,
	},
	{
		id: "psychology-of-ui-design",
		title: "The Psychology of User Interface Design",
		excerpt:
			"Understanding cognitive principles that drive effective UI design and improve user engagement.",
		author: "Lisa Park",
		date: "2024-01-05",
		readTimeMin: 10,
		category: "Design",
		tags: ["psychology", "ui design", "user experience"],
		cover: tableImg,
	},
	{
		id: "sustainable-software-architecture",
		title: "Building Sustainable Software Architecture",
		excerpt:
			"Strategies for creating software systems that can evolve and scale while maintaining performance and reliability.",
		author: "Michael Chen",
		date: "2024-01-03",
		readTimeMin: 12,
		category: "Technology",
		tags: ["architecture", "scalability", "software engineering"],
		cover: nvidiaImg,
	},
	{
		id: "visual-storytelling-digital-media",
		title: "The Art of Visual Storytelling in Digital Media",
		excerpt:
			"Explore how visual elements can be used to create compelling narratives that engage and inspire audiences.",
		author: "Emma Rodriguez",
		date: "2024-01-01",
		readTimeMin: 8,
		category: "Design",
		tags: ["visual design", "storytelling", "digital media"],
		cover: codeImg,
	},
	{
		id: "embracing-remote-work",
		title: "Embracing Remote Work: Technology and Culture",
		excerpt:
			"How modern organizations are leveraging technology to build strong remote work cultures and maintain productivity.",
		author: "David Kumar",
		date: "2023-12-28",
		readTimeMin: 7,
		category: "Business",
		tags: ["remote work", "productivity", "workplace culture"],
		cover: workoutImg,
	},
];

export const categories: BlogCategory[] = [
	"All" as unknown as BlogCategory,
	"Innovation",
	"Design",
	"AI & Machine Learning",
	"Development",
	"Technology",
	"Business",
];

