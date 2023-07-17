import Dish from "./Dish";

const ContainerDish = () => {
  return (
    <section>
      <article className="container_dishes">
        <h4>Elige tu plato</h4>
        <div className="dishes">
          <Dish />
          <Dish />
          <Dish />
          <Dish />
        </div>
      </article>
    </section>
  );
};

export default ContainerDish;
