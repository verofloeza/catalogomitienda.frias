export const SELECT_PRODUCTOS = 'SELECT_PRODUCTOS';
export const FILTERED_PRODUCTOS = 'FILTERED_PRODUCTOS';

export const selectProductos = (id) => ({
    type: SELECT_PRODUCTOS,
    productosID: id,
}) 

export const filteredProductos = (id) => ({
    type: FILTERED_PRODUCTOS,
    categoriaID: id,
})