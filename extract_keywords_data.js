// Function to copy text to clipboard
function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Function to convert text to title case
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Select the table element
var table = document.querySelector('.css-1tg7zy2-table');

if (table) {
    // Initialize an array to store the extracted data
    var data = [];

    // Loop through each row in the table
    table.querySelectorAll('tbody tr').forEach(function(row) {
        // Select the first and third <td> elements in the row
        var firstCell = row.querySelector('td:nth-child(1)');
        var thirdCell = row.querySelector('td:nth-child(3)');

        // Extract text content from the first and third <td> elements and store it in the data array
        if (firstCell && thirdCell) {
            var firstCellText = toTitleCase(firstCell.textContent.trim());
            var thirdCellText = thirdCell.textContent.trim();
            data.push('"' + firstCellText + '", /* ' + thirdCellText + ' */');
        }
    });

    // Output the extracted data to the console
    console.log(data);

    // Copy data to clipboard
    copyToClipboard(data.join('\n'));
} else {
    console.log('Table element not found.');
}
