import P2 from "../assets/img/p2.jpg";

function HomePage() {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="">
        <h1 className="text-6xl font-extrabold">
          Redefining Modern Spaces <br></br> with Exceptional Craftsmanship
        </h1>
        <h2 className="mt-8">
          Custom-made solutions tailored to your needs—whether it’s gates,
          balcony fencing, roofing, and many more.
        </h2>
        <button>Contact Us</button>
      </div>
      <div>
        <img src={P2} alt="hero-img" />
      </div>
    </div>
  );
}

export default HomePage;
