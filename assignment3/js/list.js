// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];



window.onload = function(){

    var myContainer = document.querySelector("#container1");
    var myOutputString = "<ol>";

    for (var i = 0; i < fruits.length; i++){
         myOutputString += "<li>" + fruits[i] + "</li>"; 
    }
    
    myOutputString += "</ol>";
    myContainer.innerHTML = myOutputString;


    var conUL = document.querySelector("#container2");

		for (var x = 0; x < directory.length; x++) {

		    if (directory[x].type == "directory") {
				var conLI = document.createElement("li");
				conUL.appendChild(conLI);
				conLI.appendChild(document.createTextNode(directory[x].name));
				
                var conUL2 = document.createElement("ul");
					for (var filesCount = 0; filesCount < directory[x].files.length; filesCount++) {
						var conLI2 = document.createElement("li");
						conLI2.appendChild(document.createTextNode(directory[x].files[filesCount].name));
						conUL2.appendChild(conLI2);
                    }
			conUL.appendChild(conUL2);			
			
            }else if (directory[x].type == "file") {
					var conLI = document.createElement("li");
					conLI.appendChild(document.createTextNode(directory[x].name));
					conUL.appendChild(conLI);			
            }
        }	
};

