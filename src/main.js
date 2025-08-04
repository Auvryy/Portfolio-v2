// import { workContent, educationContent} from "./data.js";
addEventListener('DOMContentLoaded', () => {

  generateExp(workContent)
})

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
  generateExp(educationContent)
});

const workContent = [
  {
    name: "Krusty Krab",
    yearStart: 2018,
    yearEnd: 2022,
    picture: "./src/images/andy.png",
    description: "Information Consultant Pro",
  },

  {
    name: "Gugelu",
    yearStart: 2022,
    yearEnd: 2025,
    picture: "./src/images/andy.png",
    description: "Ultra Duper Software Dev",
  },
];

const educationContent = [
  {
    name: 'LSPU',
    yearStart: 2024,
    yearEnd: 2025,
    picture: './src/images/andy.png',
    description: 'College degree: Information Technology'
  },

  {
    name: 'Lico De Victoria',
    yearStart: 2021,
    yearEnd: 2024,
    picture: './src/images/andy.png',
    description: 'Senior High School'
  },

  { 
    name: 'Liceo De Victoria',
    yearStart: 2017,
    yearEnd: 2024,
    picture: './src/images/andy.png',
    description: 'High School'
  }
]



const generateExp = (object) => {
  const experienceContent = document.getElementById("experience-content");
  experienceContent.innerHTML = ''
  for (let i = 0; i < object.length; i++) {
    const experienceBlock = document.createElement("section");
    experienceBlock.classList.add("flex", 'items-center', 'justify-between', 'gap-x-6');
    experienceBlock.innerHTML = `
            <div class="flex items-center gap-x-2 w-full">
              <img class="w-16 rounded-full hidden sm:block" src="${object[i].picture}" alt="">
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

//  const canvas = document.getElementById('starCanvas');
//     const ctx = canvas.getContext('2d');

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }

//     window.addEventListener('resize', resizeCanvas);
//     resizeCanvas();  // Initial sizing

//     const numberOfStars = 500;
//     const stars = [];

//     function createStars() {
//       for (let i = 0; i < numberOfStars; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           radius: Math.random() * 1.5
//         });
//       }
//     }

//     function drawStars() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let star of stars) {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//       }
//     }

//     createStars();
//     drawStars();

//     function toggleBox() {
//       const box = document.getElementById('box');
//       box.style.display = (box.style.display === 'none') ? 'block' : 'none';
//     }

