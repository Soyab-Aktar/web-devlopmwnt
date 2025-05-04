import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <div>
      <ul>
        <li key={route.id}>
          <a href={`route.path`}>{route.name}</a>
        </li>
      </ul>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
