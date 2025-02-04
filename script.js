// Preloader Animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

// Sidebar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const sidebarOverlay = document.getElementById("sidebarOverlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  sidebarOverlay.style.display = navLinks.classList.contains("active")
    ? "block"
    : "none";
});

sidebarOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  sidebarOverlay.style.display = "none";
});

// Scroll Animations with GSAP
gsap.registerPlugin(ScrollTrigger);

// Header Animation
gsap.from(".header", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

// About Section Animation
gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

// Skills Section Animation
gsap.from(".skills", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  x: -50,
  duration: 1,
});

// Parallax Effect for Header
gsap.to(".header", {
  scrollTrigger: {
    trigger: ".header",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  backgroundPosition: "center 120%",
});

// Bar Chart
const barCtx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Python", "SQL", "Tableau", "Power BI", "Machine Learning"],
    datasets: [
      {
        label: "Skill Level (1-10)",
        data: [9, 8, 7, 6, 5],
        backgroundColor: [
          "#d8b4f8",
          "#fbc7d4",
          "#6c5ce7",
          "#4a47a3",
          "#ff9f43",
        ],
        borderColor: ["#d8b4f8", "#fbc7d4", "#6c5ce7", "#4a47a3", "#ff9f43"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  },
});

// Radar Chart
const radarCtx = document.getElementById("radarChart").getContext("2d");
const radarChart = new Chart(radarCtx, {
  type: "radar",
  data: {
    labels: [
      "Data Cleaning",
      "Visualization",
      "Modeling",
      "Reporting",
      "Analysis",
    ],
    datasets: [
      {
        label: "Skill Distribution",
        data: [8, 7, 6, 5, 9],
        backgroundColor: "rgba(108, 92, 231, 0.2)",
        borderColor: "#6c5ce7",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

// Pie Chart
const pieCtx = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["Data Cleaning", "Visualization", "Modeling", "Reporting"],
    datasets: [
      {
        label: "Experience Distribution",
        data: [40, 30, 20, 10],
        backgroundColor: ["#d8b4f8", "#fbc7d4", "#6c5ce7", "#4a47a3"],
        borderColor: ["#d8b4f8", "#fbc7d4", "#6c5ce7", "#4a47a3"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
