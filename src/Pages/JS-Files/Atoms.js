import { atom, selector } from "recoil";



//Save,get
export const cartState = atom({
    key: 'cartstate',
    default: [],
   effects_UNSTABLE: [
        // get
        ({ setSelf }) => {
            const saved = localStorage.getItem('cart');
            if(saved!=null){
                setSelf(JSON.parse(saved))
            }
        },
        // save Witout refresh
        //   const resetCart = useResetRecoilState(cartState)
        ({ onSet }) => {
            onSet((newValue, isReset) => {
                if (isReset) {
                    localStorage.removeItem('cart');

                } else {
                    localStorage.setItem('cart', JSON.stringify(newValue));

                }
            }
            )
        }
    ],
})
export const cartCount = selector({
    key: 'cartCountKey',
    get: ({ get }) => {

        const cart = get(cartState);
        return cart.length;
    },
})
export const totalCount = selector({
    key: 'TotalItemsKey',
    get: ({ get }) => {

        const cart = get(cartState);
          return cart.length;
        // return cart.reduce((total,item)=>total+item.qty,0);
    },
})
export const totalPrice = selector({
    key: 'TotalPriceKey',
    get: ({ get }) => {

        const cart = get(cartState);
         return cart.reduce((total,item)=>total+(item.price*item.qty),0);
    },
})

// انتى دلوقتى منادي على ال فايل دا فين؟
