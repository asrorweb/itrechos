import CallInfo from "./call-info";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className=" bg-black">
      <div className="container mx-auto py-6 text-white flex items-center justify-between">
        <span>Logo</span>
        <div className="flex items-center gap-14">
          <Navigation />
          <CallInfo />
        </div>
      </div>
    </header>
  );
};

export default Header;
