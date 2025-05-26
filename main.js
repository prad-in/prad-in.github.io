const update_skills = () => {
  const skills_base_path = "/assets/skills";
  const skills_arr = [
    {
      id: 1,
      label: "Instruction Design",
      path: `${skills_base_path}/Instruction_Design.png`,
    },
    {
      id: 2,
      label: "UX Design",
      path: `${skills_base_path}/UI.png`,
    },
    {
      id: 3,
      label: "Web Development",
      path: `${skills_base_path}/Web_Development.png`,
    },
    {
      id: 4,
      label: "Trainer",
      path: `${skills_base_path}/Trainer.png`,
    },
  ];
  const skills_mapper = (skill, idx) =>
    `<div class="col-6 g-1">
            <div class="card text-center border-0">
                <img
                    src="${skill.path}"
                    class="img-thumbnail thumbsnails2x"
                    alt="${skill.label}"
                />
                <div class="card-body">
                <h4 class="card-title fw-bold">${skill.label}</h4>
                <!-- <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> -->
              </div>
            </div>
        </div>`;
  return updateDomHOF(skills_arr, skills_mapper);
};

const update_portfolio = () => {
  const portfolio_img_base_path = "/assets/portfolio";
  const portfolio_url_base_path = "https://prad-in.github.io";
  const portfolio_arr = [
    {
      id: 1,
      tag: "e-Learning",
      label: "Gamified app based on Nutrition",
      path: `${portfolio_img_base_path}/nutrition.png`,
      desc: `This interactive e-Learning module explores the vital role of gut microbiota in health and nutrition.`,
      url: `${portfolio_url_base_path}/nutrition/`,
    },
    {
      id: 2,
      tag: "e-Learning",
      label: "Hubble Telescope Visualization",
      path: `${portfolio_img_base_path}/telescope.png`,
      desc: `This multimedia module offers an engaging look at the Hubble Space Telescope, combining 3D visuals and interactivity.`,
      url: `${portfolio_url_base_path}/hubble/`,
    },
    {
      id: 3,
      tag: "e-Learning",
      label: "Cardiology observations using GIFs",
      path: `${portfolio_img_base_path}/cardiogram-heart-rate-svgrepo-com.svg`,
      desc: `This module demonstrates the use of GIFs in Articulate Rise to visually present cardiology concepts using Adobe Photostock images and videos.`,
      url: `${portfolio_url_base_path}/cardio/`,
    },
    {
      id: 4,
      tag: "Infographic",
      label: "How does a Solar Panel work?",
      path: `${portfolio_img_base_path}/solar-panel.png`,
      desc: `This visually engaging infographic illustrates how solar panels convert sunlight into electricity, simplifying complex processes.`,
      url: `${portfolio_img_base_path}/Solar_Panel_Infographic.png`,
    },
    {
      id: 5,
      tag: "UX Design",
      label: "Case Study - Wedding Checklist",
      path: `${portfolio_img_base_path}/wedding-checklist.png`,
      desc: `Dreams to Meet is a wedding planning app that helps users quickly create checklists and book vendors with ease. Designed with a user-friendly UX/UI.`,
      url: `${portfolio_img_base_path}/Wedding Ceremony Checklist App - Case Study.pdf`,
    },
  ];
  const portfolio_mapper = (portfolio, idx) =>
    `<div class="col-12 align-self-center border border-danger-subtle rounded mb-4 p-4">
        <a href="${portfolio.url}" target="_blank" class="">
            <div class="row">
                <div class="col align-self-center">
                <h6 class="text-uppercase">${portfolio.tag}</h6>
                <h4 class="fw-bold">${portfolio.label}</h4>
                <p class="">${portfolio.desc}</p>
                </div>
                <div class="col text-center">
                <img
                    src="${portfolio.path}"
                    class="img-thumbnail thumbsnails2x"
                    alt="..."
                />
                </div>
            </div>
        </a>
    </div>`;
  return updateDomHOF(portfolio_arr, portfolio_mapper);
};

const updateDomHOF = (arr, mapperFn) => {
  return arr.map(mapperFn).join("");
};

onDOMContentLoaded = (function () {
  document.getElementById("skill_row").innerHTML = update_skills();
  document.getElementById("portfolio_row").innerHTML = update_portfolio();
})();

onload = (function () {})();

onloadeddata = (function () {})();
