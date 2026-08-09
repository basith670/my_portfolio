const projects = [
  {
    id: 1,
    title: "TripPilot",
    image: "/projects/trippilot.png",

    category: "Full Stack-Next.js",
    status: "Live",

    description:
      "Modern full-stack travel planning platform built with Next.js, designed to help users discover destinations, organize trips, and manage travel plans through a responsive and interactive interface.",

    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/basith670/TripPilot",
    live: "https://trip-pilot-nu.vercel.app/",
  },
  {
    id: 2,
    title: "JobSphere",
    image: "/projects/jobsphere.png",

    category: "Full Stack-React.js",
    status: "Live",

    description:
      "Full-stack job portal built with React and Django REST Framework featuring secure JWT authentication, role-based access for job seekers and recruiters, job posting, application tracking, responsive dashboards, and RESTful APIs.",

    tech: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "JWT",
    ],

    github: "https://github.com/basith670/JobSphere",
    live: "https://job-sphere-chi.vercel.app/",
  },

  {
    id: 3,
    title: "PrepPilot",
    image: "/projects/preppilot.png",

    category: "Django",
    status: "Live",

    description:
      "AI-powered Study Planner and Placement Preparation platform featuring study planning, resume builder, mock interviews, placement tracking, and AI-assisted learning.",

    tech: [
      "React",
      "Django",
      "DRF",
      "OpenAI",
      "PostgreSQL",
      "Tailwind",
    ],

    github: "https://github.com/basith670/PrepPilot",
    live: "https://preppilot-tx5z.onrender.com/",
  },


  {
    id: 4,
    title: "City Hospital Management System",
    image: "/projects/hospital.png",

    category: "Django",
    status: "Live",

    description:
      "A complete Hospital Management System with doctor & patient authentication, appointment booking, medical report management, role-based dashboards, secure authentication, and responsive UI.",

    tech: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "JWT",
      "Bootstrap",
    ],

    github:
      "https://github.com/basith670/city-hospital-management-system",

    live:
      "https://city-hospital-management-system.onrender.com",
  },

  {
    id: 5,
    title: "TerraWatch",
    image: "/projects/terrawatch.png",

    category: "Machine Learning",
    status: "Research",

    description:
      "Machine Learning based Landslide Susceptibility Mapping platform using geospatial datasets, raster processing, clustering algorithms, and interactive visualization.",

    tech: [
      "Python",
      "Machine Learning",
      "Rasterio",
      "Plotly",
      "NumPy",
      "Pandas",
    ],

    github:
      "https://github.com/hrishidev1/Terrawatch2",

    live: "",
  },
  {
    id: 6,
    title: "Uncertainty-Aware SegFormer",
    image: "/projects/segformer.png",

    category: "Deep Learning",
    status: "Accepted Paper",

    description:
      "Evidential Deep Learning framework integrated with a SegFormer (MiT-b3) backbone for high-resolution satellite image segmentation and real-time, single-pass epistemic uncertainty quantification.",

    tech: [
      "PyTorch",
      "SegFormer",
      "Evidential Deep Learning",
      "Python",
      "Vision Transformers",
      "Albumentations",
      "CUDA",
    ],

    github: "https://github.com/hrishidev1/Transformer-based-satellite-segformer",

    live: "",
  },
];

export default projects;