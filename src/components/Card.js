export default function Card({ className = "", title, description, icon }) {
  return (
    <div className={`bg-${className}`}>
      <div className="px-8 py-8 lg:px-14 lg:py-10">
        <img src={icon} alt={`${title}-icon`} className="w-10 lg:w-20" />
        <p className="text-white uppercase my-6 lg:my-12 font-big-shoulders text-4xl">{title}</p>
        <p className="text-white mb-5 lg:mb-10 lg:mr-10 font-lexend-deca text-sm text-transparent-white">{description}</p>
        <button className={`bg-white px-6 py-3 rounded-full text-${className} font-lexend-deca text-xs hover:cursor-pointer hover:bg-${className} hover:text-white hover:ring-1 hover:ring-inset hover:ring-white`}>Learn More</button>
      </div>
    </div>
  );
}
