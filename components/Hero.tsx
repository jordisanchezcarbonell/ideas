import Image from 'next/image';

const Logo = () => (
  <Image
    src="/js.svg"
    alt="logo"
    width={101}
    height={96}
    className="object-contain"
  />
);

const Title = () => (
  <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
    Explora los <span className="red-gradient"> diversos aspectos</span> de la
    estrategia militar.
  </h1>
);

const AnimeImage = () => (
  <div className="lg:flex-1 relative w-full h-[50vh] justify-center opacity-100">
    <Image src="/logo.svg" alt="anime" fill className="object-contain" />
  </div>
);

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Logo />
        <Title />
      </div>
      <AnimeImage />
    </header>
  );
}

export default Hero;
