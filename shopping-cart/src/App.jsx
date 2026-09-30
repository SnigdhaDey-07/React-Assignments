import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section className="hero">
          <div className="hero-decoration">✿</div>

          <p className="hero-small">
            WELCOME TO
          </p>

          <h1>
            Blush <span>&</span> Bloom
          </h1>

          <p className="hero-text">
            A little shopping, a little happiness,
            and lots of pretty things ♡
          </p>
        </section>

        <ProductList />

        <Cart />
      </main>

      <footer>
        Made with ♡ for beautiful little moments
      </footer>
    </div>
  );
}

export default App;