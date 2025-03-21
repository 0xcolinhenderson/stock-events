import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="Navbar">
      <div className="logo">Stocker</div>
      {children}
    </div>
  );
};

const NavChild = ({ text, ref, divider, special }) => {
  return (
    <>
      <div className={`child ${special ? "special" : ""}`}>
        {ref ? <a href={ref}>{text}</a> : <span>{text}</span>}
      </div>
      {divider ? <div className="divider"></div> : null}
    </>
  );
};

export { Navbar, NavChild };
