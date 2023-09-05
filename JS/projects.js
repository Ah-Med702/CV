const projectsContainer = document.querySelector(".projects-container .content");

fetch("/API/projects.json")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        const resultArray = res.data;
        resultArray.forEach((result) => {
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

            const link = document.createElement("a");
            link.className = "project-link fw-bold";
            link.href = result.link;
            link.target = "_blank";
            link.innerHTML = result.link;


            const description = document.createElement("p");
            description.className = "card-text";
            description.innerHTML = result.description;


            const imgElement = document.createElement("div");
            imgElement.className = "img w-100 h-100";

            const img = document.createElement("img");
            img.className = "w-100 h-100";
            img.alt = result.name;
            img.src = `images/${result.imgUrl}`;
            
            heading.appendChild(name);
            heading.appendChild(link);
            
            cardBody.appendChild(heading);
            cardBody.appendChild(description);

            container.appendChild(cardBody);

            imgElement.appendChild(img);

            row.appendChild(container);
            row.appendChild(imgElement);

            card.appendChild(row);
            project.appendChild(card);
            projectsContainer.appendChild(project);

            // console.log(projectElement);
            // projectsContainer.append(projectElement);
        });
    });
