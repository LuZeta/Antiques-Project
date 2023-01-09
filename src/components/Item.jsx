import "../stylesCss/CardStyles.css";

const Item = ( {name, image, description} ) => {

    return (
<div className="wrapper-flex">
<div className="container">
        <div className="card">
            <div class="banner-img">
            <img class="banner-img-opacity" src={image} alt={name}/>
            </div>
            <img className="profile-img" src={image} alt={name}/>
            <h4 className="name">{name}</h4>
            <p className="description">{description}</p>
            <button className="btn">Item Detail</button>
        </div>
        </div>
        </div>
    )
}

export default Item