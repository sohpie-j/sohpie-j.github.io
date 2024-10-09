// const projects = {
//     webprogramming: [
//         {
//             title: "Interactive Web App",
//             description: "A dynamic web application showcasing modern JavaScript features and responsive design.",
//             features: ["Utilizes ES6+ syntax", "Implements async/await for API calls", "Responsive layout using CSS Grid and Flexbox"]
//         },
//         {
//             title: "Node.js Backend Service",
//             description: "A robust backend service built with Node.js and Express, featuring RESTful API endpoints.",
//             features: ["MongoDB integration for data persistence", "JWT authentication", "Websocket support for real-time updates"]
//         }
//     ],
//     database: [
//         {
//             title: "Data Analysis Tool",
//             description: "A Python-based tool for analyzing and visualizing large datasets.",
//             features: ["Pandas and NumPy for data manipulation", "Matplotlib and Seaborn for visualization", "Jupyter Notebook integration"]
//         },
//         {
//             title: "Machine Learning Model",
//             description: "An implementation of a machine learning model for predictive analysis.",
//             features: ["Scikit-learn for model training and evaluation", "TensorFlow for deep learning capabilities", "Custom data preprocessing pipeline"]
//         }
//     ],
//     java: [
//         {
//             title: "Android Mobile App",
//             description: "A feature-rich Android application developed using Java and Android SDK.",
//             features: ["Material Design UI components", "SQLite database for local storage", "Integration with device sensors"]
//         },
//         {
//             title: "Spring Boot Microservice",
//             description: "A scalable microservice built with Spring Boot, demonstrating enterprise-level Java development.",
//             features: ["RESTful API design", "Spring Security for authentication", "JUnit and Mockito for comprehensive testing"]
//         }
//     ]
// };

// let currentTab = 'webprogramming';
// let currentIndex = 0;

// document.querySelectorAll('.tab-button').forEach(button => {
//     button.addEventListener('click', () => {
//         currentTab = button.dataset.tab;
//         currentIndex = 0;
//         updateProjectDisplay();

//         // Deactivate all tabs
//         document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        
//         // Activate the clicked tab
//         button.classList.add('active');
//     });
// });

// document.getElementById('prevButton').addEventListener('click', () => {
//     currentIndex = (currentIndex === 0) ? projects[currentTab].length - 1 : currentIndex - 1;
//     updateProjectDisplay();
// });

// document.getElementById('nextButton').addEventListener('click', () => {
//     currentIndex = (currentIndex === projects[currentTab].length - 1) ? 0 : currentIndex + 1;
//     updateProjectDisplay();
// });

// function updateProjectDisplay() {
//     const project = projects[currentTab][currentIndex];
//     const projectDisplay = document.getElementById('project-display');
//     projectDisplay.innerHTML = `
//         <div class="project">
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//             <ul class="key-features">
//                 ${project.features.map(feature => `<li>${feature}</li>`).join('')}
//             </ul>
//         </div>
//     `;
// }

// // Initial display
// updateProjectDisplay();

const projects = {
    webprogramming: [
        {
            title: "Online Food Recipe Website",
            description: "An interactive web application that allows users to register, log in, and store their own recipes.",
            date: "Completed: July 2024",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
            image: "images/myfoodrecipe.png",
            features: [
                "User registration and login",
                "Storing individual recipes",
                "Responsive layout using CSS Grid and Flexbox",
                "Interactive forms for recipe input",
                "Recipe search and filtering",
                "Real-time updates using JavaScript"
            ]
        },
        {
            title: "Registration Form",
            description: "Registration form for collecting user's information.",
            date: "Completed: May 2023",
            technologies: ["HTML", "CSS"],
            image: "image/registration.png",
            features: ["Grid, Span, Form, Table", "CSS", "Input for textarea"]
        },

        {
            title: "Interactive Webpage",
            description: "Two web pages for introducing the author's hometown.",
            date: "Completed: April 2024",
            technologies: ["HTML"],
            image: "image/homeplace.png",
            features: ["linking two html", "making the form for text input", "Responsive layout using CSS Grid and Flexbox"]
        }
    ],
    database: [
        {
            title: "Machanic Mangement System",
            description: "Relationa-based SQL for managing the services datasets for customers.",
            date: "Completed: May 2023",
            technologies: ["pgAdmin4"],
            image: "image/mechanic.png",
            features: ["Pandas and NumPy for data manipulation", "Matplotlib and Seaborn for visualization", "Jupyter Notebook integration"]
        },
        {
            title: "Hotel Booking Management System",
            description: "An implementation of Hotel Booking Management System.",
            date: "Completed: July 2023",
            technologies: ["ACCESS", "SQL Server Management System"],
            image: "image/hotelbooking.png",
            features: ["Scikit-learn for model training and evaluation", "TensorFlow for deep learning capabilities", "Custom data preprocessing pipeline"]
        }
    ],
    java: [
        {
            title: "Event Scheduler",
            description: "Implementing the Event Schedulling device using Java.",
            date: "Completed: April 2024",
            technologies: ["Java"],
            image: "image/Event.png",
            features: ["Inheritances, Overriding", "Capsulation"]
        },
        {
            title: "Smart Device Controller",
            description: "A scalable microservice built with Spring Boot, demonstrating enterprise-level Java development.",
            date: "Completed: May 2024",
            technologies: ["Java", "JUnit"],
            image: "image/smartRun.png",
            features: ["Inheritances", "Abstraction", "Capsulation", "Polymorphism"]
        }
    ]
};

let currentTab = 'webprogramming';
let currentIndex = 0;

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        currentTab = button.dataset.tab;
        currentIndex = 0;
        updateProjectDisplay();

        // Deactivate all tabs
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        
        // Activate the clicked tab
        button.classList.add('active');
    });
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? projects[currentTab].length - 1 : currentIndex - 1;
    updateProjectDisplay();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex === projects[currentTab].length - 1) ? 0 : currentIndex + 1;
    updateProjectDisplay();
});

function updateProjectDisplay() {
    const project = projects[currentTab][currentIndex];
    const projectDisplay = document.getElementById('project-display');
    projectDisplay.innerHTML = `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>${project.date}</strong></p>
            <img src="${project.image}" alt="${project.title}">
            <h4>Technologies Used:</h4>
            <ul class="technologies">
                ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <h4>Key Features:</h4>
            <ul class="key-features">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Initial display
updateProjectDisplay();
