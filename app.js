$(document).ready(function () {
  // Dynamic Skills
  let skills = [];

  function renderSkills() {
    $("#skillList").empty();
    skills.forEach((skill, index) => {
      const listItem = $(`
        <li class="mb-2" data-index="${index}">
          <span class="skill-text">${skill}</span>
          <button class="btn btn-sm btn-outline-light ms-2 edit-skill">Edit</button>
          <button class="btn btn-sm btn-danger ms-2 delete-skill">Delete</button>
        </li>
      `).hide();
      $("#skillList").append(listItem);
      listItem.fadeIn(500);
    });
  }

  function addSkill(newSkill) {
    newSkill = newSkill.trim();
    if (newSkill === "" || skills.includes(newSkill)) return;
    skills.push(newSkill);
    renderSkills();
  }

  function deleteSkill(index) {
    $(`#skillList li[data-index="${index}"]`).slideUp(300, function () {
      skills.splice(index, 1);
      renderSkills();
    });
  }

  function editSkill(index) {
    const currentSkill = skills[index];
    const newName = prompt("Edit Skill:", currentSkill);
    if (newName !== null) {
      const trimmed = newName.trim();
      if (trimmed !== "") {
        skills[index] = trimmed;
        renderSkills();
      }
    }
  }

  $("#addSkillButton").click(function () {
    const skill = $("#skillInput").val();
    addSkill(skill);
    $("#skillInput").val("");
  });

  $("#skillInput").keydown(function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      $("#addSkillButton").click();
    } else if (e.key === "Escape") {
      $(this).val("");
    }
  });

  $("#skillList").on("click", ".delete-skill", function () {
    const index = $(this).closest("li").data("index");
    deleteSkill(index);
  });

  $("#skillList").on("click", ".edit-skill", function () {
    const index = $(this).closest("li").data("index");
    editSkill(index);
  });

  // Dynamic Navigation
  const navItems = [
    { label: "Introduction", target: "#summary" },
    { label: "Education", target: "#education" },
    { label: "Skills", target: "#skills" },
    { label: "Projects", target: "#projects" },
  ];

  function renderNav() {
    $("#dynamicNav").empty();
    navItems.forEach((item) => {
      const navItem = $(`
        <li class="nav-item">
          <a class="nav-link" href="${item.target}">${item.label}</a>
        </li>
      `);
      $("#dynamicNav").append(navItem);
    });
  }

  $("#dynamicNav").on("click", ".nav-link", function (e) {
    e.preventDefault();
    const targetSection = $(this).attr("href");
    $("html, body").animate(
      { scrollTop: $(targetSection).offset().top - 70 },
      600
    );
  });

  renderNav();

  // Projects Section
  let projects = [
    {
      title: "TextBasedRPG",
      description: "A console-based RPG featuring towns, inventory management, and more.",
      deadline: new Date("2025-12-31"),
      imageURL: "./Screenshot 2025-01-27 202906.png"
    },
    {
      title: "Sorting Algorithm Visualizer",
      description: "Visual comparison of different sorting algorithms, built with Python & Pygame.",
      deadline: new Date("2025-06-30"),
      imageURL: "./Screenshot 2025-01-27 203033.png"
    },
    {
      title: "Vector Average/Sum",
      description: "Project in C for summing and averaging vectors (showcasing atan2).",
      deadline: new Date("2024-01-15"),
      imageURL: "./Screenshot 2025-01-27 203402.png"
    }
  ];

  function renderProjects() {
    $("#projectsContainer").empty();
    const now = new Date();

    projects.forEach((project) => {
      // If the deadline is after "now," it's Ongoing; otherwise, Completed
      const dynamicStatus =
        project.deadline.getTime() > now.getTime() ? "Ongoing" : "Completed";

      const card = $(`
        <div class="col">
          <div class="card custom-card h-100">
            <img src="${project.imageURL}" class="card-img-top" alt="${project.title}" />
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <p class="card-text">Status: ${dynamicStatus}</p>
              <p class="card-text">
                <small>Deadline: ${project.deadline.toLocaleDateString()}</small>
              </p>
            </div>
          </div>
        </div>
      `).hide();
      $("#projectsContainer").append(card);
      card.fadeIn(500);
    });
  }

  $("#sortProjects").click(function () {
    projects.sort((a, b) => a.deadline - b.deadline);
    renderProjects();
  });

  renderProjects();

  // Dynamic Tables
  let educationData = [
    {
      degree: "Software Engineering Major",
      institution: "Northern Arizona University",
      start: "2023",
      end: "2027"
    }
  ];

  function renderEducationTable() {
    let table = $('<table class="custom-table"></table>');
    let thead = $(`
      <thead>
        <tr>
          <th>Degree</th>
          <th>Institution</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
    `);
    let tbody = $("<tbody></tbody>");
    educationData.forEach((edu) => {
      let row = $("<tr></tr>");
      row.append(`<td>${edu.degree}</td>`);
      row.append(`<td>${edu.institution}</td>`);
      row.append(`<td>${edu.start}</td>`);
      row.append(`<td>${edu.end}</td>`);
      tbody.append(row);
    });
    table.append(thead).append(tbody);
    $("#educationTableContainer").html(table);
  }

  let experienceData = [
    {
      role: "Restaurant Service",
      company: "Various Employers",
      start: "2020",
      end: "2022"
    },
    {
      role: "Metal Band Frontman",
      company: "Local Gigs",
      start: "2019",
      end: "Present"
    }
  ];

  function renderExperienceTable() {
    let table = $('<table class="custom-table"></table>');
    let thead = $(`
      <thead>
        <tr>
          <th>Role</th>
          <th>Company</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
    `);
    let tbody = $("<tbody></tbody>");
    experienceData.forEach((exp) => {
      let row = $("<tr></tr>");
      row.append(`<td>${exp.role}</td>`);
      row.append(`<td>${exp.company}</td>`);
      row.append(`<td>${exp.start}</td>`);
      row.append(`<td>${exp.end}</td>`);
      tbody.append(row);
    });
    table.append(thead).append(tbody);
    $("#experienceTableContainer").html(table);
  }

  renderEducationTable();
  renderExperienceTable();
});
