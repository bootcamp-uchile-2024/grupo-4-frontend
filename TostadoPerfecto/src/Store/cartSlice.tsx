/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categorias, Tipo } from '../Servicios/interfaces';

// interface CartItem {
//   id: number;
//   nombre: string;
//   precio: number;
//   quantity: number;
// }


interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
  marca: string;
  origen: string;
  tipo: Tipo;
  formato: string;
  fecha: string;
  categorias: Categorias;
  destacado: boolean;
  quantity: number;
}


interface CartState {
  items: Producto[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Agregar producto al carrito
    addProductToCart: (state, action: PayloadAction<{ producto: Producto; quantity: number }>) => {
      const { producto, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === producto.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Si ya existe, solo sumamos la cantidad
      } else {
        state.items.push({ ...producto, quantity });
      }
    },
    // Modificar cantidad de un producto en el carrito
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      } else {
        // Si la cantidad es cero, remover el producto
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    // Vaciar carrito
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProductToCart, updateCartItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
