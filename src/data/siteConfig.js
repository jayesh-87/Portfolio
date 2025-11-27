const siteConfig = {
  name: "Jayesh Solanke",
  title: "Full-stack & Python Developer",
  tagline: "Building fast and beautiful web experiences.",
  email: "jayeshsolanke47@gmail.com",
  github: "https://github.com/jayesh-87",
  linkedin: "www.linkedin.com/in/jayesh-solanke",
  resume: "/resume.pdf", // place resume.pdf in /public or root
  projects: [
    {
      id: 1,
      title: "Court Data Scraper Automation Tool",
      desc: "An automation tool for scraping and processing court data efficiently, built to handle large-scale data extraction with error handling and scheduling.",
      tech: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
      github: "https://github.com/jayesh-87/Court-Data-Scraper-Automation-Tool",
      images: ["/images/court-scraper-1.png", "/images/court-scraper-2.png", "/images/court-scraper-3.png"] // Array of image paths
    },
    {
      id: 2,
      title: "Smart Parking System",
      desc: "An IoT-based smart parking system that monitors availability, manages reservations, and optimizes parking spaces using sensors and real-time data.",
      tech: ["Python", "Raspberry Pi", "IoT", "Flask", "SQLite"],
      github: "https://github.com/jayesh-87/smart-parking-system",
      images: ["/images/smart-parking-1.png", "/images/smart-parking-2.png"] // Add your actual paths
    },
    {
      id: 3,
      title: "AI Trading Genie",
      desc: "An AI-powered trading assistant (Genie) that analyzes market data, predicts trends, and automates trading strategies using machine learning models.",
      tech: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
      github: "https://github.com/jayesh-87/Al-Trading-Genie",
      images: ["/images/ai-trading-1.png", "/images/ai-trading-2.png"] // Add your actual paths
    }
  ],
 skills: [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"]
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Flask", "FastAPI", "REST APIs"]
  },
  {
    title: "Databases",
    items: ["MySQL"]
  },
  {
    title: "Data Science / Machine Learning",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter Notebook"]
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Vite", "VSCode",]
  }
  ],
  experience: [
    {
      id: 1,
    role: "Python Full-Stack Development Training",
    company: "Kiran Academy, Pune",
    period: "2024",
    desc: "Completed intensive hands-on training focused on Python programming, Django framework, REST API development, MySQL integration, and full-stack application workflows. Worked on practical projects and gained a strong understanding of real-world development practices."
  }
  ]

};

export default siteConfig;