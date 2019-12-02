// JavaScript for library.html

// This uses music stored in 'library-data.csv'

/******************** HTML Components ********************/
const table = document.getElementById("musicTable")
const titleInput = document.getElementById("titleInput")
const composerInput = document.getElementById("composerInput")

/******************** Get .CSV File ********************/
var jq = document.createElement('script');
jq.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "./library-data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

var songs = []

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (let i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let temp = {
                number: data[0],
                title: data[1],
                composer: data[2],
                arranger: data[3],
                band: data[4]
            }
            songs.push(temp)
        }
    }

    // Fill the table once the .csv file has been loaded
    fillTable()
}

/******************** Table Functions ********************/
function addRow(dataIndex) {
    let newRow = table.insertRow(table.rows.length)
    newRow.insertCell(0).innerHTML = songs[dataIndex].number
    newRow.insertCell(1).innerHTML = songs[dataIndex].title
    newRow.insertCell(2).innerHTML = songs[dataIndex].composer
    newRow.insertCell(3).innerHTML = songs[dataIndex].arranger
    newRow.insertCell(4).innerHTML = songs[dataIndex].band
}

function fillTable() {
    for (let i = 0; i < songs.length; i++) {
        addRow(i)
    }
}

function eraseTable() {
    while (table.rows.length > 1) {
        table.rows[1].remove()
    }
}

/******************** Search Function ********************/
function search() {
    let search = input.value;

    if (search != "") {
        eraseTable()

        for (let i = 0; i < songs.length; i++) {
            let match = false;
            
            if (search != "" && songs[i].title.includes(search)) 
                match = true
            if (search != "" && songs[i].composer.includes(search)) 
                match = true
            if (search != "" && songs[i].arranger.includes(search)) 
                match = true

            if (match)
                addRow(i)
        }
    }
}