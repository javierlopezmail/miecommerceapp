export const getProducts = () => {
    return new Promise((resolve) => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            resolve(data)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
        })
}