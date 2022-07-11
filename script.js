const section = document.querySelectorAll('section')
const span = document.querySelector('span')

section.forEach((sec) => {
    sec.addEventListener('click', () => {
        sec.classList.toggle('activated')
        if (sec.classList.contains('activated')) {
            sec.textContent = 'Done!'
            
        } else {
            sec.textContent = ''
        }
    })

    sec.addEventListener('mouseover', () => {
        if (sec.classList.contains('topic1')) {
            span.textContent = 'Morethan nothing'
        } else if (sec.classList.contains('topic2')) {
            span.textContent = 'Woooooo'
        } else {
            span.textContent = ''
        }
    })
})

