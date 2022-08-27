import React from "react";
import PropTypes from "prop-types";
const Profile = ({ name, bio, profession, children, handleName }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {children}
      <br />
      {name}
      <br />
      {bio}
      <br />
      {profession}
      {handleName(name)}
    </div>
  );
};

Profile.defaultProps = {
  name: "Anes",
  bio: " Test DEFAULT props",
  profession: "student",
  handleName: (n) => {
    alert(`hello ${n} from defaultProps`);
  },
};

Profile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
