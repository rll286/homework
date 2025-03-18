// Resume Download Tracker
let downloadCount = 0;

const resumeButton = document.getElementById("resumeBtn");
const downloadDisplay = document.getElementById("downloadCountDisplay");

resumeButton.addEventListener("click", () => {
  // Increment the count each time the user clicks to download
  downloadCount++;
  // Update the display on the page
  downloadDisplay.textContent = downloadCount;
});

// Skill Addition
const addSkillButton = document.getElementById("addSkillButton");
const skillList = document.getElementById("skillList");

addSkillButton.addEventListener("click", () => {
  const skillInput = document.getElementById("skillInput");
  const newSkill = skillInput.value.trim();

  if (newSkill !== "") {
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = newSkill;
    // Add it to our <ul> for skills
    skillList.appendChild(li);
    // Clear the input
    skillInput.value = "";
  }
});

// Project Loop
const projectsData = [
  {
    title: "Text Based RPG",
    description:
      "A console-based RPG featuring towns, inventory management, and more.",
    deadline: "2025-12-31", // Future date => should show "Ongoing"
  },
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Visual comparison of different sorting algorithms, built with Python & Pygame.",
    deadline: "2025-05-10", // Future date => should show "Ongoing"
  },
  {
    title: "Vector Average/Sum",
    description:
      "Project in C for summing and averaging vectors (discovering atan2).",
    deadline: "2023-01-01", // Past date => should show "Completed"
  },
];

// Insert project cards
const projectsContainer = document.getElementById("projectsContainer");

// Date comparison
const currentDate = new Date();

projectsData.forEach((project) => {
  // Create Bootstrap card
  const colDiv = document.createElement("div");
  colDiv.classList.add("col");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "custom-card", "h-100");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Project title
  const titleElement = document.createElement("h3");
  titleElement.classList.add("card-title");
  titleElement.textContent = project.title;

  // Project description
  const descElement = document.createElement("p");
  descElement.textContent = project.description;

  // Calculate status
  const deadlineDate = new Date(project.deadline);
  let statusText = "Completed";
  if (deadlineDate > currentDate) {
    statusText = "Ongoing";
  }
  const statusElement = document.createElement("p");
  statusElement.textContent = `Status: ${statusText}`;

  // Append everything
  cardBody.appendChild(titleElement);
  cardBody.appendChild(descElement);
  cardBody.appendChild(statusElement);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  projectsContainer.appendChild(colDiv);
});

// Dynamic Tables
const educationData = [
  {
    degree: "Software Engineering Major",
    institution: "Northern Arizona University",
    start: "2023",
    end: "2027",
  },
];

const experienceData = [
  {
    role: "Restaurant Service",
    company: "Various Employers",
    start: "2020",
    end: "2022",
  },
  {
    role: "Metal Band Frontman",
    company: "Local Gigs",
    start: "2019",
    end: "Present",
  },
];

/**
 * Creates a dynamic table and appends it to a container.
 * @param {string} containerId - The ID of the div to place the table in.
 * @param {Object[]} data - The data to populate the table rows.
 * @param {string[]} headers - The table column headers.
 */
function createTable(containerId, data, headers) {
  const container = document.getElementById(containerId);

  // Create the table
  const table = document.createElement("table");
  table.classList.add(
    "table",
    "table-striped",
    "table-bordered",
    "custom-table"
  );

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the tbody
  const tbody = document.createElement("tbody");
  data.forEach((entry) => {
    const row = document.createElement("tr");

    // The headers array determines the order
    headers.forEach((key) => {
      const td = document.createElement("td");
      // Convert the header text into a lowercase key
      const lowerKey = key.toLowerCase();

      switch (lowerKey) {
        case "degree":
          td.textContent = entry.degree;
          break;
        case "institution":
          td.textContent = entry.institution;
          break;
        case "start":
          td.textContent = entry.start;
          break;
        case "end":
          td.textContent = entry.end;
          break;
        case "role":
          td.textContent = entry.role;
          break;
        case "company":
          td.textContent = entry.company;
          break;
        default:
          td.textContent = "N/A";
      }

      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}

// Create the Education table
createTable("educationTableContainer", educationData, [
  "Degree",
  "Institution",
  "Start",
  "End",
]);

// Create the Experience table
createTable("experienceTableContainer", experienceData, [
  "Role",
  "Company",
  "Start",
  "End",
]);
