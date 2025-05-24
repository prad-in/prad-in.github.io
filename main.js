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
    `<div class="col-lg col-sm-6 mt-4">
            <div class="card">
                <img
                    src="${skill.path}"
                    class="img-thumbnail thumbsnails"
                    alt="${skill.label}"
                />
                <div class="card-body">
                <h5 class="card-title fw-bold">${skill.label}</h5>
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
      label: "Nutrition eLearning",
      path: `${portfolio_img_base_path}/nutrition.png`,
      desc: `This interactive eLearning module explores the vital role of gut microbiota in health and nutrition.`,
      url: `${portfolio_url_base_path}/nutrition/`,
    },
    {
      id: 2,
      label: "Hubble Telescope eLearning",
      path: `${portfolio_img_base_path}/telescope.png`,
      desc: `This multimedia module offers an engaging look at the Hubble Space Telescope, combining 3D visuals and interactivity.`,
      url: `${portfolio_url_base_path}/hubble/`,
    },
    {
      id: 3,
      label: "Cardiology eLearning",
      path: `${portfolio_img_base_path}/cardiogram-heart-rate-svgrepo-com.svg`,
      desc: `This module demonstrates the use of GIFs in Articulate Rise to visually present cardiology concepts using Adobe Photostock images and videos.`,
      url: `${portfolio_url_base_path}/cardio/`,
    },
    {
      id: 4,
      label: "Solar Panel eLearning",
      path: `${portfolio_img_base_path}/solar-panel.png`,
      desc: `This visually engaging infographic illustrates how solar panels convert sunlight into electricity, simplifying complex processes.`,
      url: `${portfolio_img_base_path}/Solar_Panel_Infographic.png`,
    },
    {
      id: 5,
      label: "UX Case Study - Wedding Checklist",
      path: `${portfolio_img_base_path}/wedding-checklist.png`,
      desc: `Dreams to Meet is a wedding planning app that helps users quickly create checklists and book vendors with ease. Designed with a user-friendly UX/UI.`,
      url: `${portfolio_img_base_path}/Wedding Ceremony Checklist App - Case Study.pdf`,
    },
  ];
  const portfolio_mapper = (portfolio, idx) =>
    `<div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">${portfolio.label}</h5>
                <img
                  src="${portfolio.path}"
                  class="img-thumbnail thumbsnails"
                  alt="..."
                />
                <p class="card-text">
                  ${portfolio.desc}
                </p>
              </div>
              <div class="card-footer text-center bg-white">
                <a
                  href="${portfolio.url}"
                  target="_blank"
                  class="btn btn-outline-dark mb-2"
                  >View Project</a
                >
              </div>
            </div>
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
