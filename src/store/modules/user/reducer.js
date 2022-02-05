import produce from 'immer';

// import { ActionTypes } from './types;'

const initialState = {
    newValue: ''
};

const user = (state = initialState, action) => {
    return produce(state, draft => {
        // console.log(state, draft)
        // switch (action.type) {
        //     case ActionTypes.addProductToCartSuccess: {
        //         const { product } = action.payload;

        //         const productInCartIndex = draft.items.findIndex(item => item.product.id === product.id);

        //         if(productInCartIndex >= 0) {
        //             draft.items[productInCartIndex].quantity++;
        //         } else {
        //             draft.items.push({
        //                 product,
        //                 quantity: 1
        //             })
        //         }

        //         break;
        //     }
        //     case ActionTypes.addProductToCartFailure: {
        //         draft.failedStockCheck.push(action.payload.productId)

        //         break;
        //     }
        //     default: {
        //         return draft;
        //     }
        // }
    })
}

export default user;

