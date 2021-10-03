import PropTypes from "prop-types";

export default function Page({ children }) {
  return (
    <div>
      <h2>Heeeeeeeeeeeeeeey</h2>
      {children}
    </div>
  );
}

Page.prototype = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
