import {
  useContext,
  createContext,
  useState,
} from 'react';

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Mechanical Keyboard',
      image:
        'https://www.meckeys.com/wp-content/uploads/2022/02/Ducky-One-3-Yellow-SF-5-min-scaled.jpg',
      price: 5000,
    },
    {
      id: 2,
      name: 'Wired Mouse',
      image:
        'https://www.meckeys.com/wp-content/uploads/2021/06/Ducky_feather_BlackWhite_1-600x432.jpg',
      price: 1000,
    },
    {
      id: 3,
      name: 'Mouse Pad',
      image:
        'https://www.meckeys.com/wp-content/uploads/2021/02/Glorious_Helios2-scaled.jpg',
      price: 500,
    },
    {
      id: 4,
      name: 'Coiled Cable',
      image:
        'https://www.meckeys.com/wp-content/uploads/2022/09/Rainbow-Meckeys-Coiled-Cable-min-scaled.jpg',
      price: 700,
    },
  ]);

  const [cart, setCart] = useState([]);

  const getCartTotal = (cart) => {
    return cart?.reduce(
      (total, item) => total + item.price,
      0
    );
  };

  const addItemToCart = (item) => {
    const idx = cart.findIndex(
      (ele) => ele.id === item.id
    );
    if (idx !== -1) {
      return;
    }
    setCart([...cart, item]);
  };

  const removeItemFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );
    setCart(updatedCart);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        cart,
        getCartTotal,
        addItemToCart,
        removeItemFromCart,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  return useContext(ShopContext);
};

export { ShopProvider, useShop };
