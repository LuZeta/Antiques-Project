import "../stylesCss/CardStyles.css";
import { Link } from "react-router-dom";


const Item = ( {name, image, description, id} ) => {

    return (

<div className="container">
        <div className="card">
            <div className="banner-img">
            <img className="banner-img-opacity" src={image} alt={name}/>
            </div>
            <img className="circle-img" src={image} alt={name}/>
            <h4 className="name">{name}</h4>
            <button className="btn"><Link className="btn-link-card" to={`/ItemDetailContainer/${id}`} >Item Detail</Link>   </button>
               
        </div>
        </div>
       
    )
}

export default Item