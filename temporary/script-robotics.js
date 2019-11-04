// JavaScript for robotics.html page

// ******************** Define Tables ******************** //
const table1 = document.getElementById("table1")
const table2 = document.getElementById("table2")
const table3 = document.getElementById("table3")
const tables = [table1, table2, table3]

// ******************** Data Sets ******************** //

var dataset1 = [
    {
        event: "Trinity High School Granite State VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4948.html",
        date: "10/29/2016",
        rank: "5",
        award: "Judges Award"
    }, {
        event: "Mt Washington VEX Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4954.html",
        date: "11/5/2016",
        rank: "1",
        award: "Judges Award"
    }, {
        event: "New Hampshire Holiday Classic VRC Tournament - Cube Division",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4932.html",
        date: "12/3/2016",
        rank: "1",
        award: "Tournament Champion"
    }, {
        event: "VRC Frostbite Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-5419.html",
        date: "12/10/2016",
        rank: "36",
        award: "n/a"
    }, {
        event: "Trinity Robotics StarStruck Extravaganza",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-2152.html",
        date: "1/14/2017",
        rank: "6",
        award: "Design Award"
    }, {
        event: "VEX Robotics Competition High School",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-2092.html",
        date: "1/21/2017",
        rank: "6",
        award: "Tournament Finalist"
    }, {
        event: "New Hampshire StarStruck Wrap-UP VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-1708.html",
        date: "2/4/2017",
        rank: "10",
        award: "Tournament Champion & Inspire Award"
    }, {
        event: "NH/VT 2017 VRC State Championship",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-1792.html",
        date: "2/18/2017",
        rank: "7",
        award: "Build Award"
    }
]

var dataset2 = [
    {
        event: "Trinity High School Granite State VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-3344.html",
        date: "10/22/2017",
        rank: "8",
        award: "Judges Award"
    }, {
        event: "Mount Washington VEX Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-2598.html",
        date: "11/4/2017",
        rank: "2",
        award: "Excellence Award & Tournament Champion"
    }, {
        event: "New Hampshire Holiday Classic VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-3110.html",
        date: "12/2/2017",
        rank: "3",
        award: "Innovate Award & Inspire Award & Tournament Finalist"
    }, {
        event: "VRC Frostbite Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-2839.html",
        date: "12/9/2017",
        rank: "6",
        award: "n/a"
    }, {
        event: "ConVal Late winter",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-4299.html",
        date: "2/3/2018",
        rank: "9",
        award: "Tournament Semifinalist"
    }, {
        event: "NH/VT 2018 VRC State Championship",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-4269.html",
        date: "2/17/2018",
        rank: "5",
        award: "Excellence Award"
    }, {
        event: "2018 VEX Robotics World Championship - VRC High School - Engineering Division",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-17-3805.html",
        date: "4/25/2018 through 4/28/2018",
        rank: "84",
        award: "Think Award"
    }
]

var dataset3 = [
    {
        event: "Trinity High School Granite State VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-6278.html",
        date: "10/20/2018",
        rank: "21",
        award: "Think Award"
    }, {
        event: "Mount Washington Valley VEX Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-5526.html",
        date: "11/3/2018",
        rank: "9",
        award: "Design Award"
    }, {
        event: "New Hampshire Holiday Classic VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-5069.html",
        date: "12/1/2018",
        rank: "21",
        award: "Design Award"
    }, {
        event: "Frostbite Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-5209.html",
        date: "12/15/2018",
        rank: "7",
        award: "n/a"
    }, {
        event: "Mid Winter Classic",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-5456.html",
        date: "1/19/2019",
        rank: "5",
        award: "Excellence Award"
    }, {
        event: "NH/VT VRC State Championship",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-7624.html",
        date: "2/16/2019",
        rank: "12",
        award: "Design Award"
    }, {
        event: "2019 VEX Robotics World Championship - VRC High School - Science Division",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-18-6082.html",
        date: "04/24/2019 through 04/27/2019",
        rank: "6",
        award: "Tournament Quarterfinalist"
    }
]

const datasets = [dataset1, dataset2, dataset3]

// ******************** Fill Tables ******************** //

for (let t = 0; t < tables.length; t++) {

    let order = []
    for (let i = 0; i < 4; i++)
        order.push((tables[t].rows[0].cells[i].innerHTML).toLowerCase())

    for (let i = 0; i < datasets[t].length; i++) {
        let newRow = tables[t].insertRow(i + 1)

        for (let c = 0; c < 4; c++) {
            if (order[c] == "event") {
                let link = document.createElement("a")
                link.setAttribute('href', (datasets[t][i].link))
                link.setAttribute('target', "_blank")
                newRow.insertCell(c).appendChild(link).innerHTML = (datasets[t][i].event)
            } else if (order[c] == "rank") {
                newRow.insertCell(c).innerHTML = (datasets[t][i].rank)
            } else if (order[c] == "date") {
                newRow.insertCell(c).innerHTML = (datasets[t][i].date)
            } else if (order[c] == "award") {
                newRow.insertCell(c).innerHTML = (datasets[t][i].award)
            }
        }
    }
}

