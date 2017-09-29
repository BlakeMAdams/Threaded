import axios from 'axios';

// SERVICES FUNCTIONS

export function getBottoms() {
    console.log('getBottoms fired');
    return axios.get('http://localhost:3050/api/bottoms').then(res => res.data)
}

export function getShirts() {
    console.log('getShirts fired');
    return axios.get('http://localhost:3050/api/shirts').then(res => res.data)
}

export function getDresses() {
    console.log('getDresses fired');
    return axios.get('http://localhost:3050/api/dresses').then(res => res.data)
}

export function getPatterns() {
    console.log('getPatterns fired');
    return axios.get('http://localhost:3050/api/patterns').then(res => res.data)
}

export function getImage(horiz, vert) {
    console.log(horiz, vert);
    console.log('getImage fired');
    return axios.get('https://unsplash.it/' + horiz + '/' + vert).then(res => res)
}
export function getList() {
    console.log('getList fired');
    return axios.get('https://unsplash.it/list').then(res => res.data)
}
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
// export function getSavedList() {
//     console.log('getList fired');
// 	return axios.get('https://unsplash.it/list').then(res => res.data)
// }
// export function makeSavedList() {
//     console.log('getList fired');
// 	return axios.post('https://unsplash.it/list').then(res => res.data)
// }