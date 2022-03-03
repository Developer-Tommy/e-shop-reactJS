import './App.css';
import {useMemo, useState} from "react";
import MenuBar from "./Components/MenuBar";
import LogInWindow from "./Components/LogInWindow";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import ProfileButtons from "./Components/ProfileButtons";
import useLocalStorage from "./Components/Hooks/useLocalStorage";
import Cart from "./Components/Cart";
import Bookmark from "./Components/Bookmark";
import ProductList from "./Components/ProductList";
import { UserContext } from "./Components/Hooks/UserContext";


function App() {

  const [filter, setFilter] = useState("");
  const [cart, setCart] = useLocalStorage("cart",[]);
  const [bookmark, setBookmark] = useLocalStorage("bookmark", []);
  const [sort, setSort] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("logInVal",false);

  const [user, setUser] = useLocalStorage("users",[]);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

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
    {
      id: 10,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 11,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 12,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 13,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 14,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 15,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 16,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 17,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 18,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 19,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 20,
      src: "https://cdn.alza.sk/ImgW.ashx?fd=f16&cd=SXI216b1",
      name: "Xiaomi Redmi",
      quantity: 1,
      price: 420
    },
    {
      id: 21,
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

  const removeProductFromCart = (product) => {
    product.quantity = 1;
    const tmpCart = [...cart];
    console.log(product)
    setCart(tmpCart.filter(({ id }) => id !== product.id));
    console.log(cart)
  }

  const removeProductFromBookmarks = (product) => {
    const tmpBookmark = [...bookmark];
    setBookmark(tmpBookmark.filter(({ id }) => id !== product.id));
    console.log(bookmark)
  }

  const handleLogIn = (value) => {
    setIsLoggedIn(value);
    console.log(isLoggedIn);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} />
              <MenuBar search={filtered} sorting={sorted}/>
              <ProductList products={products} filter={filter} sort={sort} addProduct={addToCart} addBookmark={addToBookmark}/>
            </div>}>
          </Route>
          <Route path="/cart" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} />
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                <Cart cart={cart} filter={filter} sort={sort} removeProductFromCart={removeProductFromCart} addToBookmark={addToBookmark} />
              </div>
            </div>}>
          </Route>
          <Route path="/bookmark" element={
            <div>
              <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} />
              <MenuBar search={filtered} sorting={sorted}/>
              <ProfileButtons/>
              <div className="products">
                <Bookmark bookmark={bookmark} filter={filter} sort={sort} addToCart={addToCart} removeFromBookmark={removeProductFromBookmarks} />
              </div>
            </div>}>
          </Route>
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
