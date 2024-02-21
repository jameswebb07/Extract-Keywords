// Select the table element
var table = document.querySelector('.css-1tg7zy2-table');

if (table) {
    // Initialize an array to store the extracted data
    var data = [];

    // Loop through each row in the table
    table.querySelectorAll('tbody tr').forEach(function(row) {
        // Select the first <td> element in the row
        var firstCell = row.querySelector('td');

        // Extract text content from the first <td> element and store it in the data array
        if (firstCell) {
            data.push(firstCell.textContent.trim());
        }
    });

    // Output the extracted data to the console
    console.log(data);
} else {
    console.log('Table element not found.');
}
