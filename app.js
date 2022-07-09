var plainAlphabet = 'abcdefghijklmnopqrstuvwxyz:()!¡,\' '
var encryptedAlphabet = 'qw,ert(yuio\'pa:sdfg!hjklz¡xcv)bnm '

var readText = (caja) => {
    var textBox
    if (caja === 1) {
        textBox = document.getElementById('decryptedBox').value
    } else {textBox = document.getElementById('encryptedBox').value}
    return textBox
}

var encrypt = () => {
    textForEncrypt = readText(1)
    textEncrypted = ''
    for (var i = 0; i < textForEncrypt.length; i++) {
        var i2 = 0
        while (i2 < plainAlphabet.length) {
            if (textForEncrypt[i] === plainAlphabet[i2]) {
                textEncrypted += encryptedAlphabet[i2]
                i2 = plainAlphabet.length
            } else i2++
        }
    }
    document.getElementById('encryptedBox').value = textEncrypted
}

var decrypt = () => {
    textForDecrypt = readText(2)
    textDecrypted = ''
    for (var i = 0; i < textForDecrypt.length; i++) {
        var i2 = 0
        while (i2 < encryptedAlphabet.length) {
            if (textForDecrypt[i] === encryptedAlphabet[i2]) {
                textDecrypted += plainAlphabet[i2]
                i2 = encryptedAlphabet.length
            } else i2++
        }
    }
    document.getElementById('decryptedBox').value = textDecrypted
}

document.getElementById('decryptedBox').addEventListener('change', function () {readText(1)})
document.getElementById('encryptedBox').addEventListener('change', function () {readText(2)})
document.getElementById('encrypt').addEventListener('click', function () {encrypt()})
document.getElementById('decrypt').addEventListener('click', function () {decrypt()})