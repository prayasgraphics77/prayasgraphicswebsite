export default function Newsletter() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      <div className="flex flex-col items-center justify-center rounded-[32px] bg-zinc-100 px-6 py-20 shadow-sm md:py-28">
        <h2 className="max-w-xl text-center font-heading text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
          Subscribe to our newsletter and get 15% off your first purchase!
        </h2>
        <p className="mt-4 text-center text-sm font-medium text-zinc-500">
          Subscribe to receive all our updates and exclusive offers.
        </p>
        
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="flex-1 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-medium outline-none transition-colors focus:border-zinc-300"
          />
          <button className="flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
