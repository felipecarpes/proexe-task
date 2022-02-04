import { ActionTypes } from "./types";

export function addProductToCartRequest(product) {
    return {
        type: ActionTypes.addProductToCartRequest,
        payload: {
            product
        }
    }
}

export function addProductToCartSuccess(product) {
    return {
        type: ActionTypes.addProductToCartSuccess,
        payload: {
            product
        }
    }
}

export function addProductToCartFailure(productId) {
    return {
        type: ActionTypes.addProductToCartFailure,
        payload: {
            productId
        }
    }
}