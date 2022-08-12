import { products } from '../data/data'

const initialState = {
  product:[]
}

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR AL CARRTIO": {
      let nuevoProducto = products.find(item => item.id === action.payload) //NUevo producto en nuestros
      let productoEnCArrito = state.product.find(item => item.id === nuevoProducto.id) //Si ese nuevo producto existe en nuestr carrito

      // Si el producto nuevo ya esta en el carrito, hacemos el condicional, Aca trabajamos con el state

      return productoEnCArrito ? "Le vamos a sumar a una propiedad que existe que se llama cantidad + 1" : "Creamos la propiedad cantidad: 1"

    }
      
    
  
    default:
      break;
  }
}