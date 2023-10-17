import MOCK from './datos_mock/MOCK'

export const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK)
        }, 1000)
    })
}