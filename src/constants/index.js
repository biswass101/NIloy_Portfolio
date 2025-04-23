import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mahin,
    blog,
    task_manager_proj
} from "../assets";

import web_dev from "../assets/web_dev.png"
import webApllication from "../assets/webApllication.png"
import backendDev from "../assets/backendDev.png"

import noticeManagement from '../assets/workedOn/noticeManagement.png'
import expenseTracker from '../assets/workedOn/expenseTracker.png'
import fullStack from '../assets/workedOn/fullStack.png'

import Notice_Management from '../assets/projectImages/Notice_Management.png'
import food_village from '../assets/projectImages/food_village.png'
import newJrGym from '../assets/projectImages/newJrGym.png'
import expense_tracker from '../assets/projectImages/expense_tracker.png'
import ecom from '../assets/ecom.png'

import nextjs from '../assets/Next.js.png'
import expressJs from '../assets/express.png'
import typeScript from '../assets/typeScript.png'

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web_dev,
    },
    {
        title: "Web Application Developer",
        icon: webApllication,
    },
    {
        title: "Backend Developer",
        icon: backendDev,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express Js",
        icon: expressJs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Notice Management Project",
        icon: noticeManagement,
        iconBg: "#383E56",
        date: "Nov 2024 - Dec 2024",
        points: [
            "Developed the frontend using React.js, ensuring a smooth and responsive UI.",
            "Collaborated with a backend developer and UI designer to create a fully functional system in just one month.",
            "Gained hands-on experience in REST API integration, improving data flow and efficiency.",
            "Focused on designing an engaging and user-friendly interface, enhancing usability.",
            "Strengthened team collaboration and project management skills while working on a tight deadline."
        ],
    },
    {
        title: "Web Application Developer",
        company_name: "Expense Tracker App",
        icon: expenseTracker,
        iconBg: "#E6DEDD",
        date: "Jul 2024 - Aug 2024",
        points: [
            "Built a web application with React.js under the guidance of Anurag Sing Sir from Anurag Sing Procodrr YouTube channel.",
            "Gained strong fundamentals in React and JavaScript, including form validation, conditional rendering, and state management.",
            "Implemented dynamic functionalities to track and manage expenses efficiently.",
            "Though the design wasn't perfect, the application successfully performed its intended job.",
            "Strengthened problem-solving skills by working on real-world React.js challenges."
        ],
    },
    {
        title: "Web Developer",
        company_name: "Ecommerce and Gym Service website",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jul 2024 - Aug 2024",
        points: [
            "Developed an eCommerce web application using React.js with raw CSS for styling.",
            "Created a gym service website using React.js with a focus on animations.",
            "Learned about layout responsiveness and how to manage complex eCommerce structures.",
            "Gained practical experience in interactive UI design and smooth motion effects.",
            "Faced challenges in UI design but improved skills in styling and structuring web pages.",
            "The ecommerce project is ongoing, and I plan to integrate backend technologies in the future.",
            "This gym service project was a fun and creative experience, strengthening my frontend development skills."
        ],
    },
    {
        title: "Full stack Developement(In Progress)",
        company_name: "Learning Backend Tecnologies",
        icon: fullStack,
        iconBg: "#E6DEDD",
        date: "Jan 2024 - Present",
        points: [
            "Currently learning Node.js, Express.js, and MongoDB to build robust backend systems.",
            "Gaining hands-on experience in database management, CRUD operations, and API development.",
            "Understanding server-side validation and server creation to improve application performance.",
            "Working towards building a fully functional full-stack project soon.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Niloy proved me wrong.",
        name: "Touhidur Rahman Mahin",
        designation: "UI/UX Designer",
        company: "UAPP",
        image: mahin,
    },
    
];

const projects = [
    {
        name: "Personal Blog",
        description:
        "A full stack project on personal blog application. Where a person can create, read, upate and delete blogs",
        tags: [
            {
                name: "react js",
                color: "blue-text-gradient",
            },
            {
                name: "vanila css",
                color: "green-text-gradient",
            },
            {
                name: "node js",
                color: "blue-text-gradient",
            },
            {
                name: "Mongo DB",
                color: "green-text-gradient",
            },

        ],
        image: blog,
        source_code_link: "https://github.com/biswass101/blog_site",
        live_link: "https://blogshow-mset.onrender.com/"
    },
    {
        name: "Tech E-commerce",
        description:
        `A full stack project on Tech E-commerce website. Where a buyer can choose proududs and create carts with products, 
        buy products, order products`,
        tags: [
            {
                name: "Next js",
                color: "green-text-gradient",
            },
            {
                name: "taiwind css",
                color: "blue-text-gradient",
            },
            {
                name: "node js",
                color: "green-text-gradient",
            },
            {
                name: "Mongo DB",
                color: "green-text-gradient",
            },

        ],
        image: ecom,
        source_code_link: "https://github.com/biswass101/Ecommerce-return-hex-client",
        live_link: "https://ecommerce-return-hex-client-r4ypg3tjq.vercel.app/"
    },
    {
        name: "Notice Management",
        description:
        "The Notice Management System is a React.js-based web app where students can log in to view class notices like assignments, schedules, and test dates, while also submitting feedback. This project strengthened my skills in UI design, REST API integration, and teamwork.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "SQL",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "Django",
                color: "blue-text-gradient",
            },
        ],
        image: Notice_Management,
        source_code_link: "https://github.com/biswass101/Notice_Management_System",
        live_link: ""
    },
    {
        name: "Tomatto Food Village",
        description:
        "The Food Ordering eCommerce Website is a web application that allows users to search for food, place orders, and have meals delivered seamlessly. Designed for a smooth user experience, the platform ensures easy navigation, efficient order processing, and a reliable delivery system.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "node js",
                color: "pink-text-gradient",
            },
        ],
        image: food_village,
        source_code_link: "https://github.com/biswass101/React_Food_ecommerce_project",
        live_link: "https://tomatto-food-village.vercel.app/"
    },
    {
        name: "New JR GYM",
        description:
        "This Gym Services Website is a web-based platform where customers can explore and purchase gym plans, as well as access information about gym trainers and activities. The website provides a seamless user experience, allowing users to make informed decisions about their fitness journey.",
        tags: [
            {
                name: "react js",
                color: "blue-text-gradient",
            },
            {
                name: "vanila css",
                color: "green-text-gradient",
            },
            {
                name: "animation",
                color: "pink-text-gradient",
            },
        ],
        image: newJrGym,
        source_code_link: "https://github.com/biswass101/REACT_Gym_Website_NJRG",
        live_link: "https://new-jr-gym.vercel.app/"
    },
    {
        name: "Expense Tracker",
        description:
        "Expense tracker app can calculate the purchased products total  price and sort the list according to the price. Item can be edited and deleted",
        tags: [
            {
                name: "react js",
                color: "blue-text-gradient",
            },
            {
                name: "vanila css",
                color: "green-text-gradient",
            },
        ],
        image: expense_tracker,
        source_code_link: "https://github.com/biswass101/REACT_Expense_Tracker",
        live_link: "https://expense-tracker-theta-ecru.vercel.app/"
    },
    {
        name: "Task Manager",
        description:
        "The Task Manager App is a simple yet powerful web application developed using HTML, CSS, and JavaScript. It allows users to efficiently manage their daily tasks by providing features such as adding, editing, deleting, and clearing tasks. The app includes real-time keyword search, task filtering based on priority (high, medium, low) and status (pending, completed), as well as sorting functionality by due date and priority. Designed with a clean and responsive UI, this tool helps users stay organized and boost productivity in their day-to-day workflow.",
        tags: [
            {
                name: "vanila js",
                color: "blue-text-gradient",
            },
            {
                name: "vanila css",
                color: "green-text-gradient",
            },
        ],
        image: task_manager_proj,
        source_code_link: "https://github.com/biswass101/Task_Manager_with_raw_technologies",
        live_link: "https://task-manager-rr.netlify.app/"
    },
    
];

export { navLinks, services, technologies, experiences, testimonials, projects };