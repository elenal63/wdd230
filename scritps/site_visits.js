// Create a key
const VISITS_KEY = 'site-visits'

function getSiteVisits(){
// Check to see if the key exists in local storage
    let currentValue = localStorage.getItem(VISITS_KEY)
// If the key doens't exists, initialize the key to 1
    let siteVisits = 1

    if (currentValue != null){
// If the key does exists add one to the current value
        siteVisits = parseInt(currentValue) + 1
    }
// Save the new value for current visits
    localStorage.setItem(VISITS_KEY, `${siteVisits}`)
    return siteVisits
}
// Update the HTML page with the current visits
document.getElementById("visitcount").textContent = `${getSiteVisits()}`
// document.getElementById("visitcount").innerHTML = "It's 100&deg; outside"