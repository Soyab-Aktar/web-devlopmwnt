import './Watch.css'

const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div className='container'>
            <h3>Watch name: {name}</h3>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default Watch;