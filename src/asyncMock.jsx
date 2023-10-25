// // const products = [
// //     {
// //         id: '1',
// //         name: 'Iphone 12',
// //         price: 1000,
// //         category: 'celular',
// //         img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
// //         stock: 25,
// //         description: 'Descripción del Iphone 12'
// //     },
// //     {
// //         id: '2',
// //         name: 'Samsung S21',
// //         price: 800,
// //         category: 'celular',
// //         img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
// //         stock: 15,
// //         description: 'Descripción del Samsung 21'
// //     },
// //     {
// //         id: '3',
// //         name: 'Ipad 8va generación',
// //         price: 1200,
// //         category: 'tablet',
// //         img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
// //         stock: 20,
// //         description: 'Descripción del Ipad'
// //     }
// // ]

// // export const getProducts = () => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(products)
// //         }, 500)
// //     })
// // }

// // export const getProductById = (productId) => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(products.find(prod => prod.id === productId))
// //         }, 500)
// //     })
// // }

// // export const getProductsByCategory = (categoryId) => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(products.filter(prod => prod.category === categoryId))
// //         }, 500)
// //     })
// // }

// export const getProducts = () => {
//     return new Promise((resolve) => {
//         fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(data => {
//             resolve(data)
//         })
//     })
// }

// export const getProductById = (productId) => {
//     return new Promise((resolve) => {
//         fetch(`https://fakestoreapi.com/products/${productId}`)
//             .then(res => res.json())
//             .then(data => {
//                 resolve(data)
//             })
//     })
// }

// export const getProductsByCategory = (categoryId) => {
//     return new Promise((resolve) => {
//         fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
//             .then(res => res.json())
//             .then(data => {
//                 resolve(data)
//             })
//         })
// }