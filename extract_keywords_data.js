// Function to copy text to clipboard
function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

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

    // Copy data to clipboard
    copyToClipboard(data.join('\n'));
    
    // Alert user that data has been copied to clipboard
    alert('Data copied to clipboard!');
} else {
    console.log('Table element not found.');
}
