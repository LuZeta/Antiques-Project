import "../stylesCss/CardStyles.css";

const Item = ( {name, image, description} ) => {

    return (
<div className="">
<div className="container">
        <div className="card">
            <div className="banner-img">
            <img className="banner-img-opacity" src={image} alt={name}/>
            </div>
            <img className="circle-img" src={image} alt={name}/>
            <h4 className="name">{name}</h4>
            <p className="description">{description}</p>
            <button className="btn">Item Detail</button>
        </div>
        </div>
        </div>
    )
}

export default Item