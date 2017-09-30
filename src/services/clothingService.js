import axios from 'axios';

// SERVICES FUNCTIONS


export function getClothing() {
    console.log('getClothing fired');
    return axios.get('/api/getClothing').then(res => {
        return res.data;
    })

}
export function getGallery() {
    console.log('getGallery fired');
    return axios.get('/api/getGallery').then(res => {
        return res.data;
    })
}
export function getMiniGallery() {
    console.log('getMiniGallery fired');
    return axios.get('/api/getMiniGallery').then(res => {
        return res.data;
    })
}
export function getMaterials() {
    console.log('get Materials fired');
    return axios.get('/api/getMaterials').then(res => {
        return res.data;
    })

}
