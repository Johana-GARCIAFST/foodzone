import burger from "../complementos/images/Ellipse 7.png";

const Dish = () => {
  return (
    <div className="dish">
      <div className="dish_container-image">
        <div className="dish_image">
          <img src={burger} alt="Burger" />
        </div>
      </div>
      <h5>Hamburguesa doble</h5>
      <h6>20 disponibles</h6>
      <div className="dish_price">
        <p className="price">$4.99</p>
        <a href="#" className="show_more">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Dish;
