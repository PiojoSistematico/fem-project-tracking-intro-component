import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-devices.svg";

function App() {
  return (
    <main>
      <header>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <nav>
          <ul>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>

            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="main-section">
        <picture>
          <img src={illustration} alt="" />
        </picture>
        <div>
          <div>
            <span>New</span>
            <span>Monograph Dashboard</span>
          </div>
          <h1>Powerful insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
          <div>
            <button>Schedule a demo</button>
            <span>to see a live preview</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
