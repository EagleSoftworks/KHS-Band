// JavaScript for library.html

// Don't forget to add "data.js" to the file!

/******************** HTML Components ********************/
const table = document.getElementById("musicTable")
const title = document.getElementById("inputTitle")
const composer = document.getElementById("inputComposer")
const arranger = document.getElementById("inputArranger")

/******************** Fill Table Function ********************/
function fillTable() {
    for (let i = 0; i < songs.length; i++) {
        let newRow = table.insertRow(i + 1)
        newRow.insertCell(0).innerHTML = songs[i].title
        newRow.insertCell(1).innerHTML = songs[i].composer
        newRow.insertCell(2).innerHTML = songs[i].arranger
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
    fillTable()

    if (title.value != "") {
        for(let i = 0; i < table.rows.length - 1; i++) {
            if(!(table.rows[i + 1].cells[0].innerHTML).includes(title.value)) {
                table.rows[i+1].remove()
            }
        }
    }

    if (composer.value != "") {
        for(let i = 0; i < songs.length; i++) {
            if(!(table.rows[i + 1].cells[1].innerHTML).includes(composer.value)) { 
                table.rows[i+1].remove()
            }
        }
    }

    if (arranger.value != "") {
        for(let i = 0; i < songs.length; i++) {
            if(!(table.rows[i + 1].cells[2].innerHTML).includes(arranger.value)) { 
                table.rows[i+1].remove()
            }
        }
    }

}
