import datos from "../data/Data.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(datos)
        }, 2000)
    })
}