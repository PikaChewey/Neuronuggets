export type ArticleType = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  tags: string[];
  image: string;
  content?: React.ReactNode;
  references?: string[];
};

export const articles: ArticleType[] = [
  {
    title: "The Natural Order of the World: Embracing Disorder",
    excerpt: "When we look at our existence through a scientific lens, we try to find patterns and laws that govern our existence. In our minds, we are looking for an orderly way of the world, one consisting of neat blocks and predictable movements.",
    slug: "natural-order-world-embracing-disorder",
    date: "Jul 21, 2024",
    readTime: "3 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Physics", "Science", "Education", "Life", "Creativity"],
    image: "/images/articles/entropy.jpg",
    references: []
  },
  {
    title: "Colonialism: It's Impact on South Asian Genetics",
    excerpt: "The Legacy of British colonialism in South Asia extends far beyond the political and economic turmoil, leaving a profound impact on the health and epigenetics of the population.",
    slug: "colonialism-impact-south-asian-genetics",
    date: "Jul 21, 2024",
    readTime: "5 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Science", "Life", "Politics", "History", "Creativity"],
    image: "/images/articles/colonialism-impact.jpg"
  },
  {
    title: "Guide to curing a heartbreak: generate a new one",
    excerpt: "A MIT's MITES Semester project: Every 33 seconds, someone loses their battle against heart disease. That's 1.8 million people a year; 1.8 million people who never chose their illness but had to face the consequences.",
    slug: "guide-curing-heartbreak-generate-new-one",
    date: "Jul 25, 2024",
    readTime: "6 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Science", "Research", "Life", "Growth", "Study"],
    image: "/images/articles/lab-grown-heart.jpg"
  },
  {
    title: "The Land of Opportunities?",
    excerpt: "An ode to self-improvement: Thousands of immigrants moved to America for opportunity. America, the land of opportunity they say. But that is a misnomer.",
    slug: "land-of-opportunities",
    date: "Aug 18, 2024",
    readTime: "5 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Self Improvement", "Self Improvement Tips", "Self Improvement Goals", "Life", "Life Lessons"],
    image: "/images/articles/self-improvement.jpg"
  },
  {
    title: "Balancing the Scales",
    excerpt: "Part II: Taking Control of Your Destiny- An Ode to Self-Improvement. In a world where the cards often feel stacked against you, where opportunities gleam tantalizingly behind glass panes, and where the scales of justice seem perpetually tipped, it can be all too easy to succumb to a victim mentality.",
    slug: "balancing-the-scales",
    date: "Nov 17, 2024",
    readTime: "5 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Self Improvement", "Productivity", "Writing", "Mental Health", "Life"],
    image: "/images/articles/balancing-scales.jpg"
  },
  {
    title: "The Building Blocks of Tomorrow's Medicine",
    excerpt: "Nanoparticles in Tissue Engineering and Bioprinting: We all love to learn science, no? Well, whether its that case or not, here's something cool I'm sure you guys will LOVE!",
    slug: "building-blocks-tomorrows-medicine",
    date: "Dec 19, 2024",
    readTime: "6 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/siya-patel.jpg",
    tags: ["Science", "Life", "Medicine", "Biology", "Learning"],
    image: "/images/articles/nanoparticles-medicine.jpg"
  },
  {
    title: "Building 'Smart Cells': A New Frontier in Synthetic Biology",
    excerpt: "Imagine a world where our cells function like tiny robots, capable of detecting diseases and administering treatments precisely when and where they're needed. This vision is becoming a reality, thanks to groundbreaking research from bioengineers at Rice University.",
    slug: "building-smart-cells-new-frontier-synthetic-biology",
    date: "Jan 4, 2025",
    readTime: "3 min read",
    author: "",
    authorImage: "/images/authors/author2.jpg",
    tags: ["Science", "Science Communication", "Cells", "Science Education", "Life"],
    image: "/images/articles/article-7.jpg"
  },
  {
    title: "Zebrafish Protein Unlocks Dormant Genes for Heart Repair",
    excerpt: "Researchers have discovered a key protein in zebrafish that activates dormant genes responsible for heart tissue regeneration, potentially opening new avenues for treating heart disease in humans.",
    slug: "zebrafish-protein-unlocks-dormant-genes-heart-repair",
    date: "Jan 5, 2025",
    readTime: "4 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/author2.jpg",
    tags: ["Science", "Science Communication", "Heart Disease", "Medicine", "Research"],
    image: "/images/articles/article-8.jpg"
  },
  {
    title: "SNHG26: A Key RNA Molecule in Skin Wound Healing",
    excerpt: "A newly identified long non-coding RNA called SNHG26 plays a crucial role in skin wound healing, regulating cell migration and proliferation essential for tissue repair.",
    slug: "snhg26-key-rna-molecule-skin-wound-healing",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    author: "Siya Patel",
    authorImage: "/images/authors/author2.jpg",
    tags: ["Science", "Biology", "Medicine", "RNA", "Genetics"],
    image: "/images/articles/article-9.jpg"
  },
  {
    title: "Developing a Hybrid VAWT",
    excerpt: "Our team developed a hybrid Vertical Axis Wind Turbine (VAWT) combining Darrieus and Savonius designs to optimize performance in urban settings with variable wind conditions.",
    slug: "developing-hybrid-vawt-optimize-performance-urban-settings",
    date: "Mar 10, 2025",
    readTime: "6 min read",
    author: "Sur Patel, Siya Patel, Shiv Patel",
    authorImage: "/images/authors/team1.jpg",
    tags: ["Engineering", "Renewable Energy", "Technology", "Design", "Innovation"],
    image: "/images/articles/article-10.jpg"
  },
  {
    title: "BIOENGINEERING ARABIDOPSIS",
    excerpt: "Our research explores genetic modifications to Arabidopsis thaliana that enhance its ability to withstand high UV radiation, with implications for agriculture in changing climate conditions.",
    slug: "bioengineering-arabidopsis-withstand-high-uv-radiation",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    author: "Siya Patel, Lauren Barnett, Kenny Santizo",
    authorImage: "/images/authors/team2.jpg",
    tags: ["Science", "Biology", "Genetic Engineering", "Plants", "Research"],
    image: "/images/articles/article-11.jpg"
  },
  {
    title: "Between Dreams and Departure",
    excerpt: "An exploration of the fascinating phenomena of lucid dreams and out-of-body experiences, examining the science behind these states and their implications for our understanding of consciousness.",
    slug: "between-dreams-departure-lucid-dreams-out-body-experiences",
    date: "Apr 8, 2025",
    readTime: "4 min read",
    author: "Adnan Hussain Sajeeb",
    authorImage: "/images/authors/author3.jpg",
    tags: ["Psychology", "Consciousness", "Dreams", "Neuroscience", "Experience"],
    image: "/images/articles/article-12.jpg"
  },
  {
    title: "From Science to Signals: Synaptic Surgery with Science",
    excerpt: "Advancements in neurosurgical techniques are enabling precise modifications to synaptic connections, potentially revolutionizing treatments for neurological disorders and brain injuries.",
    slug: "science-signals-synaptic-surgery-science",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    author: "Islam Hani",
    authorImage: "/images/authors/author4.jpg",
    tags: ["Neuroscience", "Technology", "Medicine", "Surgery", "Innovation"],
    image: "/images/articles/article-13.jpg"
  },
  {
    title: "Would you accept an offer to live 300 years?",
    excerpt: "A thought-provoking analysis of the ethical, social, and personal implications of radical life extension, questioning whether we would truly want to live for centuries.",
    slug: "would-you-accept-offer-live-300-years",
    date: "Apr 30, 2025",
    readTime: "6 min read",
    author: "Nicola Rojas Taborda",
    authorImage: "/images/authors/author5.jpg",
    tags: ["Philosophy", "Ethics", "Longevity", "Society", "Future"],
    image: "/images/articles/article-14.jpg"
  }
]; 