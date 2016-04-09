var inPersonStudents = [
	{name: 'Mohamed', previousPartners: ['Luisa']},
	{name: 'Luisa', previousPartners: ['Mohamed']},
	{name: 'Jorge', previousPartners: ['Mateo']},
	{name: 'Mateo', previousPartners: ['Jorge']},
	{name: 'Eyasu', previousPartners: ['Ayo']},
	{name: 'Ayo', previousPartners: ['Eyasu']},
	{name: 'Chelsea', previousPartners: ['Lauren']},
	{name: 'Arnoldo', previousPartners: ['Francis']},
	{name: 'Francis', previousPartners: ['Arnoldo']},
	{name: 'Ruth', previousPartners: ['Ralston']},
	{name: 'Ralston', previousPartners: ['Ruth']},
	{name: 'Garland', previousPartners: ['George']},
	{name: 'George', previousPartners: ['Garland']},
	{name: 'Lauren', previousPartners: ['Chelsea']},
	{name: 'Viviana', previousPartners: []},
];


var assignPartners = function(studentArr){
	console.log('assignPartners is running');

	// var table = document.getElementById('inPerson');
	// var row = table.insertRow(0);
	// var cell = row.insertCell(0);
	// cell.innerHTML = studentArr[i].name;


	for (var i = 0; i < studentArr.length; i++) {
		console.log('loop is running at index: ', i);
		var table = document.getElementById('inPerson');
		var row = table.insertRow(-1);
		var cell = row.insertCell(-1);
		cell.innerHTML = studentArr[i].name;
	}
};

assignPartners(inPersonStudents);


