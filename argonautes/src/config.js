const hostProd = 'https://argonautes-mb.herokuapp.com/api/members';
const hostDev = 'http://localhost:8080/api/members';

const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? hostDev : hostProd;


export default apiUrl;