const sections = document.querySelector(".sections");
const simpleCont = document.querySelector(".simple-content");
const speedyCont = document.querySelector(".speedy-content");
const easyCont = document.querySelector(".easy-content");
const simpleBtn = document.querySelector(".simple-btn");
const speedyBtn = document.querySelector(".speedy-btn");
const easyBtn = document.querySelector(".easy-btn");
const line = document.querySelectorAll(".line");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".fa-chevron-down");
const burger = document.querySelector(".open-bar");
const close = document.querySelector(".close-bar");
const navBar = document.querySelector(".nav-bar");

sections.addEventListener("click", (e) => {
  if (e.target.classList.contains("simple-btn")) {
    simpleCont.classList.add("active");
    speedyCont.classList.remove("active");
    easyCont.classList.remove("active");
    simpleBtn.style.color = "hsl(229, 31%, 21%)";
    speedyBtn.style.color = "hsl(229, 8%, 60%)";
    easyBtn.style.color = "hsl(229, 8%, 60%)";
    line[0].style.opacity = 1;
    line[1].style.opacity = 0;
    line[2].style.opacity = 0;
  }
  if (e.target.classList.contains("speedy-btn")) {
    simpleCont.classList.remove("active");
    speedyCont.classList.add("active");
    easyCont.classList.remove("active");
    simpleBtn.style.color = "hsl(229, 8%, 60%)";
    speedyBtn.style.color = "hsl(229, 31%, 21%)";
    easyBtn.style.color = "hsl(229, 8%, 60%)";
    line[0].style.opacity = 0;
    line[1].style.opacity = 1;
    line[2].style.opacity = 0;
  }
  if (e.target.classList.contains("easy-btn")) {
    simpleCont.classList.remove("active");
    speedyCont.classList.remove("active");
    easyCont.classList.add("active");
    simpleBtn.style.color = "hsl(229, 8%, 60%)";
    speedyBtn.style.color = "hsl(229, 8%, 60%)";
    easyBtn.style.color = "hsl(229, 31%, 21%)";
    line[0].style.opacity = 0;
    line[1].style.opacity = 0;
    line[2].style.opacity = 1;
  }
});

questions.forEach((question, i) => {
  question.addEventListener("click", () => {
    arrow[i].classList.toggle("active");
    answers[i].classList.toggle("active");
  });
});

burger.addEventListener("click", () => {
  navBar.style.transform = "translateY(0%)";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  navBar.style.transform = "translateY(-200%)";
  document.body.style.overflow = "unset";
});
