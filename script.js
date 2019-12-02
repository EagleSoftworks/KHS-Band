// JavaScript for importing HTML into a div

function loadFile(filename, divID) {
    // The filename has # at the end so the user is moved to the top of the new page
    $(divID).load(filename + "#");
    // 'filename' needs to be a string for an html file, ex: 'syllabus.html'
    // 'divID' needs to be a string for an html id, ex: "#syllabusDisplay"
}

/******************** Syllabus Functions ********************/
const syllabusInput = document.getElementById("syllabusInput")

function loadSyllabus() {
    let syllabusI = syllabusInput.value.toLowerCase()

    loadFile((syllabusI + ".html"), "#syllabusDisplay")
}