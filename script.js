const container = document.querySelector('.container');
let n = 16;
let x;
let toggler = false;
for (var i = 0; i < n * n; i++) {
	x = document.createElement('div');
	x.classList.add('cell');
	container.appendChild(x);
}
let cells = document.querySelectorAll('.cell');
let reset = document.querySelector('.container');
reset.addEventListener('mousedown', () => {toggle()});
let addev = function(e)  { //passes to addeventlistener function, an element that changes colorbg
	e.target.style.backgroundColor = 'white';
};
function toggle() {
	toggler = !toggler;
	if (toggler === true) {
		Array.from(cells).forEach((element) => {
			element.addEventListener('mouseover', addev);
	})} else {
		Array.from(cells).forEach((element) => {
			element.removeEventListener('mouseover', addev)
		});
	}
}
