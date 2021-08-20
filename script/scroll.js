// scroll to...
const anchors = document.querySelectorAll('a.nav_link')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        // Wykorzysta 'href' dla skrolu między sekcjami
        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



