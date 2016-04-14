var inPersonStudents = [
	{name: 'Arnoldo', currentPartner: null, previousPartners: []},
	{name: 'Ayo', currentPartner: null, previousPartners: []},
	{name: 'Chelsea', currentPartner: null, previousPartners: []},
	{name: 'Eyasu', currentPartner: null, previousPartners: []},
	{name: 'Francis', currentPartner: null, previousPartners: []},
	{name: 'Garland', currentPartner: null, previousPartners: []},
	{name: 'George', currentPartner: null, previousPartners: []},
	{name: 'Jorge', currentPartner: null, previousPartners: []},
	{name: 'Lauren', currentPartner: null, previousPartners: []},
	{name: 'Luisa', currentPartner: null, previousPartners: []},
	{name: 'Mateo', currentPartner: null, previousPartners: []},
	{name: 'Mohamed', currentPartner: null, previousPartners: []},
	{name: 'Ralston', currentPartner: null, previousPartners: []},
	{name: 'Ruth', currentPartner: null, previousPartners: []},
	{name: 'Viviana', currentPartner: null, previousPartners:[]}
];


var assignPartners = function(studentArr){
	while (true) {
		// create an array of students with no partners:
		var noPartners = _.filter(studentArr, function(studentObj, index){
				return studentObj.currentPartner === null;
			});
		// if that array is 1 or less, stop the while loop:
		if (noPartners.length <= 1) {
			break;
		}
		var counter = 0;
		// if that array is greater than 1:
		while (counter < inPersonStudents.length) {
			// choose a random person in the noPartners array
			var randomStudent = noPartners[Math.floor(Math.random() * (noPartners.length - 1) + 1)];
			// if the randomStudent and the first student in the noPartners array have partnered before, check a new random student
			var alreadyPartnered = _.contains(randomStudent.previousPartners, noPartners[0].name);
			if (!alreadyPartnered) {
				break;
			}
			counter++;
		}
		// set the first student in the noPartners array to have this random student as their partner:
		noPartners[0].currentPartner = randomStudent.name;
		// and vice versa:
		randomStudent.currentPartner = noPartners[0].name;
	}
};
assignPartners(inPersonStudents);
console.log(inPersonStudents);


// Display the student and partner on the page:
var createTable = function() {
	var table = document.getElementById('inPerson');
	while (table.firstChild) {
		table.removeChild(table.firstChild);
	}
	_.each(inPersonStudents, function(studentObj, index){
		var row = document.createElement('tr');
		table.appendChild(row);
		var cell = document.createElement('td');
		row.appendChild(cell);
		cell.innerHTML = studentObj.name;
		var cellPartner = document.createElement('td');
		row.appendChild(cellPartner);
		cellPartner.innerHTML = studentObj.currentPartner;
	});
};
createTable();


var clearPartners = function (studentArr){
	_.each(studentArr, function (studentObj){
		studentObj.previousPartners.push(studentObj.currentPartner);
		studentObj.currentPartner = null;
	});
};


document.addEventListener("DOMContentLoaded", function(e){
	var button = document.getElementById('switch');
	button.onclick = function(e){
		e.preventDefault();
		clearPartners(inPersonStudents);
		console.log(inPersonStudents);	
		assignPartners(inPersonStudents);
		createTable();
	};
});





