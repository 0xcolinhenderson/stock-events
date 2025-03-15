import "./Home.css";

const HeaderBox = ({ children }) => {
  return <div className="HeaderBox">{children}</div>;
};

const Home = () => {
  return (
    <div className="Home">
      <HeaderBox>
        <h1>Welcome to Stock Events</h1>
        <p>Your one-stop solution for stock market events.</p>
      </HeaderBox>
    </div>
  );
};

export { Home };
