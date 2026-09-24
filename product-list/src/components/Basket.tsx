import type { Product } from "../helpers/types.ts";

type CartItem = {
  product: Product;
  quantity: number;
};

type Props = {
  cart: CartItem[];
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  deleteCart: () => void;
};

export function Basket({
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteCart,
}: Props) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <section className="basket-panel mx-auto mt-12 max-w-7xl">
      <div className="basket-panel__header flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="basket-eyebrow">Your selection</p>
          <h2 className="text-3xl tracking-tight sm:text-4xl">Shopping bag</h2>
        </div>
        <span className="basket-count">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="basket-empty">
          <span className="basket-empty__mark">+</span>
          <p>Your bag is waiting for a little color.</p>
          <span>Add a shade from the collection to get started.</span>
        </div>
      ) : (
        <div className="basket-layout">
          <div className="basket-items">
            {cart.map((item) => (
              <article className="basket-item" key={item.product.id}>
                <div className="basket-item__image">
                  <img src={item.product.picture} alt={item.product.name} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3>{item.product.name}</h3>
                  <p>Liquid blush · ${item.product.price} each</p>
                  <div
                    className="quantity-control"
                    aria-label={`Quantity for ${item.product.name}`}
                  >
                    <button
                      type="button"
                      aria-label={`Remove one ${item.product.name}`}
                      onClick={() => decreaseQuantity(item.product.id)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      aria-label={`Add one ${item.product.name}`}
                      onClick={() => increaseQuantity(item.product.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <strong className="basket-item__price">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </strong>
              </article>
            ))}
          </div>

          <aside className="basket-summary">
            <div className="flex items-center justify-between gap-4">
              <span>Subtotal</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <p>Checkout</p>

            <button
              type="button"
              onClick={deleteCart}
              className="rounded-full border border-black/30 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-black"
            >
              Delete all
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
