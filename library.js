// JavaScript for library.html

// Don't forget to add "data.js" to the file!

/******************** HTML Components ********************/
const table = document.getElementById("musicTable")
const title = document.getElementById("inputTitle")
const composer = document.getElementById("inputComposer")
const arranger = document.getElementById("inputArranger")

/******************** Table Functions ********************/
function addRow(dataIndex) {
    let newRow = table.insertRow(table.rows.length)
    newRow.insertCell(0).innerHTML = songs[dataIndex].title
    newRow.insertCell(1).innerHTML = songs[dataIndex].composer
    newRow.insertCell(2).innerHTML = songs[dataIndex].arranger
}

function fillTable() {
    for (let i = 0; i < songs.length; i++) {
        addRow(i)
    }
}
fillTable()

function eraseTable() {
    while (table.rows.length > 1) {
        table.rows[1].remove()
    }
}

/******************** Search Function ********************/
function search() {
    eraseTable()

    for (let i = 0; i < songs.length; i++) {
        let match = false;
        
        if (title.value != "" && songs[i].title.includes(title.value)) 
            match = true
        if (title.value != "" && songs[i].composer.includes(title.value)) 
            match = true
        if (title.value != "" && songs[i].arranger.includes(title.value)) 
            match = true

        if (match)
            addRow(i)
    }
}
