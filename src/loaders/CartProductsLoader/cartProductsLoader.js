import { getShoppingCart } from "../../utilities/fakedb"

const cartProductLoader = async() =>{
    const productsData = await fetch('././products.json')
    const products = await productsData.json()

    const storedData = getShoppingCart()
    const cartItems = [];
    for(const id in storedData){
        
        const storedItem = products.find(pd=>pd.id === id)
        if(storedItem){
            const quantity = storedData[id]
            storedItem.quantity = quantity
            cartItems.push(storedItem)
        }
    }

    return cartItems
}

export default cartProductLoader;