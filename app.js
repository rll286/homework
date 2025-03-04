console.log('Hello World!');

let hasDownloadedResume = false;
let oneDay = 1000 * 60 * 60 * 24;
let presentDate = new Date();
let projectDate = new Date(2025, 2, 11);
const name = "Randy Limon";


function resumeClick() {
    if (hasDownloadedResume == false) {
        alert("Your resume is downloaded successfully!");
    }
    hasDownloadedResume = true;
}

function showGreeting() {
    document.getElementById("welcome").innerHTML = "Hello, my name is " + name + "! Welcome to my portfolio!";
}

function daysUntilDeadline(deadline) {
    return Math.round((deadline.getTime() - presentDate.getTime()) /oneDay).toFixed(0);
}

document.getElementById("resumeBtn").addEventListener("click", resumeClick());
document.addEventListener("load", showGreeting());
document.getElementById("project").innerHTML = daysUntilDeadline(projectDate) + " days until next update.";