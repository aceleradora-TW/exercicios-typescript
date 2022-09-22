function somaDobrada(umValor, outroValor) {
    if (umValor === outroValor) {
        return (umValor + outroValor) * 2

    } if (umValor < 1 || outroValor < 1) {
        return -1
    }
    return umValor + outroValor
}
module.exports = somaDobrada;
