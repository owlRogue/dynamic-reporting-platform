var renderDownloadButton = table => {
const downloadDiv = $('<div>')
                .attr('id', 'downloads')
                .appendTo('navbar')
                .css('style', 'none');
    
clearDownloadButton();

const downloadButton = $('<button>')
        .addClass('download-button')
        .appendTo('#downloads')
        .attr('id', 'downloadButton')
        // .attr('onclick', $('#theTable').table2csv())
        .text('Download CSV');

    $('.download-button').on("click", callTable = () => {
        $('#theTable').table2csv()
    });
};

var clearDownloadButton = table => {
    $('#downloads').empty();
};

// ERROR CHECK FEATURE: logs file loaded to console
logFile();