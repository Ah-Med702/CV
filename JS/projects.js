const projectsContainer = document.querySelector(
    ".projects-container .content"
);

const spinner = document.querySelector(".spinner");

let loading = true;

async function fetchProjects() {
    await fetch("/API/projects.json")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            projectsContainer.removeChild(spinner);
            // spinner.style.display= "none";
            const resultArray = res.data;
            resultArray.forEach((result) => {
                const namePlaceholder = document.createElement("div");
                namePlaceholder.classList = "project-name-placeholder";

                const linkPlaceholder = document.createElement("div");
                linkPlaceholder.classList = "project-link-placeholder";

                const descriptionPlaceholder = document.createElement("div");
                descriptionPlaceholder.classList = "card-text-placeholder";

                const imgPlaceholder = document.createElement("div");
                imgPlaceholder.classList = "img-placeholder";

                namePlaceholder.style.display = "block";
                linkPlaceholder.style.display = "block";
                descriptionPlaceholder.style.display = "block";
                imgPlaceholder.style.display = "block";

                const project = document.createElement("div");
                project.className = "project w-100";

                const card = document.createElement("div");
                card.className = "card border-0 rounded-0 shadow-lg";

                const row = document.createElement("div");
                row.classList = "row g-0";

                const container = document.createElement("div");
                container.classList = "container";

                const cardBody = document.createElement("div");
                cardBody.classList = "card-body";

                const heading = document.createElement("div");
                heading.className = "heading";

                const name = document.createElement("h3");
                name.classList = "project-name text-capitalize fw-bold";
                name.innerHTML = result.name;
                namePlaceholder.style.display = "none";

                const link = document.createElement("a");
                link.className = "project-link fw-bold";
                link.href = result.link;
                link.target = "_blank";
                link.innerHTML = result.link;
                linkPlaceholder.style.display = "none";

                const description = document.createElement("p");
                description.className = "card-text";
                description.innerHTML = result.description;
                descriptionPlaceholder.style.display = "none";

                const imgElement = document.createElement("div");
                imgElement.className = "img w-100 h-100";

                const img = document.createElement("img");
                img.className = "w-100 h-100";
                img.alt = result.name;
                img.loading = "lazy";
                img.src = `images/${result.imgUrl}`;
                imgPlaceholder.style.display = "none";

                heading.appendChild(name);
                heading.appendChild(namePlaceholder);
                heading.appendChild(link);
                heading.appendChild(linkPlaceholder);

                cardBody.appendChild(heading);
                cardBody.appendChild(description);
                cardBody.appendChild(descriptionPlaceholder);

                container.appendChild(cardBody);

                imgElement.appendChild(img);
                imgElement.appendChild(imgPlaceholder);

                row.appendChild(container);
                row.appendChild(imgElement);

                card.appendChild(row);
                project.appendChild(card);
                projectsContainer.appendChild(project);
            });
        });
}fetchProjects();