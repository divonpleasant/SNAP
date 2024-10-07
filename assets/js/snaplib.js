const version = "3.0.26";
const curr_date = new Date();
const utc_year = curr_date.getUTCFullYear();
const project_home = "https://github.com/divonpleasant/SNAP"

// Message formatting
underline = "=".repeat(version.length + 5);

// Startup Message
startup_message = `
SNAP ${version}
${underline}
Copyright Zeiss Meditec ${utc_year}
Originally developed by Divon Pleasant (divon.pleasant@zeiss.com)

Please see ${project_home} for complete documentation, bug reporting, and code contributions.
`;
console.log(startup_message);

// Page outputs
document.getElementById("current-version").innerHTML = version;
document.getElementById("copyright-year").innerHTML = utc_year;
document.getElementById("project-link").href = project_home;