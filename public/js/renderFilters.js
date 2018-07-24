function renderFilters() {
    console.log("render filters included");
    const inputDiv = $('#temp-all-filters');
    // const dimensionDiv = $('#dimension-filters');
    // const metricDiv = $('#metric-filters');
    
    const index = $('.indextitle');
    
    let searchKey$ = $('.search-key'); // console.log(searchKey$);
    // const dimensionFilter = $('input.dimension');
    // const formattedFilter = $('input.formatted');
    // const extraMetricFilter = $('input.extrametric');

    $('.sheet-button').on('click', () => {
        $('#temp-all-filters').empty();
    });
    
    $(index).each(function (i) {
        var inputs = $('<input>')
            .attr('type', 'text')
            .addClass('search-key')
            .appendTo(inputDiv)
            .attr('name', $(this).text())
            .attr('id', 'tableInput' + [i])
            .attr('onkeyup', 'searchAll()')
            .attr('placeholder', 'search by ' + $(this).text().replace(/[%:]/g, '').trim())
            .addClass($(this).text().replace(/[%: ]/g, '').trim() + '-filter ' + ' filter')
            .addClass($(this).text().replace(/[%:]/g, '').replace(/[ ]/g, '-').trim())
            // if (this.hasClass('dimension')) {
            //     $('input').addClass('dimension')
            //         .appendTo(dimensionDiv)
            // };
        // console.log(searchKey$);
    });
    
    
};


    // $(formattedFilter).each(function () {
    // extraMetricFilter.appendTo(metricDiv);
    // })

    // $(searchkey).each(function (i) {
    //     var inputField = $('input')

    //     // if (inputField.hasClass('dimension')) {
    //     //     searchKey.addClass('dimension')
    //     //     .appendTo('#input-filters')
    //     // }
    // });

    //    $(dimensionFilter).each(function () {
    //    searchKey$.appendTo(dimensionDiv);
    //    });

    // $(inputs).appendTo(dimension$);
    // $(dimension$).appendTo(dimensionDiv);

// });

// testingCondition();

// ERROR CHECK FEATURE: logs file loaded to console
logFile();