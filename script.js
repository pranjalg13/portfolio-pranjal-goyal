function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
    document.getElementById('github').style.fill="black";

  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById('github').style.fill="white";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById('github').style.fill="black";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
    document.getElementById('github').style.fill="white";
  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("blue");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: demoLink!=null ? "Live Demo" : ""
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
  {
    projectName: "Xmeme",
    projectDescription:
      "Xmeme is a meme streaming application which lets you post your faviorite memes with Name,URL and Caption.",
    projectImage: "images/xmeme.png",
    codeLink: "https://github.com/pranjalg13/Xmeme",
    demoLink: "null"
  },{
    projectName: "Contextual Chatbot",
    projectDescription:
      "A chatbot that can understand the question and answer intelligently.",
    projectImage: "images/chatbot.gif",
    codeLink: "https://github.com/pranjalg13/contextual-chatbot",
    demoLink: null
  },{
    projectName: "Space Explorer",
    projectDescription:
      "A Flutter application to explore our Solar Planet",
    projectImage: "images/space.png",
    codeLink: "https://github.com/pranjalg13/SpaceExploration",
    demoLink: "https://play.google.com/store/apps/details?id=com.brocodelabs.spaceexploration&hl=en&gl=US"
  },{
    projectName: "Hire Me",
    projectDescription:
      "HireMe is a one stop solution to hire people (Design)",
    projectImage: "images/hireme.webp",
    codeLink: "https://github.com/priyanks25coder/hackathon2022",
    demoLink: null
  },
  {
    projectName: "Fake News Detection",
    projectDescription:
      "A webapp that can detect Fake News with the help of AI",
    projectImage: "images/fakenews.jpeg",
    codeLink: "https://github.com/pranjalg13/fake-news-detection",
    demoLink: null
  },{
    projectName: "Password Strength Tester",
    projectDescription:
      "Designed & Built the Password Strength Tester using React-Hooks and 'zxcvbn' package.",
    projectImage: "images/password.png",
    codeLink: "https://github.com/pranjalg13/password-strength",
    demoLink: "https://github.com/pranjalgoyal/password-strength-validator"
  }
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();

