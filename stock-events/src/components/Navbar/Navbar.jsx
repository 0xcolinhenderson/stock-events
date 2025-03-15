import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      {children}
    </div>
  );
};

const NavChild = ({ text, ref, divider, dropdown }) => {
  return (
    <>
      <div className="child">
        {ref ? <a href={ref}>{text}</a> : <span>{text}</span>}
      </div>
      {divider ? <div className="divider"></div> : null}
    </>
  );
};



export { Navbar, NavChild };
