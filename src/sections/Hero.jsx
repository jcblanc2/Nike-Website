import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react";

const Hero = () => {
  const [bigSHoeImg, setBigSHoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      justify-center max-container min-h-screen">
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start
        w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-6 mb-14 mt-6 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap gap-16 mt-20 w-full">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center
        items-center xl:min-h-screen max-xl:py-40
        bg-primary bg-hero bg-cover bg-center">
        <img src={bigSHoeImg} alt="Image Shoe" width={610} height={500} className="object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard shoe={shoe} changeBigShoeImage={(shoe) => setBigSHoeImg(shoe)} bigShoeImg={bigSHoeImg} />
            </div>))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
