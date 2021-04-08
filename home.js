

function changeContent() {
    const selectedContent = document.getElementById("current-home-nav-selection") // <--- for overall wrapper
    selectedContent.innerHTML = ""
}

// function changeContent2() { <-- for trending over all content wrapper>
//     
//     selectedContent.innerHTML = ""
//     // selectedContent.innerHTML = 
// }

// /* make a look to cycle through nav items? then inject when equal?

//an arry of menu items
//switch statement

const trendingContent = `
    <h1>Trending Content!</h1>
<div></div>
`
const podcastContent = "<h1>Podcasts!</h1>"

const wrapper = document.getElementById("wrapper")

function setContent(contentType) {
    switch (contentType) {
        case 'TRENDING':
            console.log('trending!')
            wrapper.innerHTML = trendingContent
            break
        default:
            console.error("Unexpected string.")
    }
}