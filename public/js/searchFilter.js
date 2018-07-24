// Logic to filter using .search-key filters:

var searchAll = () => {
    let table, trs, tds;
    table = document.getElementById('tableBody');
    trs = Array.from(table.getElementsByTagName('tr'));

    var inputArr = [];
    filterInput = $('.filter');
    filterInput$ = $(filterInput);

    for (let i = 0; i < filterInput$.length; i++) {
        var filterIDs = ('tableInput' + [i]);
        inputArr.push(filterIDs);
    }

    const vlu = [];
    for (d in inputArr) {
        vlu.push(document.getElementById(inputArr[d]).value);
    }
    trs.forEach((tr, i) => {
        let filters = [];
        vlu.forEach((filter, j) =>
            filters.push(filter.toUpperCase()));
        // console.log(filters);
        const tablecell = tr.getElementsByTagName("td");
        tablecell$ = Array.from(tr.getElementsByTagName("td"));
        filters$ = Array.from(filters);

        // console.log(tablecell$);
        // console.log(filters$);
        // console.log(filters);

        // Filter Fix
        const exists = tablecell$.every((cell, i) => {
            return cell.innerHTML.toUpperCase().includes(filters[i]);
        });

        if (exists) {
            tr.style.display = '';
        } else {
            tr.style.display = 'none';
        }
    });
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();

