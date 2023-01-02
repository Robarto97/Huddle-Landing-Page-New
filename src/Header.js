import logo from "./images/logo.svg";
import mockups from "./images/illustration-mockups.svg";
const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button>Try it free</button>
      </div>
      <div className="header-content">
        <div className="text">
          <h1>Build the community your fans will love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Get started for free</button>
        </div>
        <div className="img-wrapper">
          <img src={mockups} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
