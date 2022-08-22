export const initialState = {
    basket: [
        {
            id:55,
            title:'fdsdsfs',
            price:99,
            rating:4,
            img:'https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png'
        }
    ],
}

const reducer = (state, action)=>{
    switch(action.type) {
        case "ADD_TO_BASKET" :
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
        case "DELETE_FROM_BASKET":
            let new_Basket = [...state.basket]
            const index = state.basket.findIndex((item)=>item.id ===action.payload)
            new_Basket.splice(index,1)
            return {
                ...state,
                basket: new_Basket
            }
        default:
            return state
    }
}

export default reducer