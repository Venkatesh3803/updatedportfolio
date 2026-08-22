import tmdb from "../assets/images/2023-05-27 (2).png";
import writewave from "../assets/images/writewave.png";
import dressup from "../assets/images/dressup.png";
import crowdfunding from "../assets/images/crowdfunding.png";
import pdfengine from "../assets/images/pdfengine.svg";

const projectsData = [
  {
    id: 5,
    image: pdfengine,
    title: "PDF Engine",
    shortDesc:
      "A feature-rich PDF engine to create, edit, and manage PDF documents online with a smooth, responsive interface.",
    description:
      "PDF Engine is a modern web application for working with PDF documents directly in the browser.\n Features \n Create PDFs: Build clean, formatted PDF documents with an easy-to-use interface.\n Edit & Manage: View, organize, and manage your PDF files online.\n Fast & Responsive: Client-side processing for quick results on any device.\n Clean UI: A modern, responsive interface built for a seamless user experience.",
    gitHub: "",
    liveProject: "https://pdf-engine-client.vercel.app/",
    technologies: "React Js",
  },
  {
    id: 1,
    image: tmdb,
    title: "TMDB Clone",
    shortDesc:
      "A TMDB (The Movie Database) clone website is a platform designed to mimic the features and functionality of the original TMDB website.",
    description:
      "A TMDB (The Movie Database) clone website is a platform designed to mimic the features and functionality of the original TMDB website. TMDB is a popular online database that provides information about movies, TV shows, and actors. Creating a TMDB clone involves replicating key aspects of the original site while possibly adding unique features or improvements.\n Here's a general description of what a TMDB clone website might include:\n Movie and TV Show Database: The core feature would be a comprehensive database of movies and TV shows. Users can search, browse, and access detailed information about various films and series.\n Search and Filtering: Robust search functionality and advanced filtering options help users find specific movies or TV shows based on criteria such as genre, release year, rating, and more.\nDetailed Information: Each movie or TV show page should display essential information, including cast and crew details, plot summaries, release dates, ratings, and trailers.\n Ratings and Reviews: Users can rate and review movies or TV shows, contributing to a community-driven feedback system. This feature enhances the overall user experience and helps others make informed decisions.\n API Integration: Utilizing the TMDB API (or similar APIs) to fetch and update movie and TV show data in real-time, ensuring that the content is always up-to-date.",
    gitHub: "https://github.com/Venkatesh3803/reactTMDBclone",
    liveProject: "https://tmdbclone2.netlify.app",
    technologies: "React Js",
  },
  {
    id: 2,
    image: dressup,
    title: "Dress Up",
    shortDesc:
      "Build a comprehensive and scalable e-commerce platform that offers a seamless shopping experience for users. This project will cover everything from user authentication to product management, cart functionality, The goal is to create a feature-rich application that showcases your proficiency in both front-end and back-end development.",
    description:
      "Dress Up is a complete e-commerce platform built with the MERN stack and Redux Toolkit, featuring product browsing, advanced search, category filtering, shopping cart, and checkout functionality.\n  Features \n Product Catalog: A well-organized catalog displaying various products with images, descriptions, pricing, and specifications.\n Shopping Cart: A virtual shopping cart to add and manage selected items before checkout, with quantity adjustments and removal options.\n State Management: Centralized application state managed with Redux Toolkit for predictable and scalable updates.\n User Authentication: Secure user registration and login to protect user data and enable personalized experiences.\n Responsive UI: Designed responsive interfaces with an optimized user experience across desktop and mobile devices.\n Order Processing: Integrated REST APIs for product catalog, cart management, and order processing.",
    gitHub: "https://github.com/Venkatesh3803/dressup-frontend",
    liveProject: "https://dress-up.onrender.com/",
    technologies: "MERN Stack | Redux Toolkit",
  },
  {
    id: 3,
    image: crowdfunding,
    title: "We The People",
    shortDesc:
      "Crowdfunding is the process of raising funds with the help of people across the country, using donation-based fundraising platforms as the medium.",
    description:
      "A full-stack crowdfunding platform enabling users to create, manage, and contribute to fundraising campaigns.\n Features \n Secure REST APIs: Designed secure REST APIs using Node.js and Express.js for authentication, campaign management, and contribution workflows.\n Authentication & Authorization: Implemented complete user authentication and authorization flows.\n Campaign Management: Full campaign CRUD operations so users can create, update, and manage fundraising campaigns.\n Responsive UI: Built responsive user interfaces using React.js.\n Optimized Database: Designed optimized MongoDB collections and backend architecture to efficiently manage users, campaigns, and contribution records.",
    gitHub: "https://github.com/Venkatesh3803/crowdfund-frontend",
    liveProject: "https://crowdfunding-b2f1.onrender.com/",
    technologies: "React | Node | Express | MongoDB",
  },
  {
    id: 4,
    image: writewave,
    title: "WriteWave (Bloging App)",
    shortDesc:
      "Develop a feature-rich blogging web application that allows users to create, edit, and share blog posts. The application should have a responsive and user-friendly interface, enabling seamless interaction for both content creators and readers",
    description:
      "WriteWave is a feature-rich blogging web application built with the MERN stack that allows users to create, edit, and share blog posts.\n Features \n Post Creation & Editing: Users can easily create, edit, and manage their blog posts.\n Responsive UI: A responsive and user-friendly interface enabling seamless interaction for both content creators and readers.\n Secure Backend: Node.js and Express.js REST APIs powering authentication and blog management.\n Data Storage: MongoDB collections structured to efficiently store users and posts.",
    gitHub: "https://github.com/Venkatesh3803/writewave_frontend",
    liveProject: "https://writewave-tk7r.onrender.com/",
    technologies: "MERN Stack",
  },
];

export default projectsData;
