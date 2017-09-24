var churchill = {
	writer: "Churchill",
	year: 1940,
	bce: false
};

var gandhi = {
	writer: "Gandhi",
	year: 1942,
	bce: false
};

var demosthenes = {
	writer: "Demosthenes",
	year: 342,
	bce: true
};

var speech = [
	churchill,
	gandhi,
	demosthenes
];

var yearsApart = 1942-1940;

console.log("Gandhi's speech and Churchill's speech are " +  yearsApart + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speech.length + " speeches on the page.")
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
	console.log("This speech was written by " + speech[0].writer + " in " + speech[0].year + " . It is " + speech[0].bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	console.log("This speech was written by " + speech[1].writer + " in " + speech[1].year + " . It is " + speech[1].bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
	console.log("This speech was written by " + speech[2].writer + " in " + speech[2].year + " . It is " + speech[2].bce + " that this year is B.C.E.");
}); 