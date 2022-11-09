import "./App.css";

function App() {
  return (
    <>
      <div className="p-10 lg:p-20">
        <div className=" w-60 rounded-md mx-auto md:flex md:w-full md:h-[400px] lg:h-[500px] overflow-hidden">
          {/* card 1 */}
          <div className="bg-bright-orange">
            <div className="px-8 py-8 lg:px-14 lg:py-10">
              <img src="./images/icon-sedans.svg" alt="svg-icon" className="w-10 lg:w-20" />
              <p className="text-white uppercase my-6 lg:my-12 font-big-shoulders text-4xl">sedans</p>
              <p className="text-white mb-5 lg:mb-10 lg:mr-10 font-lexend-deca text-sm text-transparent-white">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
              <button className="bg-white px-6 py-3 rounded-full text-bright-orange font-lexend-deca text-xs hover:cursor-pointer hover:bg-bright-orange hover:text-white hover:ring-1 hover:ring-inset hover:ring-white">Learn More</button>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-dark-cyan">
            <div className="px-8 py-8 lg:px-14 lg:py-10">
              <img src="./images/icon-suvs.svg" alt="svg-icon" className="w-10 lg:w-20" />
              <p className="text-white uppercase my-6 lg:my-12 font-big-shoulders text-4xl">suvs</p>
              <p className="text-white mb-5 lg:mb-10 lg:mr-10 font-lexend-deca text-sm text-transparent-white">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
              <button className="bg-white px-6 py-3 rounded-full text-dark-cyan font-lexend-deca text-xs hover:cursor-pointer hover:bg-dark-cyan hover:text-white hover:ring-1 hover:ring-inset hover:ring-white">Learn More</button>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-very-dark-cyan">
            <div className="px-8 py-8 lg:px-14 lg:py-10">
              <img src="./images/icon-luxury.svg" alt="svg-icon" className="w-10 lg:w-20" />
              <p className="text-white uppercase my-6 lg:my-12 font-big-shoulders text-4xl">luxury</p>
              <p className="text-white mb-5 lg:mb-10 lg:mr-10 font-lexend-deca text-sm text-transparent-white">Cruise in the best car brands without the bloated prices. Enjoy the enchanted confort of a luxury rental and arrive in style.</p>
              <button className="bg-white px-6 py-3 rounded-full text-very-dark-cyan font-lexend-deca text-xs hover:cursor-pointer hover:bg-very-dark-cyan hover:text-white hover:ring-1 hover:ring-inset hover:ring-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
