// Could use this with testimonials, make them show cards of some kind 
// or highlights/ featured items/ people-- whatever!



const panels = document.querySelectorAll('.panel')
// by using querySelectorAll it will select all items with
// class of panel and put them in a node list ( similar to an array)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        // remove all active classes from the panels
        panel.classList.add('active')
        // add the class of active to the panel that has been clicked
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
// iterates through all panels and removes the class
// 'active' from each panel