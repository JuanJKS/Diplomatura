let erroresEl = document.querySelector("p#errores");
let tareaEl = document.querySelector("input[name=tarea]");
let buttonEl = document.querySelector("input[name=add]");
let listaDeTareasEl = document.querySelector("form[name=lista-de-tareas]");

function addNew() {
	if (tareaEl.value === "") {
		erroresEl.innerHTML = "Ha cometido un error";
		tareaEl.setAttribute("class", "error-on");
		setTimeout(() => {
			erroresEl.innerHTML = "";
		}, 10000);
	} else {
		tareaEl.setAttribute("class", "error-off");
		let divNewTaskContainer = createContainerDiv();
		listaDeTareasEl.appendChild(divNewTaskContainer);

		let inputCheck = createInput("checkbox", "click", lineThroughTask);
		divNewTaskContainer.appendChild(inputCheck);

		let pNewTask = createP();
		divNewTaskContainer.appendChild(pNewTask);

		let inputDelete = createInput("button", "click", removeTask, "X");
		divNewTaskContainer.appendChild(inputDelete);

		tareaEl.value = "";
		erroresEl.innerHTML = "";
	}
}

function createContainerDiv() {
	let divNewTask = document.createElement("div");
	divNewTask.setAttribute("class", "newtask");
	return divNewTask;
}

function createInput(type, eventType, eventFunction, defaultParam = null) {
	let input = document.createElement("input");
	input.setAttribute("type", type);
	input.addEventListener(eventType, eventFunction);

	if (defaultParam != null) {
		input.setAttribute("value", defaultParam); // Era mejor poner input.value = defaultParam; ?? Traté de hacerlo sin copiarlo del tuyo.
	}
	return input;
}

function createP() {
	let tareaAgregada = document.createElement("p");
	tareaAgregada.textContent = tareaEl.value;
	tareaAgregada.setAttribute("style", "padding: 25px;");
	return tareaAgregada;
}

function removeTask(e) {
	e.target.parentElement.remove();
}

function lineThroughTask(e) {
	let taskText = e.target.parentNode.querySelector("p");

	if (e.target.checked == true) {
		taskText.setAttribute("style", "text-decoration:line-through;");
	} else {
		taskText.setAttribute("style", "text-decoration: auto;");
	}
}
	
buttonEl.addEventListener("click", addNew);

