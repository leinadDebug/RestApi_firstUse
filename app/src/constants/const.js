export const baseUrl = "http://localhost:3000/"

export const CapitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const CreateDate = (date) => {
    let yy = date.slice(0, 4);
    let dd = date.slice(5, 7);
    let mm = date.slice(8, 10);
    return `${dd}/${mm}/${yy}`
}
