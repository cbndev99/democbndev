import img1 from "../assets/img/p4.jpg";

function HomePage() {
  return (
    <div className=" w-full py-10 px-16 bg-zinc-800 flex justify-center">
      <div className="relative flex justify-end items-center gap-10 lg:min-w-[80rem]">
        <div className="absolute left-0 z-20 px-16">
          <h1 className="text-6xl font-extrabold text-white">
            Redefining Modern Spaces <br></br> with Exceptional Craftsmanship
          </h1>
          <div className="bg-slate-200 px-5 py-6 mt-8 opacity-70 rounded-lg italic">
            <h2 className="text-black font-medium">
              We Custom-Made Premium Solutions tailored to your needs <br />
              whether its gates, fencing, roofing, and many more.
            </h2>
          </div>
          <button className="btn w-36 mt-32">Contact Us</button>
        </div>
        <div className="my-10 z-10">
          <div className="relative">
            <div className="absolute -top-5 -left-5 size-24 bg-black opacity-15 motion-preset-oscillate motion-duration-2000"></div>
            <div className="absolute -top-3 -left-3 size-24 bg-black opacity-15"></div>
            <img
              src={img1}
              alt="hero-img"
              loading="lazy"
              className="min-w-[700px] h-[800px] object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 size-24 bg-orange-600 opacity-15"></div>
            <div className="absolute -bottom-3 -right-3 size-24 bg-orange-600 opacity-15 motion-preset-oscillate motion-duration-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
