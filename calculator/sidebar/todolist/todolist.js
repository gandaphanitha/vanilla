const formEl = document.querySelector(".form");
        const inputEl = document.querySelector(".input");
        const ulEl = document.querySelector(".list");
        const submitBtn = document.querySelector("#submitBtn");

        let list = loadStoredData();

        // Load stored data when the script loads
        function loadStoredData() {
            const storedData = localStorage.getItem("list");
            return storedData ? JSON.parse(storedData) : [];
        }

        // Populate the list with stored data
        list.forEach(task => {
            toDoList(task.name, task.checked);
        });

        submitBtn.addEventListener("click", () => {
            toDoList();
        });

        formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            toDoList();
        });

        function toDoList(taskName, checked) {
            let newTask = taskName || inputEl.value;
            let isChecked = checked || false;

            const liEl = document.createElement("li");
            liEl.innerText = newTask;
            if (isChecked) {
                liEl.classList.add("checked");
            }
            ulEl.append(liEl);
            inputEl.value = "";

            const checkBtnEl = document.createElement("div");
            checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
            liEl.append(checkBtnEl);

            const trashBtnEl = document.createElement("div");
            trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
            liEl.append(trashBtnEl);

            checkBtnEl.addEventListener("click", () => {
                liEl.classList.toggle("checked");
                updateLocalStorage();
            });

            trashBtnEl.addEventListener("click", () => {
                liEl.remove();
                updateLocalStorage();
            });

            updateLocalStorage();
        }

        function updateLocalStorage() {
            const liEls = document.querySelectorAll("li");
            list = [];
            liEls.forEach((liEl) => {
                list.push({
                    name: liEl.innerText,
                    checked: liEl.classList.contains("checked"),
                });
            });
            localStorage.setItem("list", JSON.stringify(list));
        }

      // window.addEventListener("load", function () {
        //     list.forEach(task => {
        //         toDoList(task.name, task.checked);
        //     });
        // });