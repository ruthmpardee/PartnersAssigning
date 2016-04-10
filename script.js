var inPersonStudents = [
	{name: 'Mohamed', currentPartner: null, previousPartners: ['Luisa', 'Jorge', 'Mateo', 'Eyasu', 'Ayo', 'Chelsea', 'Arnoldo', 'Francis', 'Ruth', 'Ralston', 'Garland', 'George', 'Lauren']},
	{name: 'Luisa', currentPartner: null, previousPartners: ['Mohamed']},
	{name: 'Jorge', currentPartner: null, previousPartners: ['Mateo', 'Mohamed']},
	{name: 'Mateo', currentPartner: null, previousPartners: ['Jorge', 'Mohamed']},
	{name: 'Eyasu', currentPartner: null, previousPartners: ['Ayo', 'Mohamed']},
	{name: 'Ayo', currentPartner: null, previousPartners: ['Eyasu', 'Mohamed']},
	{name: 'Chelsea', currentPartner: null, previousPartners: ['Lauren', 'Mohamed']},
	{name: 'Arnoldo', currentPartner: null, previousPartners: ['Francis', 'Mohamed']},
	{name: 'Francis', currentPartner: null, previousPartners: ['Arnoldo', 'Mohamed']},
	{name: 'Ruth', currentPartner: null, previousPartners: ['Ralston', 'Mohamed']},
	{name: 'Ralston', currentPartner: null, previousPartners: ['Ruth', 'Mohamed']},
	{name: 'Garland', currentPartner: null, previousPartners: ['George', 'Mohamed']},
	{name: 'George', currentPartner: null, previousPartners: ['Garland', 'Mohamed']},
	{name: 'Lauren', currentPartner: null, previousPartners: ['Chelsea', 'Mohamed']},
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
	_.each(studentArr, function(studentObj, index){
		var table = document.getElementById('inPerson');
		var row = table.insertRow(-1);
		var cell = row.insertCell(-1);
		cell.innerHTML = studentObj.name;
		var cellPartner = row.insertCell(-1);
		cellPartner.innerHTML = studentObj.currentPartner;
		});
};

assignPartners(inPersonStudents);






