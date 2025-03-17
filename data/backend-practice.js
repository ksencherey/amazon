const xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
    console.log(JSON.parse(xhr.response))
})
xhr.open('GET', 'https://supersimplebackend.dev/products/first')
// This is asynchronous which means it doesn't wait and go straight to the next lines of code
xhr.send()