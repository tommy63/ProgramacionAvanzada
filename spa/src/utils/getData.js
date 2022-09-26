const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxZjMwOTBhZTYxZjAwMjEzNzE1NzYiLCJpYXQiOjE2NjQyMTc4NjV9.H-NanrcxmR7GAAzW3joMx_qmDvUCHNpXodL0AF5HSs8';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;



    try 
    {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch(error) 
    {
        console.log('Fetch Error!!', error);
    };
    
};

export default getData