var localhost;
var fileString;

function logFile() {
    var filePath;
    (function () {
        const scripts = document.getElementsByTagName('script');
        filePath = scripts[scripts.length - 1].src;
    }());
        // console.log("file path:" + "\n" + filePath); // whole path
    
    localhost = filePath.substr(0, 21); // isolates "http://localhost:8000/js/"
        // console.log("localhost" + "\n" + localhost);
    fileString = filePath.substr(21); // isolates everything after "http://localhost:8000/js/"
        // console.log("File Loaded:" + "\n" + fileString); // whole path

    if (localhost = "http://localhost:8000/") {
        console.log(fileString +
            // "\n" +
            " loaded"); // MAIN ERROR CHECK LOG - 
        };
};

logFile();