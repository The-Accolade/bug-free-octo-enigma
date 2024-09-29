import { Carousel } from "flowbite-react";

function HomeCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <h1>FLowing...</h1>
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="carousel image"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="carousel image"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="carousel image"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="carousel image"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="carousel image"
        />
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
