//show form to add task
function addUpTask() {
		var showForm = document.getElementById('form-holder');
		showForm.style.display = 'block';
	}

//to remove the input box for adding task
function cancelTask() {
		var showForm = document.getElementById('form');
		showForm.style.display = 'none';
	}

//display the task in the table 
function viewUpTask() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'block';
	}

//To make the form disappear
function removeTable() {
		var showForm = document.getElementById('table');
		showForm.style.display = 'none';
	}

// Changes form behaviour
var form = document.getElementById('form');
form.addEventListener('submit', saveTask);
var i = 1;

	
//Adds Task
	function saveTask(e) {
		e.preventDefault();
		//getting input value
		var task = document.getElementById("task").value;
		var date = document.getElementById("date").value;
		var time = document.getElementById("time").value;
		var location = document.getElementById("location").value;
		var activity = document.getElementById("activity").value;

		//Create a tr element
		var tr = document.createElement('tr');
		tr.id = "tableRow";
		
				//Create a td element
		var td = document.createElement('td');
		//add text node with input value
		td.appendChild(document.createTextNode(++i));
		//adding it to the tr 
		tr.appendChild(td);

		//Create a td element
		var td1 = document.createElement('td');
		//add text node with input value
		td1.appendChild(document.createTextNode(task));
		//adding it to the tr 
		tr.appendChild(td1);

		var td2 = document.createElement('td');
		td2.appendChild(document.createTextNode(date));
		tr.appendChild(td2);

		var td3 = document.createElement('td');
		td3.appendChild(document.createTextNode(time));
		tr.appendChild(td3);

		var td4 = document.createElement('td');
		td4.appendChild(document.createTextNode(location));
		tr.appendChild(td4);

		var td5 = document.createElement('td');
		td5.appendChild(document.createTextNode(activity));
		tr.appendChild(td5);

		var td6 = document.createElement('td');

		var deletebtn = document.createElement('button');
		deletebtn.id = 'delete';
		deletebtn.className = 'btn btn-danger delete';

		//adding text to button
		deletebtn.appendChild(document.createTextNode('Delete'));
		//adding the button to the td
		td6.appendChild(deletebtn);
		//adding td it to the tr 
		tr.appendChild(td6);

		//getting our table
		var table = document.getElementById('maintable');
		table.appendChild(tr);
		alert('Task added Successfully');

	}

		//removing Task
var tableRow = document.getElementById('tableRow');
tableRow.addEventListener('click',removeTask);


function removeTask(e) {
	var button = document.getElementById("delete");
	
		if(confirm('You are about to Delete you event... Are you sure?')){
			var newTablerow = button.parentElement.parentElement; 
			var table = document.getElementById('maintable');
			table.removeChild(newTablerow);
		}
	
	
}

