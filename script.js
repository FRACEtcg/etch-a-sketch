const container = document.querySelector('.container');
let n = 16;
let x;
let toggler = false;
let color = 'black';
let cells;
function grid() {
	//grid creator function
	container.innerHTML = ''; //clears grid
	container.style.gridTemplate = `repeat(${n}, 1fr) / repeat(${n}, 1fr)`;
	for (var i = 0; i < n * n; i++) {
		x = document.createElement('div');
		x.classList.add('cell');
		container.appendChild(x);
	}
	cells = document.querySelectorAll('.cell'); // updates cells
}
grid();
let gridnumlab = document.querySelector('#gridnumlab'); //label with size x size
gridnumlab.style.display = 'none';
gridnumlab.textContent = `${n} x ${n}`;
let ifborders = true;
let gridnum = document.querySelector('#gridnum'); //slider
gridnum.addEventListener('mousemove', () => {
	n = gridnum.value;
	gridnumlab.textContent = `${n} x ${n}`;
});
let newgridbtn = document.getElementById('gridsize'); //NEW GRID button
let createbtn = document.getElementById('createbtn'); //CREATE button
createbtn.addEventListener('click', () => {
	createbtn.style.display = 'none';
	gridnum.style.display = 'none';
	gridnumlab.style.display = 'none';
	newgridbtn.style.display = 'block';
	grid();
});
newgridbtn.addEventListener('click', () => {
	newgridbtn.style.display = 'none';
	gridnum.style.display = 'block';
	gridnumlab.style.display = 'block';
	createbtn.style.display = 'block';
});
let show = document.getElementById('show'); // show grid-borders button
show.addEventListener('click', () => {
	// shows/hides borders of grid
	if (ifborders) {
		Array.from(document.querySelectorAll('.cell')).forEach((e) => {
			e.style.border = 'none';
			show.textContent = 'SHOW GRID';
		});
		ifborders = false;
	} else {
		Array.from(document.querySelectorAll('.cell')).forEach((e) => {
			e.style.border = 'solid 1px rgb(75, 61, 93)';
			show.textContent = 'HIDE GRID';
		});
		ifborders = true;
	}
});
let clear = document.getElementById('clear'); // clear button
clear.addEventListener('click', () => {
	// clear function
	Array.from(document.querySelectorAll('.cell')).forEach((e) => {
		e.style.backgroundColor = 'white';
	});
});
let eraser = document.getElementById('eraser'); // eraser button
eraser.addEventListener('click', () => {
	// eraser function
	if (color != 'white') {
		color = 'white';
	} else {
		color = 'black';
	}
});
let colorpicker = document.querySelector('#colorpicker'); //color picker func
colorpicker.addEventListener('change', () => {
	color = colorpicker.value;
});
let clicktopaint = document.querySelector('.container');
clicktopaint.addEventListener('mousedown', () => {
	toggle();
});
let addev = function (e) {
	//coloring function
	e.target.style.backgroundColor = color;
};
function toggle() {
	//toggle function needs revisioning
	// toggle between painting/moving around
	toggler = !toggler;
	if (toggler === true) {
		Array.from(cells).forEach((element) => {
			element.addEventListener('click', addev);
			element.addEventListener('mouseover', addev);
		});
	} else {
		Array.from(cells).forEach((element) => {
			element.removeEventListener('mouseover', addev);
		});
	}
}
