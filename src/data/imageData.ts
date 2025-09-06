import codeImg from "../imgs/code.jpeg";
import tableImg from "../imgs/table.jpg";
import workoutImg from "../imgs/44.jpeg";
import waveImg from "../imgs/22.png";
import footballImg from "../imgs/football.jpeg";
import nvidiaImg from "../imgs/nvidia.jpg";

const images = [
  {
    "src": nvidiaImg,
    "title": "The GPU Revolution",
    "topic": "Hardware & AI",
    "alt": "An NVIDIA GPU.",
    "top": "15%",
    "right": "8%",
    "initial": { "opacity": 0, "scale": 0.5 },
    "animate": {
      "opacity": 1,
      "scale": 1,
      "transition": { "delay": 1.5, "duration": 0.8 }
    },
    "tailwindClass": "float-animation-2",
    "date": "February 28, 2024",
    "readTime": "5 min read",
    "author": "Jane Doe",
    "featured": true,
    "content": "<p>Graphics Processing Units (GPUs) were once just for gamers, but they've now become the backbone of the AI revolution. Their parallel processing power is uniquely suited for the massive calculations required for deep learning models.</p><p>This shift has democratized access to powerful computing, allowing startups and researchers to train complex models without the need for supercomputers. The innovation cycle in both hardware and AI has accelerated dramatically as a result.</p>",
    "tags": ["hardware", "ai", "machine-learning"],
    "responsiveClasses": "w-[123px] h-[77px] md:w-[150px] md:h-[90px] lg:w-[180px] lg:h-[110px]"
  },
  {
    "src": waveImg,
    "title": "Waves of Code",
    "topic": "Generative Art",
    "alt": "A digital wave pattern.",
    "top": "6%",
    "left": "0.5%",
    "initial": { "opacity": 0, "y": -50 },
    "animate": { "opacity": 1, "y": 0, "transition": { "delay": 0.3, "duration": 0.8 } },
    "tailwindClass": "float-animation",
    "date": "January 10, 2024",
    "readTime": "7 min read",
    "author": "Dr. Amanda Foster",
    "content": "<p>The rise of AI has fundamentally changed how we approach software development. From code generation to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.</p><ul><li>Code completion and generation</li><li>Bug detection and prevention</li><li>Performance optimization</li><li>User experience personalization</li></ul><p>The integration of AI in development workflows is not about replacing developers, but rather augmenting their capabilities and allowing them to focus on more creative and strategic aspects of their work.</p><p>As we move forward, the developers who embrace these AI-powered tools will have a significant advantage in building more efficient, robust, and innovative solutions.</p>",
    "tags": ["artificial intelligence", "development", "automation"],
    "featured": true,
    "responsiveClasses": "w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36"
  },
  {
    "src": workoutImg,
    "title": "Fitness Tracking",
    "topic": "Mobile App Development",
    "alt": "A person working out.",
    "top": "75%",
    "right": "15%",
    "initial": { "opacity": 0, "y": 50 },
    "animate": { "opacity": 1, "y": 0, "transition": { "delay": 1.8, "duration": 0.8 } },
    "tailwindClass": "float-animation",
    "date": "June 1, 2024",
    "readTime": "4 min read",
    "author": "Sarah Brown",
    "content": "<p>The fitness app market is booming, but what does it take to build an app that stands out? This article dives into the key features of a successful fitness tracker, from intuitive UI design to robust data synchronization.</p><p>We'll cover the technologies and design principles needed to create an engaging user experience, including gamification, community features, and personalized workout plans based on machine learning.</p>",
    "tags": ["mobile-app", "development", "fitness"],
    "featured": false,
    "responsiveClasses": "w-32 h-20 sm:w-40 sm:h-24 lg:w-44 lg:h-26"
  },
  {
    "src": footballImg,
    "title": "Football Analytics",
    "topic": "Data Science",
    "alt": "A football pitch with data points.",
    "top": "60%",
    "left": "3.5%",
    "featured": true,
    "initial": { "opacity": 0, "y": 50 },
    "animate": { "opacity": 1, "y": 0, "transition": { "delay": 0.6, "duration": 0.8 } },
    "tailwindClass": "float-animation-3",
    "date": "April 20, 2024",
    "readTime": "6 min read",
    "author": "Alex Miller",
    "content": "<p>Data science has transformed the world of sports, and football is no exception. By analyzing player performance metrics, team tactics, and opposition weaknesses, clubs can gain a significant competitive edge.</p><p>From predictive analytics on player injuries to optimizing in-game strategies, data is now as crucial as a star player. This new era of football is all about using insights to win.</p>",
    "tags": ["data-science", "sports", "analytics"],
    "responsiveClasses": "w-40 h-24 sm:w-48 sm:h-28 lg:w-52 lg:h-30"
  },
  {
    "src": codeImg,
    "title": "Web Dev Workflow",
    "topic": "Frontend Development",
    "alt": "A code editor with lines of code.",
    "top": "25%",
    "left": "18.5%",
    "initial": { "opacity": 0, "y": 50 },
    "animate": { "opacity": 1, "y": 0, "transition": { "delay": 0.9, "duration": 0.8 } },
    "tailwindClass": "float-animation-2",
    "date": "May 5, 2024",
    "readTime": "9 min read",
    "author": "Chris Johnson",
    "content": "<p>A well-optimized frontend development workflow can make all the difference in a project's success. From choosing the right framework to setting up an efficient build process, every step matters.</p><p>This article explores the best tools and practices for 2024, including component-based architectures, state management patterns, and automated testing to ensure a smooth and scalable development process.</p>",
    "tags": ["frontend", "web-dev", "workflow"],
    "featured": false,
    "responsiveClasses": "w-32 h-20 sm:w-40 sm:h-24 lg:w-44 lg:h-26"
  },
  {
    "src": tableImg,
    "title": "Tablet Sketchbook",
    "topic": "UI/UX Design",
    "alt": "A tablet with a design sketch.",
    "top": "45%",
    "right": "0.5%",
    "featured": false,
    "initial": { "opacity": 0, "y": 50 },
    "animate": { "opacity": 1, "y": 0, "transition": { "delay": 1.2, "duration": 0.8 } },
    "tailwindClass": "float-animation-3",
    "date": "March 15, 2024",
    "readTime": "8 min read",
    "author": "Sam Wilson",
    "content": "<p>Sketching on a tablet has become an essential part of the modern UI/UX design process. It allows for quick ideation and wireframing, bridging the gap between a paper-based workflow and digital mockups.</p><p>Designers can now rapidly prototype ideas, gather feedback, and iterate on their designs with unprecedented speed. The tablet acts as a digital canvas, enabling creativity without the limitations of traditional tools.</p>",
    "tags": ["ui/ux", "design", "prototyping"],
    "responsiveClasses": "w-48 h-28 sm:w-56 sm:h-32 lg:w-64 lg:h-36"
  }
];

export default images;