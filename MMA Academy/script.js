const firstSection = document.getElementById("firstSect")

const secondSection = document.getElementById("secondSect")


const thirdSection = document.getElementById("thirdSect")

const fourthSection = document.getElementById("fourthSect")

const fithSection = document.getElementById("fithSect")

const sixthSection = document.getElementById("sixthSect")



const options = {

    rootMargin: "0px",
    threshold: 0.4
}


const observer = new IntersectionObserver(
    callbackFunction,
    options
)


function callbackFunction(enteries) {
    enteries.forEach(entry => {
       if (entry.isIntersecting) {
        if (entry.target.id === 'firstSect') {
           entry. target.classList.add('loaded')
        }
        if (entry.target.id === 'secondSect') {
           entry. target.classList.add('fade-in')
        }
        if (entry.target.id === 'thirdSect') {
           entry. target.classList.add('fade-in')
        }
        if (entry.target.id === 'fourthSect') {
           entry. target.classList.add('fade-in')
        }
        if (entry.target.id === 'fithSect') {
           entry. target.classList.add('fade-in')
        }
        if (entry.target.id === 'sixthSect') {
           entry. target.classList.add('fade-in')
        }
        observer.unobserve(entry.target)
       }
    })
    
}



observer.observe(firstSection)
observer.observe(secondSection)
observer.observe(thirdSection)
observer.observe(fourthSection)
observer.observe(fithSection)
observer.observe(sixthSection)