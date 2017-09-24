var Churchill = {
	name: "Churchill",
	year: 1940,
	bce: false
};

var Gandhi = {
	name: "Gandhi",
	year: 1942,
	bce: false
};

var Demosthenes = {
	name: "Demosthenes",
	year: 342,
	bce: true
};

var speech = [
	{Churchill},
	{Gandhi},
	{Demosthenes}
];

var yearsApart = 1942-1940;

console.log("Gandhi's speech and Churchill's speech are " +  yearsApart + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speech.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
	console.log("This speech was written by " + Churchill.name + " in " + Churchill.year + "." " It is " + Churchill.bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
	console.log("This speech was written by " + Gandhi.name + " in " + Gandhi.year + "." " It is " + Gandhi.bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
	console.log("This speech was written by " + Demosthenes.name + " in " + Demosthenes.year + "." " It is " + Demosthenes.bce + " that this year is B.C.E.");
});