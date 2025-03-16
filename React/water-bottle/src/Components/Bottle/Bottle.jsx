import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    console.log(bottle);
    const {name,price,img} = bottle;
    return (
        <div className="bottle">
            <h4>Name: {name}</h4>
            <h5>Price: ${price}</h5>
            <img src={img} alt="" />
            <button onClick={()=>handleAddToCart(bottle)}>Buy</button>
        </div>
    );
};

export default Bottle;