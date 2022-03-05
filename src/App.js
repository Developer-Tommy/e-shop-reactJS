import './App.css';
import {useEffect, useMemo, useState} from "react";
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
import { CurrentUserContext } from "./Components/Hooks/CurrentUserContext";

function App() {

  const [filter, setFilter] = useState("");
  const [cart, setCart] = useLocalStorage("cart",[]);
  const [bookmark, setBookmark] = useLocalStorage("bookmark", []);
  const [sort, setSort] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("logInVal",false);

  const [users, setUsers] = useLocalStorage("users",[]);
  const value = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  const [currentUser, setCurrentUser] = useLocalStorage("currentUser",{});
  const currentValue = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser]);

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

  const addCartToUser = (product) => {
    const tmpCart = [...cart];
    tmpCart.push(product);
    console.log("pridany");
    console.log(cart)
    setCart(tmpCart);
    setUsers(users.map(user => user.username === currentUser.username ? {...user, cart: [...tmpCart]} : user))
    console.log(users)
  }

  const addToCart = (product) => {
    if (isLoggedIn) {
      if (users.find(user => user.username === currentUser.username)) {
        if (users.find(user => user.username === currentUser.username).cart.length > 0) {
          if (users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id)) {
            const tmp = users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id)
            const tmpCart = [...cart]
            const updateQuantity = tmpCart.map((x) => x.id === product.id ? {...tmp, quantity: tmp.quantity + 1} : x)
            setCart(tmpCart.map((x) => x.id === product.id ? {...tmp, quantity: tmp.quantity + 1} : x))
            setUsers(users.map(user => user.username === currentUser.username ? {...user, cart: [...updateQuantity]} : user))
          } else if (!users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id)) {
            console.log("som tu")
            addCartToUser(product)
          }
        } else {
          addCartToUser(product)
        }
      }
    }
    console.log("not logged")
  }

  const addBookmarkToUser = (product) => {
    const tmpBookmark = [...bookmark];
    tmpBookmark.push(product);
    console.log("pridany");
    console.log(bookmark)
    setBookmark(tmpBookmark);
    setUsers(users.map(user => user.username === currentUser.username ? {...user, bookmark: [...tmpBookmark]} : user))
    console.log(users)
  }

  const addToBookmark = (product) => {
    if (isLoggedIn) {
      if (users.find(user => user.username === currentUser.username)) {
        if (users.find(user => user.username === currentUser.username).bookmark.length > 0) {
          if (users.find(user => user.username === currentUser.username).bookmark.find(({id}) => id === product.id))
            return
          else
            addBookmarkToUser(product)
        }
        else {
          addBookmarkToUser(product)
        }
      }
    }
    console.log("not logged")

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
    const tmpCart = [...cart];
    console.log(product)
    const tmpFilter = tmpCart.filter(({ id }) => id !== product.id)
    setCart(tmpCart.filter(({ id }) => id !== product.id));
    setUsers(users.map(user => user.username === currentUser.username ? {...user, cart: [...tmpFilter]} : user))
    console.log(users)
  }

  const removeToCart = (product) => {
    if (isLoggedIn) {
      if (users.find(user => user.username === currentUser.username) && users.find(user => user.username === currentUser.username).cart.length > 0) {
          if (users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id) && users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id).quantity > 1) {
            const tmp = users.find(user => user.username === currentUser.username).cart.find(({id}) => id === product.id)
            const tmpCart = [...cart]
            const updateQuantity = tmpCart.map((x) => x.id === product.id ? {...tmp, quantity: tmp.quantity - 1} : x)
            setCart(tmpCart.map((x) => x.id === product.id ? {...tmp, quantity: tmp.quantity - 1} : x))
            setUsers(users.map(user => user.username === currentUser.username ? {...user, cart: [...updateQuantity]} : user))
          }
          else {
            console.log("som tu")
            removeProductFromCart(product)
          }
      }
    }
    console.log("not logged")
  }

  const removeProductFromBookmarks = (product) => {
    if (isLoggedIn) {
      const tmpBookmark = [...bookmark];
      const tmpFilter = tmpBookmark.filter(({ id }) => id !== product.id)
      setBookmark(tmpBookmark.filter(({ id }) => id !== product.id));
      console.log(bookmark)
      setUsers(users.map(user => user.username === currentUser.username ? {...user, bookmark: [...tmpFilter]} : user))
      console.log(users)
    }
  }

  const handleLogIn = (value) => {
    setIsLoggedIn(value);
    console.log(isLoggedIn);
  }

  useEffect(() => {
    if (!isLoggedIn){
      const emptyCart = cart.splice(0,cart.length)
      const emptyBookmark = bookmark.splice(0,cart.length)
      setCart(emptyCart);
      setBookmark(emptyBookmark);
      localStorage.removeItem("cart");
      localStorage.removeItem("bookmark");
      console.log("empty cart")
      console.log(cart)
    }
  },[isLoggedIn])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={value}>
          <CurrentUserContext.Provider value={currentValue}>
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
                  <div className="products productBox">
                    <Cart users={users} currentUser={currentUser} filter={filter} sort={sort} removeProductFromCart={removeToCart} addToBookmark={addToBookmark} />
                  </div>
                </div>}>
              </Route>
              <Route path="/bookmark" element={
                <div>
                  <LogInWindow logIn={handleLogIn} logInVal={isLoggedIn} />
                  <MenuBar search={filtered} sorting={sorted}/>
                  <ProfileButtons/>
                  <div className="products productBox">
                    <Bookmark users={users} currentUser={currentUser} filter={filter} sort={sort} addToCart={addToCart} removeFromBookmark={removeProductFromBookmarks} />
                  </div>
                </div>}>
              </Route>
            </Routes>
          </CurrentUserContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
