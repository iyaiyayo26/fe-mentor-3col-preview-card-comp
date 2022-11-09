import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="p-10 lg:p-20">
        <div className=" w-60 rounded-md mx-auto md:flex md:w-full md:h-[400px] lg:h-[500px] overflow-hidden">
          {/* card 1 */}
          <Card className="bright-orange" icon="./images/icon-sedans.svg" title="sedans" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." />

          {/* card 2 */}
          <Card className="dark-cyan" icon="./images/icon-suvs.svg" title="suvs" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." />

          {/* card 3 */}
          <Card className="very-dark-cyan" icon="./images/icon-luxury.svg" title="luxury" description="Cruise in the best car brands without the bloated prices. Enjoy the enchanted confort of a luxury rental and arrive in style." />
        </div>
      </div>
    </>
  );
}

export default App;
