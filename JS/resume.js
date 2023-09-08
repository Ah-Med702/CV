const experienceItemsContainer = document.querySelector(
    ".resume-container .content .experience .items"
);
const educationItemsContainer = document.querySelector(
    ".resume-container .content .education .items"
);
const SkillsItemsContainer = document.querySelector(
    ".resume-container .content .skills-and-languages .skills-container .skills"
);
const languagesItemsContainer = document.querySelector(
    ".resume-container .content .skills-and-languages .languages-container .languages"
);

let loading = true;

async function fetchExperience() {
    await fetch("/API/resume.json")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const resultArray = res.experience;
            resultArray.forEach((result) => {
                const item = document.createElement("div");
                item.className =
                    "item p-5 bg-white shadow d-flex flex-column flex-lg-row  gap-4 gap-lg-0 justify-content-between";

                const info = document.createElement("div");
                info.className = "info";

                const timeIn = document.createElement("div");
                timeIn.className = "time-in fs-5 text-primary fw-bolder";
                timeIn.innerHTML = result.info.timeIn;

                const job = document.createElement("div");
                job.className = "job text-capitalize fs-5";
                job.innerHTML = result.info.job;

                const level = document.createElement("div");
                level.className = "level";
                level.innerHTML = result.info.level;

                const location = document.createElement("div");
                location.className = "location";
                location.innerHTML = result.info.location;

                info.appendChild(timeIn);
                info.appendChild(job);
                info.appendChild(level);
                info.appendChild(location);

                const description = document.createElement("div");
                description.className = "description";
                description.innerHTML = result.description;

                item.appendChild(info);
                item.appendChild(description);

                const experienceSpinner = document.querySelector(
                    ".resume-container .content .experience .spinner"
                );
                experienceItemsContainer.removeChild(experienceSpinner);
                experienceItemsContainer.appendChild(item);
            });
        });
}
fetchExperience();

async function fetchEducation() {
    await fetch("/API/resume.json")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const resultArray = res.education;
            resultArray.forEach((result) => {
                const item = document.createElement("div");
                item.className =
                    "item p-5 bg-white shadow d-flex flex-column flex-lg-row  gap-4 gap-lg-0 justify-content-between";

                const info = document.createElement("div");
                info.className = "info";

                const timeIn = document.createElement("div");
                timeIn.className = "time-in fs-5 text-primary fw-bolder";
                timeIn.innerHTML = result.info.timeIn;

                const job = document.createElement("div");
                job.className = "job text-capitalize fs-5";
                job.innerHTML = result.info.job;

                const level = document.createElement("div");
                level.className = "level";
                level.innerHTML = result.info.level;

                const location = document.createElement("div");
                location.className = "location";
                location.innerHTML = result.info.location;

                info.appendChild(timeIn);
                info.appendChild(job);
                info.appendChild(level);
                info.appendChild(location);

                const description = document.createElement("div");
                description.className = "description";
                description.innerHTML = result.description;

                item.appendChild(info);
                item.appendChild(description);

                const educationSpinner = document.querySelector(
                    ".resume-container .content .education .spinner"
                );
                educationItemsContainer.removeChild(educationSpinner);
                educationItemsContainer.appendChild(item);
            });
        });
}
fetchEducation();

async function fetchSkills() {
    await fetch("/API/resume.json")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const resultArray = res.skills;
            resultArray.forEach((result) => {
                const skill = document.createElement("div");
                skill.className = "skill d-flex align-items-center gap-2";

                const item = document.createElement("div");
                item.className = "item";

                const skillContent = document.createElement("p");
                skillContent.className = "mb-0";
                skillContent.innerHTML = result;

                skill.appendChild(item);
                skill.appendChild(skillContent);

                SkillsItemsContainer.appendChild(skill);
            });

            const skillsSpinner = document.querySelector(
                ".resume-container .content .skills-and-languages .skills-container .skills .spinner"
            );
            SkillsItemsContainer.removeChild(skillsSpinner);
        });
}
fetchSkills();

async function fetchlanguages() {
    await fetch("/API/resume.json")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            const resultArray = res.languages;
            resultArray.forEach((result) => {
                const language = document.createElement("div");
                language.className = "language d-flex align-items-center gap-2";

                const item = document.createElement("div");
                item.className = "item";

                const languageContent = document.createElement("p");
                languageContent.className = "mb-0";
                languageContent.innerHTML = `${result.name} (${result.level})`;

                language.appendChild(item);
                language.appendChild(languageContent);

                languagesItemsContainer.appendChild(language);
            });

            const languagesSpinner = document.querySelector(
                ".resume-container .content .skills-and-languages .languages-container .languages .spinner"
            );
            languagesItemsContainer.removeChild(languagesSpinner);
        });
}
fetchlanguages();