import FetchData from "../hooks/FetchData";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import User from "../components/User/User";
import UserDetails from "./UserDetails";



const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {

  const { data } = FetchData(url);
  //const [params, setParams] = useState({page: 1});
  // const {data, loading, error} = useFetch(
  //   ulr + "?" + new URLSearchParams()
  // );
  //const [displayData, setDisplayData] = useState(data);

  // const sortHandler = () => {
  //   setDisplayData(() =>
  //     data.items.sort((a, b) => b.title.localeCompare(a.title))
  //   );
  // };
  // const filterHanlder = () => {
  //   setDisplayData(data.items.filter((a) => a.sex === "Male"));
  // };
  const sortHandler = (user) => {

  };
  // const refreshHandler = () => {
  //   setDisplayData(data.items);
  // };
  // useEffect(() => {
  //   setDisplayData(data?.items);
  // }, [data]);

  return (
    <div>
      <Header children={<Nav />} />
      <section >
        <div>
          {data.map((user) => (
            <>
              <User key={user.id} users={user} />
              {console.log(user)}
              <Router>
                <Link to={'/userdetails/' + "Name: " + user.company.name + "; Phrase: " + user.company.catchPhrase + "; BS: " + user.company.bs}>Click for userdetails</Link>
                <Routes>

                  <Route path="/userdetails/:user" element={<UserDetails />} />

                </Routes>
              </Router>
            </>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
