// const trendingContent = `
//     <h1>Trending Content!</h1>
// <div></div>
// `
// const podcastsContent = `<h1>Podcasts!</h1>`

// const wrapper = document.getElementById("wrapper")

// function switchContent(contentType) {
//     switch (contentType) {
//         case 'TRENDING':
//             wrapper.innerHTML = trendingContent
//             break
//         case 'PODCASTS':
//             wrapper.innerHTML = podcastsContent
//             break
//         default:
//             console.error("Unexpected string.")
//     }
// }


trending.classList
podcasts.classList
genres.classList
newContent.classList
discover.classList

function switchContent(classOnOff) {
    const trending = document.getElementById("home-trending-content")
    const podcasts = document.getElementById("home-podcast-content")
    const genres = document.getElementById("home-genres-content")
    const newContent = document.getElementById("home-new-content")
    const discover = document.getElementById("home-discover-content")
    switch (classOnOff) {
        case "TRENDING":
            trending.classList.remove("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "PODCASTS":
            podcasts.classList.remove("d-none")
            trending.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "GENRES":
            genres.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "NEW":
            newContent.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "DISCOVER":
            discover.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            break
        default:
            console.error("Error")
    }
}

// To toggle it: $("#myId").toggleClass('d-none');




// function switchNav() {
//     const trending = document.getElementById("home-trending-content")
//     const podcasts = document.getElementById("home-podcast-content")
//     const navArray = [trending, podcasts]
//     forEach("#home-nav-link" in navArray)
// }


//create variable for each nav item - let trending = document.getElementById("home-trending-content") etc
//create an array of nav variables
//for each navlink in nav variables classlist.add(d:none) 
// classlist.add  to the selected link after

// function switchContent(classOnOff) {
    //     const trending = document.getElementById("home-trending-content") <-- how do i account for the inital display values?
    //     const podcasts = document.getElementById("home-podcast-content")
    //     // 50 more pages

        // first add d-none to all n elements
        // remove d-none on target element

        // switch (classOnOff) {

        //     case "TRENDING":
        //         trending.classList.remove("d-none")
        //         podcasts.classList.add("d-none")
        //         console.log("Trendy")
        //         break
        //     case "PODCASTS":
        //         podcasts.classList.remove("d-none")
        //         trending.classList.add("d-none")
        //         console.log("Podcasty")
        //         break
        // }

        // start
        // get array of all elements hideable with query selector
        // toggle d-none to on, on all elements in the array
        // with input, get toggle element from the caller, toggle d-none off the provided target
        // done

    //create variable for each nav item - let trending = document.getElementById("home-trending-content") etc
    //create an array of nav variables
    //for each navlink in nav variables classlist.add("d-none") 
    // classlist.remove("d-none")  to the selected link after