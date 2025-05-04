import PropTypes from "prop-types";
import { HiArrowCircleRight } from "react-icons/hi";
const Features = ({ feature }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <HiArrowCircleRight />
        <p>{feature}</p>
      </div>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string,
};

export default Features;
