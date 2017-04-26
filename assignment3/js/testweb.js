


var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

function elem(outputId, users){

    var tr = document.createElement("tr");
    
    for(var i = 0; i < users.length; i++){

        var td = document.createElement("td");
        var text1 = document.createTextNode(users[i].first_name);
        td.appendChild(text1);
    }
document.querySelector("#outputTable" + outputId).appendChild(tr);
}

/*
  var tableContainer = document.querySelector("#outputTable");
  var myRows = ""; 

  for(var i = 0; i < users.length; i++){
      myRows += "<tr>" +
                  "<td>" + users[i].first_name + "</td>" +
                  "<td>" + users[i].last_name + "</td>" + 
                  "<td>" + users[i].age + "</td>" + 
                  "<td>" + "<a href=mailto: '" + users[i].email +"'>" + users[i].email + "</a>" + "</td>" +
                "</tr>";
  }

  tableContainer.innerHTML += myRows;
};
*/