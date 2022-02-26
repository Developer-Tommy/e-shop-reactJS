import './App.css';
import { useEffect, useState} from "react";
import Product from "./Components/Product";
import MenuBar from "./Components/MenuBar";
import LogInWindow from "./Components/LogInWindow";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import ProductInCart from "./Components/ProductInCart";
import ProfileButtons from "./Components/ProfileButtons";

function App() {

  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const products = [
    {
      id: 1,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      price: 800
    },
    {
      id: 2,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      price: 550
    },
    {
      id: 3,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      price: 420
    },
    {
      id: 4,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      price: 800
    },
    {
      id: 5,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      price: 550
    },
    {
      id: 6,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      price: 420
    },
    {
      id: 7,
      src: "https://cdn.alza.sk/Foto/f16/RI/RI028b2.jpg",
      name: "iPhone 11",
      price: 800
    },
    {
      id: 8,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SAMO0213b2",
      name: "Samsung Galaxy A52",
      price: 550
    },
    {
      id: 9,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      price: 420
    },
  ]

  const addToCart = (product) => {
    const tmpCart = [...cart];
    tmpCart.push(product);
    console.log("pridany");
    console.log(cart)
    setCart(tmpCart);
  }

  const addToBookmark = (product) => {

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
              <LogInWindow logIn={handleLogIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <div className="products">
                {data.filter(product => product.name.includes(filter)).map(item => <Product key={item.id} product={item} addProduct={addToCart} addBookmark={addToBookmark}/>)}
                {/*{data.map(item => <Product key={item.id} product={item} addProduct={addToCart} addBookmark={addToBookmark}/>)}*/}
              </div>
            </div>}>
          </Route>
          <Route path="/cart" element={
            <div>
              <LogInWindow logIn={handleLogIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                {cart.filter(product => product.name.includes(filter)).map(item => <ProductInCart key={item.id} product={item} removeFromCart={removeProductFromCart} removeBookmark={removeProductFromBookmarks}/>)}
              </div>
            </div>}>
          </Route>
          <Route path="/bookmark" element={
            <div>
              <LogInWindow logIn={handleLogIn} addCustomers={addCustomer}/>
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                {bookmark.filter(product => product.name.includes(filter)).map(item => <ProductInCart key={item.id} product={item} removeFromCart={removeProductFromCart} removeBookmark={removeProductFromBookmarks}/>)}
              </div>
            </div>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
