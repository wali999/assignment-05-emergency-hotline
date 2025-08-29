
//function



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
const callHistoryData = []

// function
function calling(id) {
    const service = document.getElementById(id).innerText
    return service
}



// 5. Call buttons
//Copying
document.getElementById('emergency-copy')
    .addEventListener('click', function () {

        alert('National Emergency Number Copied')
    })


//Calling
document.getElementById('emergency-call')
    .addEventListener('click', function () {

        const data = {
            name: "National Emergency",
            Number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)

        alert('📞Calling ' + calling('nation-em') + ' ' + calling('nation-number') + '...')
    })

document.getElementById('police-call')
    .addEventListener('click', function () {
        alert('📞Calling ' + calling('police-service') + ' ' + calling('police-number') + '...')
    })


// 6. Call History Section

document.getElementById("emergency-call").addEventListener("click", function () {
    const callHistoryContainer = document.getElementById("call-history-container")
    callHistoryContainer.innerText = ""

    for (const data of callHistoryData) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div class="flex justify-between items-center bg-[#fafafa p-3 rounded-md shadow-sm">
                    <div>
                        <h1 class="font-semibold">${data.name}</h1>
                        <p class="text-[#5c5c5c]">${data.Number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                </div>
        `

        callHistoryContainer.appendChild(div)


    }
})