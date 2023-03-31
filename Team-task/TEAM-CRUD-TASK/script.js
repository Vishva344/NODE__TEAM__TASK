// Get table body and form elements
const tableBody = document.getElementById('table-body');
const form = document.getElementById('my-form');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

// Retrieve data from local storage or set empty array
let data = JSON.parse(localStorage.getItem('formData')) || [];

// Generate unique ID for form submission
let uniqueId = 1;

function generateUniqueId() {
  if (data.length > 0) {
    uniqueId = data[data.length - 1].id + 1;
  }
  return uniqueId;
}

// Render table rows from local storage data
function renderRows() {
  tableBody.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].price}</td><td>${data[i].category}</td><td><button onclick="editRow(${data[i].id})">Edit</button><button onclick="deleteRow(${data[i].id})">Delete</button></td>`;
    tableBody.appendChild(row);
  }
}

// Save form data to local storage
function saveData() {
  const nameInput = document.getElementById('name');
  const priceInput = document.getElementById('price');
  const categoryInput = document.getElementById('category');
  

  if (
    nameInput.value.trim() === '' ||
    priceInput.value.trim() === '' ||
    categoryInput.value.trim() === '' 
    
  ) {
    alert('Please fill in all fields');
    return;
  }

  const id = generateUniqueId();
  const name = nameInput.value;
  const price = priceInput.value;
  
  const category = categoryInput.value;


// Create new data object and push to data array
const newData = { id, name, price, category };
data.push(newData);

// Save data to local storage
localStorage.setItem('formData', JSON.stringify(data));

// Reset form inputs
nameInput.value = '';
priceInput.value = '';
categoryInput.value = '';

// Render table rows with updated data

renderRows();
}







// Edit form data in local storage
function editData(id) {
const formData = data.find(item => item.id === id);
const name = document.getElementById('name').value || formData.name;
const price = document.getElementById('price').value || formData.price;
const category = document.getElementById('category').value || formData.category;


const index = data.findIndex(item => item.id === id);
data[index] = { id, name, price, category};
localStorage.setItem('formData', JSON.stringify(data));

form.reset();
renderRows();
}

// Delete form data from local storage
function deleteData(id) {
const index = data.findIndex(item => item.id === id);
data.splice(index, 1);
localStorage.setItem('formData', JSON.stringify(data));

renderRows();
}

// Edit form data when "Edit" button is clicked
function editRow(id) {
const formData = data.find(item => item.id === id);
document.getElementById('id').value = formData.id;
document.getElementById('name').value = formData.name;
document.getElementById('price').value = formData.price;
document.getElementById('category').value = formData.category;


saveButton.removeEventListener('click', saveData);
saveButton.addEventListener('click', () => editData(id));
}

// Delete form data when "Delete" button is clicked
function deleteRow(id) {
deleteData(id);
}

// Clear local storage and table
function clearData() {
localStorage.clear();
data = [];
renderRows();
}

// Render initial table rows
renderRows();

// Add event listeners to buttons
saveButton.addEventListener('click', saveData);
clearButton.addEventListener('click', clearData);
//sorting
// function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("registration-table");
//     switching = true;
    
//     dir = "asc"; 
    
//     while (switching) {
      
//       switching = false;
//       rows = table.rows;
      
//       for (i = 1; i < (rows.length - 1); i++) {
        
//         shouldSwitch = false;
        
//         x = rows[i].getElementsByTagName("TD")[n];
//         y = rows[i + 1].getElementsByTagName("TD")[n];
        
//         if (dir == "asc") {
//           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
//             shouldSwitch= true;
//             break;
//           }
//         } else if (dir == "desc") {
//           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
           
//             shouldSwitch = true;
//             break;
//           }
//         }
//       }
//       if (shouldSwitch) {
        
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
        
//         switchcount ++;      
//       } else {
        
//         if (switchcount == 0 && dir == "asc") {
//           dir = "desc";
//           switching = true;
//         }
//       }
//     }
//   }


//   function myFunction() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("registration-table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 1; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }
  
  
function displayCategoryWiseTotal() {
  // Retrieve the table rows
  const tableRows = document.querySelectorAll('#registration-table tbody tr');

  // Create an empty map to store category-wise total
  const categoryWiseTotal = new Map();

  // Loop through each row and calculate the category-wise total
  tableRows.forEach(row => {
    const category = row.cells[3].textContent;
    const price = parseFloat(row.cells[2].textContent);

    if (!categoryWiseTotal.has(category)) {
      categoryWiseTotal.set(category, 0);
    }

    categoryWiseTotal.set(category, categoryWiseTotal.get(category) + price);
  });

  // Clear the table body
  const tableBody = document.querySelector('#category-wise-total-table tbody');
  tableBody.innerHTML = '';

  // Loop through the map and create new rows for each category-wise total
  categoryWiseTotal.forEach((total, category) => {
    const newRow = document.createElement('tr');
    const categoryCell = document.createElement('td');
    const totalCell = document.createElement('td');

    categoryCell.textContent = category;
    totalCell.textContent = total.toFixed(2);

    newRow.appendChild(categoryCell);
    newRow.appendChild(totalCell);
    tableBody.appendChild(newRow);
  });
}
//searchingggg.......
function myFunction() {
  // Get input element and filter value
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();

  // Get table body and rows
  var tableBody = document.getElementById("table-body");
  var rows = tableBody.getElementsByTagName("tr");

  // Loop through all rows, hide those that don't match the search query
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var visible = false;
    for (var j = 0; j < cells.length; j++) {
      var cell = cells[j];
      if (cell) {
        var cellText = cell.textContent || cell.innerText;
        if (cellText.toUpperCase().indexOf(filter) > -1) {
          visible = true;
          break;
        }
      }
    }
    rows[i].style.display = visible ? "" : "none";
  }
}




  

//sorting
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("registration-table");
  switching = true;
  
  dir = "asc"; 
  
  while (switching) {
    
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      
      if (dir == "asc") {
        if (isNaN(parseInt(x.innerHTML))) {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else {
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            shouldSwitch= true;
            break;
          }
        }
      } else if (dir == "desc") {
        if (isNaN(parseInt(x.innerHTML))) {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else {
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch= true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++;      
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
