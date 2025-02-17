 const RestaurantCard = (props) => {
    const {resData} = props;            // DESTRUCTURING
    return (
        <div className="rest-cards">
            <img className="res-logo" src={ resData.info.cloudinaryImageId }></img>
            <h2>{resData.info.name}</h2>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;
