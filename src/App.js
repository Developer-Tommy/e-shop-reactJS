import './App.css';
import { useEffect, useState} from "react";
import Product from "./Components/Product";
import MenuBar from "./Components/MenuBar";
import LogInWindow from "./Components/LogInWindow";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import ProfileButtons from "./Components/ProfileButtons";
import useLocalStorage from "./Components/Hooks/useLocalStorage";
import Cart from "./Components/Cart";
import Bookmark from "./Components/Bookmark";

function App() {

  const [filter, setFilter] = useState("");
  const [cart, setCart] = useLocalStorage("cart",[]);
  const [bookmark, setBookmark] = useLocalStorage("bookmark", []);
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("logInVal",false);

  const products = [
    {
      id: 1,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      quantity: 1,
      price: 800
    },
    {
      id: 2,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      quantity: 1,
      price: 550
    },
    {
      id: 3,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 4,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      quantity: 1,
      price: 800
    },
    {
      id: 5,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      quantity: 1,
      price: 550
    },
    {
      id: 6,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 7,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      quantity: 1,
      price: 800
    },
    {
      id: 8,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      quantity: 1,
      price: 550
    },
    {
      id: 9,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
  ]

  const addToCart = (product) => {
    if (cart.find(({ id }) => id === product.id )) {
      product.quantity += 1;
      return
    }
    const tmpCart = [...cart];
    tmpCart.push(product);
    console.log("pridany");
    console.log(cart)
    setCart(tmpCart);
  }

  const addToBookmark = (product) => {
    if (bookmark.find(({ id }) => id === product.id )) {
      product.quantity += 0;
      return
    }
    const tmpBookmark = [...bookmark];
    tmpBookmark.push(product);
    console.log("pridany");
    console.log(bookmark)
    setBookmark(tmpBookmark);

  }

  const filtered = (value) => {
    console.log(value)
    setFilter(value);
  }

  const sorted = (value) => {
    console.log(value)
    setSort(value);
  }

  const addCustomer = (user) => {
    const tmpCustomer = [...customer];
    tmpCustomer.push(user);
    console.log("pridany");
    console.log(customer)
    setCustomer(tmpCustomer);
  }

  const removeProductFromCart = (product) => {
    const tmpCart = [...cart];
    console.log(product)
    setCart(tmpCart.filter(({ id }) => id !== product));
    console.log(cart)
  }

  const removeProductFromBookmarks = (product) => {
    const tmpBookmark = [...bookmark];
    setBookmark(tmpBookmark.filter(({ id }) => id !== product));
    console.log(bookmark)
  }

  const handleLogIn = (value) => {
    setIsLoggedIn(value);
    console.log(isLoggedIn);
  }

  useEffect(() => {
    const sortArray = type => {
      const types = {
        id: 'id',
        name: 'name',
        price: 'price',
      };
      const sortProperty = types[type];
      let sorted;

      if (sortProperty !== "name"){
        sorted = [...products].sort((a, b) => a[sortProperty] - b[sortProperty]);
      }
      else {
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
      }
      setData(sorted);
    };
    sortArray(sort);
  }, [sort]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <div className="products">
                {data.filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addToCart} addBookmark={addToBookmark}/>)}
                {/*{data.map(item => <Product key={item.id} product={item} addProduct={addToCart} addBookmark={addToBookmark}/>)}*/}
              </div>
            </div>}>
          </Route>
          <Route path="/cart" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                <Cart cart={cart} filter={filter} sort={sort} removeProductFromCart={removeProductFromCart} addToBookmark={addToBookmark} />
              </div>
            </div>}>
          </Route>
          <Route path="/bookmark" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                <Bookmark bookmark={bookmark} filter={filter} sort={sort} addToCart={addToCart} removeFromBookmark={removeProductFromBookmarks} />
              </div>
            </div>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
