import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface Product {
  id: number;
  restaurant_id: number;
  name: string;
  img: string;
  composition: string;
  price: number;
  quantity: number;
  extras: Extra[];
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await AsyncStorage.getItem('@storm:products');
      //await AsyncStorage.clear();

      if (response) {
        setProducts(JSON.parse(response));
      }
    }
    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const sameProduct = products.find(
        oldProduct => oldProduct.id === product.id,
      );

      if (sameProduct) {
        const newProducts = [...products];
        const productIndex = newProducts.findIndex(
          oldProduct => oldProduct.id === product.id,
        );

        if (productIndex !== -1) {
          newProducts[productIndex].quantity += 1;

          setProducts(newProducts);
        }

        await AsyncStorage.setItem('@storm:cart', JSON.stringify(newProducts));
        return;
      }

      const newProduct = {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        restaurant_id: product.restaurant_id,
        composition: product.composition,
        quantity: 1,
        extras: product.extras,
      };

      setProducts([...products, newProduct]);

      await AsyncStorage.setItem(
        '@storm:products',
        JSON.stringify([...products, newProduct]),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newProducts = [...products];
      const productIndex = newProducts.findIndex(product => product.id === id);

      if (productIndex !== -1) {
        newProducts[productIndex].quantity += 1;

        setProducts(newProducts);
      }

      await AsyncStorage.setItem('@storm:cart', JSON.stringify(newProducts));
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProducts = [...products];
      const productIndex = newProducts.findIndex(product => product.id === id);

      if (productIndex !== -1) {
        if (newProducts[productIndex].quantity > 1) {
          newProducts[productIndex].quantity -= 1;
        }

        setProducts(newProducts);
      }

      await AsyncStorage.setItem('@storm:cart', JSON.stringify(newProducts));
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
