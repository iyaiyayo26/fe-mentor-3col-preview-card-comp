import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-stretch rounded-lg mx-20 md:flex-row overflow-hidden">
        <section className="p-8 bg-bright-orange">
          <img src="./images/icon-sedans.svg" alt="sedans-icon" />
          <h1 className="uppercase my-8 text-white font-big-shoulders text-3xl">Sedans</h1>
          <p className="text-transparent-white font-lexend-deca text-sm">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button className="mt-7 md:mt-12">
            <a href="#" className="bg-white rounded-full px-5 py-2 font-lexend-deca text-sm text-bright-orange hover:text-white hover:bg-bright-orange hover:border hover:border-white">
              Learn More
            </a>
          </button>
        </section>

        <section className="p-8 bg-dark-cyan ">
          <img src="./images/icon-suvs.svg" alt="suvs-icon" />
          <h1 className="uppercase my-8 text-white font-big-shoulders text-3xl">suvs</h1>
          <p className="text-transparent-white font-lexend-deca text-sm">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
          <button className="mt-7 md:mt-12">
            <a href="#" className="bg-white rounded-full px-5 py-2 font-lexend-deca text-sm text-dark-cyan hover:text-white hover:bg-dark-cyan hover:border hover:border-white">
              Learn More
            </a>
          </button>
        </section>

        <section className="p-8 bg-very-dark-cyan">
          <img src="./images/icon-luxury.svg" alt="luxury-icon" />
          <h1 className="uppercase my-8 text-white font-big-shoulders text-3xl">luxury</h1>
          <p className="text-transparent-white font-lexend-deca text-sm">Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.</p>
          <button className="mt-7 md:mt-12">
            <a href="#" className="bg-white rounded-full px-5 py-2 font-lexend-deca text-sm text-very-dark-cyan hover:text-white hover:bg-very-dark-cyan hover:border hover:border-white">
              Learn More
            </a>
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
