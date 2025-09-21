import { atom, selector } from "recoil";


//Save,get
export const cartState = atom({
    key: 'cartstate',
    default: [],
    effects_UNSTABLE: [
        // get
        ({ setSelf }) => {
            const saved = localStorage.getItem('cart');
            if (saved != null) {
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
        //   return cart.length;
        return cart.reduce((total, item) => total + item.qty, 0);
    },
})
export const totalPrice = selector({
    key: 'TotalPriceKey',
    get: ({ get }) => {

        const cart = get(cartState);
        return cart.reduce((total, item) => total + (item.price * item.qty), 0);
    },
})
// filter & search
// save
export const productsState = atom({
    key: 'productsState',
    default: [],
});
// defults
export const categoryAtom = atom({
    key: 'categoryAtom',
    default: "All",
})
export const priceRangeState = atom({
    key: 'priceRangeState',
    default: { min: 0, max: 1000 }
})
export const searchAtom = atom({
    key: 'searchAtom',
    default: "",
})
// Filter
export const productFilterSelector = selector({
    key: 'productFilter',
    get: ({ get }) => {
        const allProducts = get(productsState);
        const category = get(categoryAtom);
        const priceRange = get(priceRangeState);
        const searchTerm = get(searchAtom);

        let filtered = allProducts;
        if (category !== "All") {
            filtered = filtered.filter(product => product.category.toLowerCase() === category.toLowerCase());
            // toLowerCase عشان ميفرقش كبير من صغير 

        }
        // فتره
        filtered = filtered.filter(product =>
            product.price >= priceRange.min && product.price <= priceRange.max
        );
        // search
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return filtered;
    }
})
// mapping
export const avalibleCategorySelector = selector({
    key: 'avalibleCategory',
    get: ({ get }) => {
        const allProducts = get(productsState);
        const categories = [...new Set(
            allProducts.map(Product => Product.category))]
        return ["All", ...categories];
    }
})

export const randomProductSelector = selector({
    key: 'randomProductSelector',
    get: ({ get }) => {
        const products = get(productsState);
        const categories = [...new Set(
            products.map(Product => Product.category))]
        return categories.map(cat => {
            const productsInCat = products.filter(product => product.category === cat);
            const randomIndex = Math.floor(Math.random() * productsInCat.length);
            return productsInCat[randomIndex];
        })
    }
})

