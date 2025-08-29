//Copy Number and show an alert

const copyBtn1 = document.getElementById('emergency-copy');

copyBtn1.addEventListener('click', async () => {
    const value = document.getElementById('nation-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Emergency Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});


const copyBtn2 = document.getElementById('police-copy');

copyBtn2.addEventListener('click', async () => {
    const value = document.getElementById('police-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Police Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});


const copyBtn3 = document.getElementById('fire-copy');

copyBtn3.addEventListener('click', async () => {
    const value = document.getElementById('fire-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Fire Service Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});



const copyBtn4 = document.getElementById('ambulance-copy');

copyBtn4.addEventListener('click', async () => {
    const value = document.getElementById('ambulance-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Ambulance Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});



const copyBtn5 = document.getElementById('women-copy');

copyBtn5.addEventListener('click', async () => {
    const value = document.getElementById('women-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Women & Child Helpline Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});


const copyBtn6 = document.getElementById('anti-copy');

copyBtn6.addEventListener('click', async () => {
    const value = document.getElementById('anti-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Anti Corruption Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});



const copyBtn7 = document.getElementById('electricity-copy');

copyBtn7.addEventListener('click', async () => {
    const value = document.getElementById('electricity-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Electricity Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});



const copyBtn8 = document.getElementById('brac-copy');

copyBtn8.addEventListener('click', async () => {
    const value = document.getElementById('brac-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Brac Helpline Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});



const copyBtn9 = document.getElementById('rail-copy');

copyBtn9.addEventListener('click', async () => {
    const value = document.getElementById('rail-number').innerText.trim();

    try {
        await navigator.clipboard.writeText(value);
        alert(`Railway Number ${value} Copied`)
    } catch (err) {
        alert('Error copying!')
    }
});
