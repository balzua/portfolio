const projectHeader = `<h2>Projects</h2><nav>
            <ul>
              <li><a href="javascript:selectProject(0)">Game Deck</a></li>
              <li><a href="javascript:selectProject(1)">Travelogue</a></li>
              <li><a href="javascript:selectProject(2)">What to Watch</a></li>
            </ul>
          </nav><hr />
          <div class="project">
            <div class="project-info">
              <div class="project-heading">
                <div class="project-title">
                  <h3></h3>
                  <a href="#" class="demoLink" target="_blank">Demo</a> / 
                  <a href="#" class="githubLink" target="_blank">Github</a>
                </div>
                <div class="technologies">
                </div>
              </div>
              <p></p>
            </div>
            <div class="screenshot">
            </div>
          </div>
        </div>`;

const aboutHeader = `<h2>About Me</h2><hr />
<p>Although I've long considered myself to be tech-savvy, it wasn't until recently that I considered a career in the tech industry. In my professional career I've used my critical thinking skills to develop and troubleshoot biochemical experiments in the laboratory. I decided to learn coding and become a developer when I realized how I could combine the research and investigative style of problem solving I learned in the lab with my interest in technology and computers.</p>`;

let currentProject = 0;

const projects = [
  {
    name: "Game Deck",
    demo: "https://vast-shore-71046.herokuapp.com/",
    github: "https://github.com/balzua/game-deck",
    techs: ['html5', 'css3', 'node', 'react', 'redux', 'mongodb', 'heroku'],
    description: "This is a MERN stack application that allows a user to track their video game collection. Users can add games by searching a third-party API, then rate them from 1-5 stars and assign them to categories such as 'Wishlist' or 'Currently Playing'. They can also sort their collection, filter by video game platform, and see their taste in genres at a glance.",
    screenshot: 'game-deck.png'
  },
  {
    name: "Travelogue",
    demo: "https://balzua-travelogue.herokuapp.com/",
    github: "https://github.com/balzua/travelogue",
    techs: ['html5', 'css3', 'node', 'jquery', 'mongodb', 'heroku'],
    description: "A Node/Express app where users can keep track of their personal vacations and trips. You can add vacations or trips with specified dates and a location. Within each trip, you can add individual events to commemorate your travel. This project focused on creating a REST API, including test cases using Mocha and Chai.",
    screenshot: 'travelogue.png'
  },
  {
    name: "What to Watch",
    demo: "https://balzua.github.io/WhatToWatch/",
    github: "https://github.com/balzua/WhatToWatch",
    techs: ['html5', 'css3', 'jquery'],
    description: "A basic web app to display movie metadata such as release date, a description, and the cast. This app uses the Fetch API to search a movie database and Youtube to display movie information and the most popular matching video on Youtube.",
    screenshot: 'whattowatch.png'
  }
]

function showProjects() {
  $('a').removeClass('current-link');
  $('.content').html(projectHeader);
  $('a.projectsLink').addClass('current-link');
  selectProject(currentProject);
}

function selectProject(id) {
  currentProject = id;
  project = projects[id];
  $('.content').find('a').removeClass('current-link');
  $('.content').find(`a:contains(${project.name})`).addClass('current-link');
  $('.project-title').children('h3').text(project.name);
  $('.demoLink').attr('href', project.demo);
  $('.githubLink').attr('href', project.github);
  const techImgs = project.techs.map(tech => {
    return `<img src='assets/${tech}.svg' alt='${tech}'' title='${tech}' />`;
  })
  $('.technologies').html(techImgs.join(''));
  $('.screenshot').html(`<img src='assets/${project.screenshot}' alt="${project.name} screenshot" />`);
  $('.project').find('p').text(project.description);
}

function showAbout() {
  $('a').removeClass('current-link');
  $('a.aboutLink').addClass('current-link');
  $('.content').html(aboutHeader);
}
