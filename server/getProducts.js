const products = require ('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const filteredProducts = products.filter(
            (val) => val.price >= +(req.query.price)
        )
        return res.status(200).send(filteredProducts)
    }
    // const item = products.find((val) => val.id === +(req.params.id))
    // if (!item) {
    //     return res.status(500).send('Item not in list')
    // }
    res.status(200).send(products)
}

module.exports = getProducts
