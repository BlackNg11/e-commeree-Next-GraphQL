import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Page.prototype = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
