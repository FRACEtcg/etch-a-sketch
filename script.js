const container = document.querySelector('.container');
let n = 16;
let x;
let toggler = false;
for (var i = 0; i < n * n; i++) {
	x = document.createElement('div');
	x.classList.add('cell');
	container.appendChild(x);
}
let ifborders = true;
let show = document.getElementById('show');
show.addEventListener('click', () => { // shows/hides borders of grid
	if (ifborders) {
		Array.from(document.querySelectorAll('.cell')).forEach((e) => {
			e.style.border = 'none';
		});
		ifborders = false;
	} else {
		Array.from(document.querySelectorAll('.cell')).forEach((e) => {
			e.style.border = 'solid 1px rgb(75, 61, 93)';
		});
		ifborders = true;
	}
})
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
		Array.from(document.querySelectorAll('.cell')).forEach((e) => {
			e.style.backgroundColor = 'black';
		});
})
let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('.container');
reset.addEventListener('mousedown', () => {toggle()});
let addev = function(e)  { //coloring function
	e.target.style.backgroundColor = 'white';
};
function toggle() { // toggle between painting/moving around
	toggler = !toggler;
	if (toggler === true) {
		Array.from(cells).forEach((element) => {
			element.addEventListener('click', addev);
			element.addEventListener('mouseover', addev);
	})} else {
		Array.from(cells).forEach((element) => {
			element.removeEventListener('mouseover', addev)
		});
	}
}
