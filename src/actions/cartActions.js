export const addToCart = order => ({
    type: 'ADD_TO_CART',
    order
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});
