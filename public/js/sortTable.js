// Call sortTable function to sort column on header click:

const cells = $('thead').find('td');
cells.each(function (i) {
    cells[i].onclick = (function (n) {
        return function () {
            sortTable(n);
        };
    })(i);
});

// Logic to sort the table with column header click:
function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('tableBody');
    const head = document.getElementById('tableHead').getElementsByTagName('td')[n];
    const head$ = $(head);
    // const i$ = $('i');
    // i$.addClass('icon-arrow-down');

    switching = true;
    dir = 'asc';

    if (head$.hasClass('asc')) {
        dir = 'desc';
        head$.removeClass('asc');
        head$.addClass('desc');
        // $('i').addClass('icon-arrow-down')
    } else {
        head$.removeClass('desc');
        head$.addClass('asc');
    };

    rows = Array.from(table.getElementsByTagName('tr'));

    rows.sort((a, b) => {
        const x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        const y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();

        if (x === '' && y === '') {
            const agentX = $(a).find('.agent-name').text().toLowerCase();
            const agentY = $(b).find('.agent-name').text().toLowerCase()


            if (dir === 'asc') {
                return agentX.localeCompare(agentY);
            }
            return agentY.localeCompare(agentX);
        }


        if (!(Number.isNaN(parseFloat(x)) || Number.isNaN(parseFloat(y)))) {
            if (dir === 'asc') {
                return parseFloat(x) - parseFloat(y);
            }

            return parseFloat(y) - parseFloat(x);
        }

        if (dir === 'asc') {
            return x.localeCompare(y);
        }
        return y.localeCompare(x);
    });

    const table$ = $(table);
    table$.empty();
    rows.forEach(row => table$.append(row));
}; // END SORT TABLE

// ERROR CHECK FEATURE: logs file loaded to console
logFile();