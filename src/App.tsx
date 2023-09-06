import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-devices.svg";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <main>
        <div className="shadow"></div>
        <Menu></Menu>
        <picture>
          <img src={illustration} alt="" />
        </picture>
        <section className="main-section">
          <div className="flex-row">
            <span className="black-span">New</span>
            <span className="uppercase">Monograph Dashboard</span>
          </div>
          <h1>Powerful insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
          <div className="flex-row">
            <button className="accent">Schedule a demo</button>
            <span className="uppercase">to see a preview</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
