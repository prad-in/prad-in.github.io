const { createApp, ref, onMounted, onUnmounted } = Vue;

createApp({
  setup() {
    // --- State Variables ---
    const theme = ref("light");
    const isMenuOpen = ref(false);
    const activeSection = ref("home");
    const scrollProgress = ref(0);
    const showModal = ref(false);
    const showBackToTop = ref(false);
    const selectedProject = ref(null);
    const portfolio_img_base_path = "/assets/portfolio";

    // --- Data: Steps ---
    const steps = [
      {
        title: "Analyze",
        desc: "Identifying performance gaps and learner needs.",
        icon: "bi-search",
      },
      {
        title: "Design",
        desc: "Prototyping iterative solutions and storyboards.",
        icon: "bi-bezier2",
      },
      {
        title: "Evaluate",
        desc: "Measuring ROI through Kirkpatrick’s levels.",
        icon: "bi-bar-chart",
      },
    ];

    // --- Data: AI Tools ---
    const aiTools = [
      {
        name: "ChatGPT / GPT-4",
        desc: "Scenario scripting & assessments",
        icon: "bi-robot",
      },
      {
        name: "Midjourney",
        desc: "Custom asset generation",
        icon: "bi-palette2",
      },
      {
        name: "Synthesia",
        desc: "AI Avatars for video learning",
        icon: "bi-person-video",
      },
      {
        name: "Zapier",
        desc: "Automating L&D workflows",
        icon: "bi-lightning-charge",
      },
    ];

    // --- Data: Core Tools ---
    const tools = [
      {
        category: "Authoring",
        color: "var(--color-pink)",
        icon: "bi-layers-fill",
        items: [
          { name: "Storyline 360", icon: "bi-journal-richtext" },
          { name: "Rise 360", icon: "bi-tablet-landscape" },
          { name: "Captivate", icon: "bi-play-circle-fill" },
        ],
      },
      {
        category: "LMS & Agile",
        color: "var(--color-teal)",
        icon: "bi-hdd-network-fill",
        items: [
          { name: "JIRA", icon: "devicon-jira-plain" },
          { name: "Canvas", icon: "bi-mortarboard" },
          { name: "SCORM Cloud", icon: "bi-cloud-check-fill" },
        ],
      },
    ];

    // --- Data: Techniques ---
    const techniques = [
      {
        title: "Microlearning",
        desc: "Bite-sized content for better retention.",
      },
      {
        title: "Gamification",
        desc: "Points, badges, and leaderboards to drive engagement.",
      },
      {
        title: "xAPI / LRS",
        desc: "Tracking learning experiences beyond the LMS.",
      },
      {
        title: "Adaptive Learning",
        desc: "Personalized pathways based on learner performance.",
      },
      {
        title: "Mobile-First",
        desc: "Responsive design for learning on the go.",
      },
      {
        title: "Scenario-Based",
        desc: "Real-world problem solving simulations.",
      },
    ];

    // --- Data: Projects ---
    const portfolio_url_base_path = "https://prad-in.github.io";
    const projects = [
      {
        title: "Gamified Nutrition App",
        desc: "This interactive e-Learning module explores the vital role of gut microbiota in health and nutrition.",
        image: `${portfolio_img_base_path}/nutrition.png`,
        badge: "Storyline",
        badgeIcon: "bi-journal-richtext",
        theme: "pink",
        tags: ["Gamification", "Scenario-Based"],
        url: `${portfolio_url_base_path}/nutrition/`,
      },
      {
        title: "Hubble Telescope Visualization",
        desc: "This multimedia module offers an engaging look at the Hubble Space Telescope, combining 3D visuals and interactivity.",
        image: `${portfolio_img_base_path}/telescope.png`,
        badge: "Rise 360",
        badgeIcon: "bi-tablet-landscape",
        theme: "orange",
        tags: ["Mobile-First", "Onboarding"],
        url: `${portfolio_url_base_path}/hubble/`,
      },
      {
        title: "Cardiology observations using GIFs",
        desc: "This module demonstrates the use of GIFs in Articulate Rise to visually present cardiology concepts using Adobe Photostock images and videos.",
        image: `${portfolio_img_base_path}/cardiogram-heart-rate-svgrepo-com.svg`,
        badge: "Video",
        badgeIcon: "bi-camera-reels",
        theme: "purple",
        tags: ["Animation", "Scriptwriting"],
        url: `${portfolio_url_base_path}/cardio/`,
      },
      {
        title: "How does a Solar Panel work?",
        desc: "An infographic that illustrates how solar panels convert sunlight into electricity, simplifying complex processes.",
        image: `${portfolio_img_base_path}/Solar_Panel_Infographic.png`,
        badge: "Infographic",
        badgeIcon: "bi-camera-reels",
        theme: "teal",
        tags: ["Animation", "Scriptwriting"],
        url: `${portfolio_img_base_path}/Solar_Panel_Infographic.png`,
      },
      {
        title: "Wedding Checklist App",
        desc: "Dreams to Meet is a wedding planning app that helps users quickly create checklists and book vendors with ease. Designed with a user-friendly UX/UI.",
        image: `${portfolio_img_base_path}/wedding-checklist.png`,
        badge: "UX",
        badgeIcon: "bi-camera-reels",
        theme: "pink",
        tags: ["Animation", "Scriptwriting"],
        url: `${portfolio_img_base_path}/Wedding Ceremony Checklist App - Case Study.pdf`,
      },
    ];

    // --- Actions ---
    const toggleTheme = () => {
      theme.value = theme.value === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme.value);
    };
    const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
    const closeMenu = () => (isMenuOpen.value = false);

    const openProject = (p) => {
      selectedProject.value = p;
      showModal.value = true;
      document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
      showModal.value = false;
      document.body.style.overflow = "auto";
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      scrollProgress.value = (scrollTop / docHeight) * 100;
      showBackToTop.value = scrollTop > 300;
    };

    // --- Lifecycle Hooks ---
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              if (entry.target.tagName === "SECTION")
                activeSection.value = entry.target.id;
            }
          });
        },
        { threshold: 0.2 }
      );

      document
        .querySelectorAll("section, .reveal")
        .forEach((el) => observer.observe(el));
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    // --- Return Data to Template ---
    return {
      theme,
      isMenuOpen,
      activeSection,
      scrollProgress,
      showModal,
      showBackToTop,
      selectedProject,
      steps,
      aiTools,
      tools,
      techniques,
      projects,
      toggleTheme,
      toggleMenu,
      closeMenu,
      openProject,
      closeModal,
      scrollToTop,
    };
  },
}).mount("#app");
