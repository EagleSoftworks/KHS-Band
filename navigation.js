// KHS-Band website JS for Navigation (goes with navigation.css)
// Creates navigation buttons so they don't have to be copied

const navBtn = document.getElementById("navBtn")

const navTitles = ["Home", "Schedule", "Photo Gallery", "Syllabus", "Alumni", "Tri-M Honors Society", "Uniform Care", "Music Library", "Make A Donation", "View On GitHub"]
const navLinks = ["index-buttons.html", "schedule.html", "photos.html", "syllabus.html", "alumni.html", "", "", "library.html", "donate.html", "https://github.com/EagleSoftworks/KHS-Band"]

let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

var navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")

for (let i = 0; i < navTitles.length; i++) {
    let row = document.createElement("button")
    row.innerHTML = navTitles[i]
 
    

    if (i != navTitles.length - 1) {
        row.setAttribute("onclick", ("loadFile('" + navLinks[i] + "')"))
        navigationDiv.appendChild(row)
    }
    else {
        // A real url needs an anchor tag as a link
        let link = document.createElement("a")
        link.setAttribute("href", navLinks[i])
        link.setAttribute("target", "_blank")
        link.appendChild(row)
        navigationDiv.appendChild(link)
    }    
}
navBtn.appendChild(navigationDiv)