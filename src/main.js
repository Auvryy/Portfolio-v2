// import { workContent, educationContent} from "./data.js";
addEventListener("DOMContentLoaded", () => {
  generateExp(workContent);
});

const workBtn = document.getElementById("work-button");
const educationBtn = document.getElementById("education-button");

workBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!workBtn.classList.contains("selected-experience")) {
    workBtn.classList.add("selected-experience");
    educationBtn.classList.remove("selected-experience");
  }
  generateExp(workContent);
});

educationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!educationBtn.classList.contains("selected-experience")) {
    educationBtn.classList.add("selected-experience");
    workBtn.classList.remove("selected-experience");
  }
  generateExp(educationContent);
});

const workContent = [
  {
    name: "Krusty Krab",
    yearStart: 2018,
    yearEnd: 2022,
    picture: "./src/images/krusty_krab.jpg",
    description: "Information Consultant Pro",
  },

  {
    name: "Burnin' Kush",
    yearStart: 2022,
    yearEnd: 2025,
    picture: "./src/images/burnin_kush.jpg",
    description: "Ultra Duper Software Dev",
  },
];

const educationContent = [
  {
    name: "LSPU",
    yearStart: 2024,
    yearEnd: 2025,
    picture: "./src/images/lspu.jpeg",
    description: "College degree: Information Technology",
  },

  {
    name: "Lico De Victoria",
    yearStart: 2021,
    yearEnd: 2024,
    picture: "./src/images/ldv.jpeg",
    description: "Senior High School",
  },

  {
    name: "Liceo De Victoria",
    yearStart: 2017,
    yearEnd: 2024,
    picture: "./src/images/ldv.jpeg",
    description: "High School",
  },
];

const generateExp = (object) => {
  const experienceContent = document.getElementById("experience-content");
  experienceContent.innerHTML = "";
  for (let i = 0; i < object.length; i++) {
    const experienceBlock = document.createElement("section");
    experienceBlock.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "gap-x-6"
    );
    experienceBlock.innerHTML = `
            <div class="flex items-center gap-x-2 w-full">
              <img class="w-16 h-16 object-cover rounded-full hidden sm:block" src="${object[i].picture}" alt="">
              <div>
                <p class="font-semibold">${object[i].name}</p>
                <p class="text-hover">${object[i].yearStart} - ${object[i].yearEnd}</p>
              </div>
            </div>
            <div class="text-start w-full">
              ${object[i].description}
            </div>
    `;

    experienceContent.appendChild(experienceBlock);
  }
  console.log("done");
};

const generateProject = (object) => {
  const projectContainer = document.getElementById('project-container')
  projectContainer.innerHTML = ''
  for (let i = 0; i < object.length; i++) {
    const projectCard = document.createElement('div')
    
  }
}








const cursorStar = document.getElementById("cursor-star");

let mouseX = 0,
  mouseY = 0;
let starX = 0,
  starY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateStar() {
  starX += (mouseX - starX) * 0.12;
  starY += (mouseY - starY) * 0.12;

  cursorStar.style.transform = `translate3d(${starX - 10}px, ${starY - 10}px, 0)`;

  requestAnimationFrame(animateStar);
}

animateStar();

//click to scroll
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')

const projectSection = document.getElementById('projects-section')
const contactsSection = document.getElementById('contacts-section')

projectsBtn.addEventListener('click', () => {
  projectSection.scrollIntoView({behavior: 'smooth'})
});

contactsBtn.addEventListener('click', () => {
  contactsSection.scrollIntoView({behavior: 'smooth'})
})

//animation scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-show')
    } 
    // else {
    //   entry.target.classList.remove('scroll-show')
    // }
  })
})

const hiddenElements = document.querySelectorAll('.scroll-hidden')
hiddenElements.forEach((el) =>  observer.observe(el))