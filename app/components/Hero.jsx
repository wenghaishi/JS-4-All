function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen bg-black flex-col items-center justify-center p-24"
    >
      <div className="z-30 flex flex-col items-center justify-center lg:mt-10 p-20 rounded-xl">
        <h1 className="z-30 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 lg:text-9xl font-black mb-10">
          JS-4-all
        </h1>
        <h2 className=" mb-10 font-black text-lg lg:text-3xl">
          Learn javascript anytime, anywhere! If you are a...
        </h2>
        <div className="flex flex-row gap-4 text-center justify-center align-middle">
          <h2 className="font-black px-6 py-2 md:px-10 md:py-6 border border-black/20 rounded-2xl">
            Student
          </h2>
          <h2 className="font-black px-6 py-2 md:px-10 md:py-6 border border-black/20 rounded-2xl">
            Aspiring developer
          </h2>
          <h2 className="font-black px-6 py-2 md:px-10 md:py-6 border border-black/20 rounded-2xl">
            Hobbyist
          </h2>
        </div>
      </div>
    </div>
  );
}
export default Hero;
