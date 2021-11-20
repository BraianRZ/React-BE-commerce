import Item from './Item'

const products = [
    {id: '1', name: 'Tensiometro', description  '', stock: 5},
    {id: '2', name: 'Termometro', description '', stock: 1},
    {id: '3', name: 'Oximetro', description '', stock: 2},
];

const fetchProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        if (products.length > 0) {
            resolve(products);

        } else {
            reject('No hay Stock');
        }
    }, 2000);
});

fetchProducts
    .then((products) => {
        console.log(products);
    }) 
    .catch((err) => console.log(err));

    export default Item