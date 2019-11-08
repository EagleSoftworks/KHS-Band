// KHS-Band website JS for Navigation
// Creates navigation buttons so they don't have to be copied

const navBtn = document.getElementById("navBtn")

const navTitles = ["Home", "Schedule", "Photo Gallery", "Syllabus", "Alumni", "Tri-M Honors Society", "Uniform Care", "Music Library", "Make A Donation"]
const navLinks = ["index.html", "", "photos.html", "", "", "", "", "library.html", ""]

let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

let navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")

for (let i = 0; i < 9; i++) {
    let title = document.createElement("h4")
    title.innerHTML = navTitles[i]

    let row = document.createElement("div")
    row.appendChild(title)
    
    let link = document.createElement("a")
    link.setAttribute("href", navLinks[i])
    link.appendChild(row)

    navigationDiv.appendChild(link)
}

navBtn.appendChild(navigationDiv)