//import logo from './logo.svg';
import "./App.css";
import Posts from "./components/Posts/Posts";
import Sidebar from "./components/Sidebar/Sidebar";
import Navigation from "./components/Navigation/Navigation";
import Category from "./components/Category/Category";

function App() {
  let userData = {
    name: "Narayana",
    greet: function () {
      return "Hello " + this.name;
    }
  };
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/5">
          <Sidebar>
            <Navigation>
              <div>
                <a href="www.google.com">Home</a>
                <div>{userData.greet()}</div>
              </div>
            </Navigation>
          </Sidebar>
        </div>
        <div className="w-4/5">
          <div>
            <Category name="category" />
          </div>
          <div>
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
