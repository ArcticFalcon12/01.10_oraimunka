function atvalt() {
    var forint = parseInt(document.getElementById("huf").value)
    document.getElementById("eur").value = (forint/404).toFixed(2)
    document.getElementById("usd").value = (forint/376.48).toFixed(2)
    document.getElementById("jpy").value = (forint/2.88).toFixed(2)
}
