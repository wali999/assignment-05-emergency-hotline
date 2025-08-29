


const callHistoryData = []

// function
function calling(id) {
    const service = document.getElementById(id).innerText
    return service
}





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
//Copying
document.getElementById('emergency-copy')
    .addEventListener('click', function () {

        alert('National Emergency Number Copied')
    })

//Coin decrease section
const coins = document.getElementsByClassName('call')
let coinBalance = parseInt(document.getElementById('coin-balance').innerText)
for (const coin of coins)
    coin.addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }
        coinBalance = coinBalance - 20
        document.getElementById('coin-balance').innerText = coinBalance

    })

// History Calling - Emergency Call
document.getElementById('emergency-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "National Emergency",
            Number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)

        alert('📞Calling ' + calling('nation-em') + ' ' + calling('nation-number') + '...')
    })


// History Calling - police Call
document.getElementById('police-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Police",
            Number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('police-service') + ' ' + calling('police-number') + '...')
    })


// History Calling - Fire Service
document.getElementById('fire-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Fire Service",
            Number: 999,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('fire-service') + ' ' + calling('fire-number') + '...')
    })


// History Calling - Ambulance Service
document.getElementById('ambulance-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Ambulance",
            Number: '1994-999999',
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('ambulance-service') + ' ' + calling('ambulance-number') + '...')
    })

// History Calling - Women and Child Service
document.getElementById('women-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Women & Child Helpline",
            Number: '109',
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('women-service') + ' ' + calling('women-number') + '...')
    })


// History Calling - anti Service
document.getElementById('anti-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Anti-Corruption",
            Number: '106',
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('anti-service') + ' ' + calling('anti-number') + '...')
    })


// History Calling - electricity Service
document.getElementById('electricity-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Electricity Outage",
            Number: '16216',
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('electricity-service') + ' ' + calling('electricity-number') + '...')
    })

// History Calling - brac Service
document.getElementById('brac-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Brac Helpline",
            Number: 16445,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('brac-service') + ' ' + calling('brac-number') + '...')
    })


// History Calling - Rail Service
document.getElementById('rail-call')
    .addEventListener('click', function () {
        if (coinBalance < 20) {
            alert('You Need More Coin')
            return;
        }

        const data = {
            name: "Bangladesh Railway",
            Number: 163,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data)
        alert('📞Calling ' + calling('rail-service') + ' ' + calling('rail-number') + '...')
    })


// 6. Show data in Call History Section
//Emergency Call Service
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


//Police Help line
document.getElementById("police-call").addEventListener("click", function () {
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

//Fire service
document.getElementById("fire-call").addEventListener("click", function () {
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


//Ambulance service
document.getElementById("ambulance-call").addEventListener("click", function () {
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


//Women and Child service
document.getElementById("women-call").addEventListener("click", function () {
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


//anti service
document.getElementById("anti-call").addEventListener("click", function () {
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


//electricity service
document.getElementById("electricity-call").addEventListener("click", function () {
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


//brac service
document.getElementById("brac-call").addEventListener("click", function () {
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


//Railway service
document.getElementById("rail-call").addEventListener("click", function () {
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