var inPersonStudents = [
	{name: 'Mohamed', currentPartner: null, previousPartners: ['Arnoldo']},
	{name: 'Luisa', currentPartner: null, previousPartners: []},
	{name: 'Jorge', currentPartner: null, previousPartners: ['Mateo']},
	{name: 'Mateo', currentPartner: null, previousPartners: ['Jorge']},
	{name: 'Eyasu', currentPartner: null, previousPartners: ['Ayo']},
	{name: 'Ayo', currentPartner: null, previousPartners: ['Eyasu']},
	{name: 'Chelsea', currentPartner: null, previousPartners: ['Lauren']},
	{name: 'Arnoldo', currentPartner: null, previousPartners: ['Francis']},
	{name: 'Francis', currentPartner: null, previousPartners: ['Arnoldo']},
	{name: 'Ruth', currentPartner: null, previousPartners: ['Ralston']},
	{name: 'Ralston', currentPartner: null, previousPartners: ['Ruth']},
	{name: 'Garland', currentPartner: null, previousPartners: ['George']},
	{name: 'George', currentPartner: null, previousPartners: ['Garland']},
	{name: 'Lauren', currentPartner: null, previousPartners: ['Chelsea']},
	{name: 'Viviana', currentPartner: null, previousPartners: []},
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

		// if that array is greater than 1:
		while (true) {
			// choose a random person in the noPartners array
			var randomStudent = noPartners[Math.floor(Math.random() * (noPartners.length - 1) + 1)];
			// if the randomStudent and the first student in the noPartners array have partnered before, check a new random student
			var alreadyPartnered = _.contains(randomStudent.previousPartners, noPartners[0].name);
			if (!alreadyPartnered) {
				break;
			}
		}

		// set the first student in the noPartners array to have this random student as their partner:
		noPartners[0].currentPartner = randomStudent.name;
		// and vice versa:
		randomStudent.currentPartner = noPartners[0].name;
	}

	// Display the student and partner on the page:
	
};

assignPartners(inPersonStudents);
console.log(inPersonStudents);

_.each(inPersonStudents, function(studentObj, index){
	var table = document.getElementById('inPerson');
	var row = document.createElement('tr')
	table.appendChild(row);
	var cell = document.createElement('td')
	row.appendChild(cell);
	cell.innerHTML = studentObj.name;
	var cellPartner = document.createElement('td')
	row.appendChild(cellPartner);
	cellPartner.innerHTML = studentObj.currentPartner;
});

 var clearPartners = function (studentArr){
 	_.each(studentArr, function (studentObj){
 		studentObj.previousPartners.push(studentObj.currentPartner);
 		studentObj.currentPartner = null;
 	});
 };


document.addEventListener("DOMContentLoaded", function(e){
// your code here
	var button = document.getElementById('switch');
	button.onclick = function(e){
		e.preventDefault();
		// var list = document.getElementById('inPerson');
		clearPartners(inPersonStudents);
		console.log(inPersonStudents);	
		assignPartners(inPersonStudents);
	};
});

var hashtable = {}





