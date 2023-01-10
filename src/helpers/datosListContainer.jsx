import datos from "../data/Data.json";

export const datosListContainer = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(datos)
        }, 500)
    })
}

export const datositemDetailId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const item = datos.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: 'No encontramos tu búsqueda'
                })
            }
        }, 500)
    })
}