import { tours } from "../data";
import { useState } from 'react';
import Title from "./Title";
import Tour from "./Tour";


const Tours = () => {
  const [toursData, setToursData]= useState(tours);

  const removeTour = (id) => {
    const filteredTours = toursData.filter(tour => tour.id !== id);
    setToursData(filteredTours);
  };

  const restoreTours = () => {
    setToursData(tours);
  };


  return (
    <section className="section tours" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onRemove={removeTour} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
