function criaObjeto(data) {
    const obj_data = {
        dia: `${data[0]}${data[1]}`,
        mes: `${data[3]}${data[4]}`,
        ano: `${data[6]}${data[7]}${data[8]}${data[9]}`
    };

    return obj_data;
}
module.exports = criaObjeto;