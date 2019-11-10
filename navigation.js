// KHS-Band website JS for Navigation
// Creates navigation buttons so they don't have to be copied

const navBtn = document.getElementById("navBtn")

const navTitles = ["Home", "Schedule", "Photo Gallery", "Syllabus", "Alumni", "Tri-M Honors Society", "Uniform Care", "Music Library", "Make A Donation", "View On GitHub"]
const navLinks = ["index.html", "", "photos.html", "", "alumni.html", "", "", "library.html", "donate.html", "https://github.com/EagleSoftworks/KHS-Band"]

let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

let navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")

for (let i = 0; i < navTitles.length; i++) {
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