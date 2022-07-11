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
            span.textContent = 'Lectures 1,2,3 and Topic 1 tutorial'
        } else if (sec.classList.contains('topic2')) {
            span.textContent = 'Lectures 4,5,6 and Topic 2 tutorial'
        } else if (sec.classList.contains('topic3')) {
            span.textContent = 'Lectures 7,8,9, Topic 3 tutorial and Assignment 1 - Functions'
        } else if (sec.classList.contains('topic4')) {
            span.textContent = 'Lectures 10,11,12 Topic 4 tutorial'
        } else if (sec.classList.contains('topic5')) {
            span.textContent = 'Lectures 13,14,15, Topic 5 tutorial and Assignment 2 - Limits'
        } else if (sec.classList.contains('topic6')) {
            span.textContent = 'Lectures 16,17,18, Topic 6 tutorial, Assignment 3 - derivatives and Assignment 4'
        } else if (sec.classList.contains('topic7')) {
            span.textContent = 'Lectures 19,20,21 and Topic 7 tutorial'
        } else if (sec.classList.contains('topic8')) {
            span.textContent = 'Lectures 22,23,24, Topic 8 tutorial and Assignment 5'
        } else if (sec.classList.contains('topic9')) {
            span.textContent = 'Lectures 25,26,27, Topic 9 tutorial, Assignment 6 and Assignment 7'
        } else if (sec.classList.contains('topic10')) {
            span.textContent = 'Lectures 28,29,30,31 and Assignment 8'
        } else if (sec.classList.contains('topic11')) {
            span.textContent = 'Lecture 32, revision and Assignment 9'
        } else {
            span.textContent = ''
        }
    })
})

