import { getShoppingCart } from "../../utilities/fakedb"

const cartProductLoader = async() =>{
    const productsData = await fetch('././products.json')
    const products = await productsData.json()
    // console.log(products)

    const storedData = getShoppingCart()
    const cartItems = [];

    // const storedItemData = storedData.find(pd=>pd.id === )
    for(const id in storedData){
        
        const storedItem = products.find(pd=>pd.id === id)
        if(storedItem){
            cartItems.push(storedItem)
        }
    }
    // console.log()

    return cartItems
}

export default cartProductLoader;