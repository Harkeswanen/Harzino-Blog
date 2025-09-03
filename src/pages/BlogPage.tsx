import { useMemo, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/ModalProps";
import { blogs as allBlogs } from "../data/blogData";
import type { Blog } from "../data/blogData";
import { Search, Grid, List, ChevronDown, Clock } from "lucide-react";
import { BsStarFill } from "react-icons/bs";
import { motion } from "framer-motion";

type SortKey = "latest" | "oldest" | "readtime";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, delay: i * 0.20 },
    ease: [0.25, 0.1, 0.25, 1]
  }),
};

const BlogCard = ({ b, onClick }: { b: Blog; onClick: () => void }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      className="group cursor-pointer bg-[#0a0a0a] border rounded-xl overflow-hidden border-[#2a2a2a] hover:border-[#dc0073]/50 shadow hover:shadow-[#dc0073]/20 hover:scale-105 transition-all ease-in-out flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <img 
          src={b.cover} 
          alt={b.title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-600 ease-in-out" 
        />
        {b.featured && (
          <div className="absolute top-3 right-3 bg-[#dc0073] text-white text-xs px-2 py-1 z-[120] rounded-full font-semibold">
            <BsStarFill className="size-3" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-[#dc0073] ring-1 ring-[#dc0073]/30 text-xs px-2 py-1 rounded-md font-medium">
            {b.category}
          </span>
          <div className="flex items-center gap-1 text-zinc-500 text-xs">
            <Clock className="size-3" />
            <span>{b.readTimeMin} min</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold leading-snug line-clamp-2 text-white group-hover:text-[#dc0073] transition-colors">
          {b.title}
        </h3>

        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed flex-1">
          {b.excerpt}
        </p>

        <div className="flex justify-between items-center text-xs text-zinc-500 pt-2 border-t border-zinc-800">
          <span className="truncate">By {b.author}</span>
          <span className="whitespace-nowrap ml-2">{new Date(b.date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-1">
          {b.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="bg-[#1a1a1a] px-2 py-1 text-xs rounded-full text-zinc-400 border border-zinc-700/50"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};export default function BlogPage() {
	const [query, setQuery] = useState("");
	const [cat, setCat] = useState<string>("All");
	const [sort, setSort] = useState<SortKey>("latest");
	const [view, setView] = useState<"grid" | "list">("grid");
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedBlog, setSelectedBlog] = useState<any>(null);

	// Prevent scroll restoration and force scroll to top
	useEffect(() => {
		// Disable scroll restoration
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
		
		// Force immediate scroll to top
		window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		
		// Also set on next frame in case of layout shifts
		requestAnimationFrame(() => {
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		});
	}, []);

	const categories = ["All", ...new Set(allBlogs.map((b) => b.category))];

	const blogs = useMemo(() => {
		let data = [...allBlogs];
		if (cat !== "All") data = data.filter((b) => b.category === cat);
		if (query.trim()) {
			const q = query.toLowerCase();
			data = data.filter(
				(b) =>
					b.title.toLowerCase().includes(q) ||
					b.excerpt.toLowerCase().includes(q) ||
					b.tags.some((t) => t.toLowerCase().includes(q))
			);
		}
		if (sort === "latest") data.sort((a, b) => +new Date(b.date) - +new Date(a.date));
		if (sort === "oldest") data.sort((a, b) => +new Date(a.date) - +new Date(b.date));
		if (sort === "readtime") data.sort((a, b) => b.readTimeMin - a.readTimeMin);
		return data;
	}, [query, cat, sort]);

	const handleBlogClick = (blog: Blog) => {
		// Convert Blog to ImageData format for modal compatibility
		const imageData = {
			src: blog.cover,
			title: blog.title,
			topic: blog.category,
			alt: blog.title,
			tailwindClass: "",
			date: new Date(blog.date).toLocaleDateString(),
			readTime: `${blog.readTimeMin} min read`,
			author: blog.author,
			content: blog.content || blog.excerpt,
			tags: blog.tags,
			featured: blog.featured || false,
		};
		setSelectedBlog(imageData);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedBlog(null);
	};

	return (
		<>
			<Navbar />
			<main className="bg-black min-h-screen text-white" style={{ paddingTop: '80px' }}>
				<section className="max-w-6xl mx-auto px-4">
					<motion.header 
						className="text-center mb-8"
						initial="hidden"
						animate="visible"
						variants={fadeUp}
						custom={0}
					>
						<h1 className="text-4xl md:text-4.5xl font-bold mb-2">
							<span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-[length:200%_200%] text-transparent bg-clip-text gradient-animation">
								Our Blog
							</span>
						</h1>
						<p className="text-zinc-400 mt-2">
							Insights, tutorials, and thoughts on technology, design, and innovation
						</p>
					</motion.header>

					<motion.div 
						className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-4"
						initial="hidden"
						animate="visible"
						variants={fadeUp}
						custom={1}
					>
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
							<input
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search articles..."
								className="w-full bg-[#101010] border border-[#2a2a2a] rounded-lg pl-9 pr-3 py-2.5 text-sm text-zinc-200 outline-none focus:ring-2 focus:ring-pink-700 focus:border-pink-700 transition-all"
							/>
						</div>

						<div className="flex gap-3">
							<div className="relative">
								<select
									value={cat}
									onChange={(e) => setCat(e.target.value)}
									className="appearance-none bg-[#101010] border border-[#2a2a2a] rounded-lg pl-3 pr-10 py-2.5 text-sm text-zinc-200 outline-none focus:ring-2 focus:ring-pink-700 focus:border-pink-700 transition-all cursor-pointer hover:bg-[#151515] min-w-[120px]"
								>
									{categories.map((c) => (
										<option key={c} value={c} className="bg-[#1a1a1a] text-zinc-200">
											{c}
										</option>
									))}
								</select>
								<ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
							</div>

							<div className="relative">
								<select
									value={sort}
									onChange={(e) => setSort(e.target.value as SortKey)}
									className="appearance-none bg-[#101010] border border-[#2a2a2a] rounded-lg pl-3 pr-10 py-2.5 text-sm text-zinc-200 outline-none focus:ring-2 focus:ring-pink-700 focus:border-pink-700 transition-all cursor-pointer hover:bg-[#151515] min-w-[120px]"
								>
									<option value="latest" className="bg-[#1a1a1a] text-zinc-200">Latest</option>
									<option value="oldest" className="bg-[#1a1a1a] text-zinc-200">Oldest</option>
									<option value="readtime" className="bg-[#1a1a1a] text-zinc-200">Read Time</option>
								</select>
								<ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400" />
							</div>

							<div className="inline-flex items-center gap-1 p-1 bg-[#101010] border border-[#2a2a2a] rounded-lg">
								<button
									onClick={() => setView("grid")}
									aria-label="Grid View"
									className={`p-2 rounded-md transition-all ${
										view === "grid" 
											? "bg-pink-600 text-white shadow-lg shadow-pink-600/30" 
											: "text-zinc-400 hover:text-zinc-200 hover:bg-[#1a1a1a]"
									}`}
								>
									<Grid size={16} />
								</button>
								<button
									onClick={() => setView("list")}
									aria-label="List View"
									className={`p-2 rounded-md transition-all ${
										view === "list" 
											? "bg-pink-600 text-white shadow-lg shadow-pink-600/30" 
											: "text-zinc-400 hover:text-zinc-200 hover:bg-[#1a1a1a]"
									}`}
								>
									<List size={16} />
								</button>
							</div>
						</div>
					</motion.div>

					<motion.p 
						className="text-sm text-zinc-500 mt-4"
						initial="hidden"
						animate="visible"
						variants={fadeUp}
						custom={2}
					>
						{blogs.length} articles found
					</motion.p>

					{view === "grid" ? (
						<motion.div 
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
							initial="hidden"
							animate="visible"
							variants={fadeUp}
							custom={3}
						>
							{blogs.map((b) => (
								<BlogCard key={b.id} b={b} onClick={() => handleBlogClick(b)} />
							))}
						</motion.div>
					) : (
						<motion.div 
							className="flex flex-col gap-6 mt-6"
							initial="hidden"
							animate="visible"
							variants={fadeUp}
							custom={3}
						>
							{blogs.map((b, index) => (
								<motion.div 
									key={b.id} 
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
									onClick={() => handleBlogClick(b)}
									className="flex flex-col sm:flex-row bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl overflow-hidden cursor-pointer hover:border-[#dc0073]/50 hover:scale-[1.02] transition-all group"
								>
									<div className="w-full sm:w-64 flex-shrink-0">
										<img src={b.cover} alt={b.title} className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
									</div>
									<div className="flex flex-col flex-1 p-6 space-y-4">
										<div className="flex items-center justify-between">
											<span className="text-[#dc0073] text-xs ring-1 ring-[#dc0073]/30 px-2 py-1 rounded-md font-medium">
												{b.category}
											</span>
											<div className="flex items-center gap-1 text-zinc-500 text-xs">
												<Clock className="size-3" />
												<span>{b.readTimeMin} min</span>
											</div>
										</div>
										<h3 className="text-xl font-semibold leading-tight text-white group-hover:text-[#dc0073] transition-colors line-clamp-2">{b.title}</h3>
										<p className="text-zinc-400 leading-relaxed line-clamp-3 flex-1">{b.excerpt}</p>
										<div className="flex justify-between items-center text-xs text-zinc-500 pt-3 border-t border-zinc-800">
											<span className="truncate">By {b.author}</span>
											<span className="whitespace-nowrap ml-4">{new Date(b.date).toLocaleDateString()}</span>
										</div>
										<div className="flex flex-wrap gap-2">
											{b.tags.slice(0, 4).map((t) => (
												<span key={t} className="text-xs bg-[#151515] text-zinc-400 px-2 py-1 rounded-full border border-zinc-700/50">
													#{t}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					)}
				</section>
				
				{/* Additional spacing before footer */}
				<div className="py-6"></div>
			</main>
			
			{modalOpen && selectedBlog && (
				<Modal imageData={selectedBlog} onClose={handleCloseModal} />
			)}
			<Footer />
		</>
	);
}

