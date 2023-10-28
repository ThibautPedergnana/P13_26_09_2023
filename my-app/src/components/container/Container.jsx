import Footer from "../footer/footer";
import Header from "../header/Header";
import "../../Global.css";

function Container({ children }) {
  return (
    <div className="container-app">
      <Header />
      <div className="app">
        <div className="wrapper-app">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Container;
