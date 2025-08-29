



// 4. Heart icons section
const hearts = document.getElementsByClassName('heart')
const heartBalance = parseInt(document.getElementById('heart-balance').innerText)

let sum = 0
for (const heart of hearts)
    heart.addEventListener('click', function () {
        sum++
        const totalHeartBalance = heartBalance + sum
        document.getElementById('heart-balance').innerText = totalHeartBalance
    })




// 5. Call buttons
document.getElementById('emergency-copy')
    .addEventListener('click', function () {
        alert('National Emergency Number Copied')
    })
document.getElementById('emergency-call')
    .addEventListener('click', function () {
        alert('National Emergency Number Calling')
    })


// 6. Call History Section