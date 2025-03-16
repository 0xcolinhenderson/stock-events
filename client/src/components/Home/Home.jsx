import "./Home.css";
import { StockGraphSmall } from "../Stocks/StockGraph";

const HeaderBox = ({ children }) => {
  return <div className="HeaderBox">{children}</div>;
};

const AuthForm = ({ children }) => {
  return <div className="AuthForm">{children}</div>;
};

const Divider = () => {
  return <div className="Divider"></div>;
};

const Home = () => {
  return (
    <div className="Home">
      <HeaderBox>
        <h1>Welcome to Stocker</h1>
        <p>Get accurate, realtime media analyis for stock prices.</p>
        <Divider />
        <h2>Today's top stocks:</h2>
      </HeaderBox>
      <div className="DisplayStocks">
        <StockGraphSmall stock="AAPL" />
      </div>
      <HeaderBox>
        <h2>Top Events</h2>
      </HeaderBox>
      <AuthForm>
        <button className="signUpButton">Sign Up</button>
        <p>or</p>
        <button className="loginButton">Log In</button>
      </AuthForm>
    </div>
  );
};

export { Home };
