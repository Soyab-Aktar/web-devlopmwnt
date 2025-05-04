import PropTypes from "prop-types";
import Features from "./Features/Features";
const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-cyan-100 text-black p-4 rounded-md flex flex-col justify-between">
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/Month</span>
      </h2>
      <h3 className="text-5xl font-bold">{name}</h3>
      {features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}
      <div>
        <button className="btn">Default</button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
