import type { Product } from "../helpers/types";

type props = {
  products: Product[];
  addToCart: (product: Product) => void;
};

export const ProductList: React.FC<props> = ({ products, addToCart }) => {
  return (
    <section className="product-section mx-auto w-full max-w-7xl">
      <div className="product-heading mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">
            Fresh color
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Shop the collection
          </h2>
        </div>

        <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 sm:inline-flex">
          {products.length} shades
        </span>
      </div>

      <div className="product-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="product-card group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-rose-300/40 hover:bg-white/[0.1] focus-within:ring-2 focus-within:ring-rose-300/70"
          >
            <div className="product-card__image relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 p-6">
              <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-950 backdrop-blur">
                New
              </span>

              <img
                src={product.picture}
                alt={product.name}
                className="h-full w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="product-card__details flex items-center justify-between gap-4 p-5">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Liquid blush · 4.5 ml
                </p>
              </div>

              <p className="shrink-0 text-lg font-semibold text-rose-200">
                ${product.price}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full rounded-lg bg-rose-400 px-4 py-2 font-semibold text-white"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};



