import "../stylesCss/CardStyles.css";
import { Link } from "react-router-dom";

const Item = ({ name, image, category, id }) => {
  return (
    <div className="container">
      <div className="banner-img">
        <img className="banner-img-opacity" src={image} alt={name} />
      </div>
      <div className="card">
        <img className="circle-img" src={image} alt={name} />
        <h4 className="name">{name}</h4>
        <button className="link-card">
          <Link className="btn-link-card" to={`/ItemDetailContainer/${id}`}>
            {" "}
            Detalle del Producto{" "}
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Item;
