// JavaScript for library.html

// Don't forget to add "data.js" to the file!

/******************** HTML Components ********************/
const table = document.getElementById("musicTable")
const input = document.getElementById("inputSearch")

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
fillTable()

function eraseTable() {
    while (table.rows.length > 1) {
        table.rows[1].remove()
    }
}

/******************** Search Function ********************/
function search() {
    // let searches = input.value.split(" ")
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
