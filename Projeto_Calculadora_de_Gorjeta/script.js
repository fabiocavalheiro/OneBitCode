function calculateTip(event) {
    event.preventDefault()
    let bill = parseFloat(document.getElementById('bill').value.replace(",", "."));
    let service = document.getElementById('service').value
    let numPeople = document.getElementById('people').value

    if(bill == '' || service == 0) {
        alert('Por favor, preencha os valores')
        return
    }
    if(numPeople == '' || numPeople <= 1) {
        numPeople = 1
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }
    let total = (bill * service) / numPeople
    total = total.toFixed(2)
    document.getElementById('tip').innerHTML = total
    document.getElementById('totalTip').style.display = "block"
}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "none"

document.getElementById('tipsForm').addEventListener('submit', calculateTip)