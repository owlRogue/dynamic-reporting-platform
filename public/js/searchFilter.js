// Logic to filter using .search-key filters:


function searchAll() {
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
    trs.forEach(function (tr, i) {
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

        if (tablecell$) {
            for (index in tablecell$) {
                // console.log(index)
            if (tablecell[0].innerHTML.toUpperCase().indexOf(filters[0]) > -1 &&
                tablecell[1].innerHTML.toUpperCase().indexOf(filters[1]) > -1 &&
                tablecell[2].innerHTML.toUpperCase().indexOf(filters[2]) > -1 &&
                tablecell[3].innerHTML.toUpperCase().indexOf(filters[3]) > -1 &&
                tablecell[4].innerHTML.toUpperCase().indexOf(filters[4]) > -1 &&
                tablecell[5].innerHTML.toUpperCase().indexOf(filters[5]) > -1 &&
                tablecell[6].innerHTML.toUpperCase().indexOf(filters[6]) > -1 &&
                tablecell[7].innerHTML.toUpperCase().indexOf(filters[7]) > -1 &&
                tablecell[8].innerHTML.toUpperCase().indexOf(filters[8]) > -1 &&
                tablecell[9].innerHTML.toUpperCase().indexOf(filters[9]) > -1 &&
                tablecell[10].innerHTML.toUpperCase().indexOf(filters[10]) > -1 &&
                tablecell[11].innerHTML.toUpperCase().indexOf(filters[11]) > -1 &&
                tablecell[12].innerHTML.toUpperCase().indexOf(filters[12]) > -1 &&
                tablecell[13].innerHTML.toUpperCase().indexOf(filters[13]) > -1 &&
                tablecell[14].innerHTML.toUpperCase().indexOf(filters[14]) > -1) 
                {
                tr.style.display = "";
            } else {
                tr.style.display = "none"
            }
        };
        };
    });
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();

