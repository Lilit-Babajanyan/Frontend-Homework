import { Basket } from "./components/Basket.tsx";
import { ProductList } from "./components/ProductList.tsx";
import type { Product } from "./helpers/types.ts";
import { useState } from "react";

type CartItem = {
  product: Product;
  quantity: number;
};

export default function App() {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Hope",
      price: 30,
      picture:
        "https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-DEWY-HOPE_1440x.jpg?v=1762200490&format=pjpg",
    },
    {
      id: 2,
      name: "Lucky",
      price: 25,
      picture:
        "https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-DEWY-LUCKY_1440x.jpg?v=1764122517&format=pjpg",
    },
    {
      id: 3,
      name: "Grace",
      price: 27,
      picture:
        "https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-MATTE-GRACE_1440x.jpg?v=1764122517&format=pjpg",
    },
    {
      id: 4,
      name: "Grateful",
      price: 25,
      picture:
        "https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-DEWY-GRATEFUL_1440x.jpg?v=1764122517&format=pjpg",
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { product: product, quantity: 1 }];
    });
  };

  const increaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <div className="app-shell min-h-screen p-4 text-white sm:p-8">
      <main className="app-content mx-auto max-w-7xl">
        <ProductList products={products} addToCart={addToCart} />
        <Basket
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          deleteCart={deleteCart}
        />
      </main>
    </div>
  );
}
