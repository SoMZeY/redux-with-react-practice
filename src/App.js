import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Fragment>
      <Header />
      {isLoggedIn ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
