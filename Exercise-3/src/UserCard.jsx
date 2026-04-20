import PropTypes from "prop-types";

const UserCard = ({ name, email }) => {
  return (
    <div className="border p-3 rounded-md mb-3">
      <h2 className="text-lg font-bold">{name}</h2>
      <p>{email}</p>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;