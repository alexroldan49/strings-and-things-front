import React, { useEffect, useState } from "react"
import { Route, Switch, useHistory } from "react-router"
import Signup from "./components/Signup"
import Home from "./components/Home";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import AllProducts from "./components/AllProducts";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import UserPage from "./components/UserPage";
import AccountPage from "./components/AccountPage";
import Addresses from "./components/Addresses";
import Alladdresses from "./components/Alladdresses";
import OrderHistory from "./components/OrderHistory";
import Checkout from "./components/Checkout";
import CompletedOrder from "./components/CompletedOrder";
import BottomNav from "./components/BottomNav";

function App() {
  
  const [currentUser, setCurrentUser] = useState("")
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [brand, setBrand] = useState("")
  const [completedOrder, setCompletedOrder] = useState({})
  const [orderHistory, setOrderHistory] = useState([])
  const [prodsMemory, setProdsMemory] = useState([])
  const [displayedAddresses, setDisplayedAddresses] = useState([])
  const [open, setOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([])

  const herokuURL = "https://strings-and-things.herokuapp.com"
  
  
  const history = useHistory()
  
  function handleHistory(e){
      history.push(e.target.value)
  }

  function settingState(r){
    setCurrentUser(r)
    setOrderHistory(r.orders)
    setDisplayedAddresses(r.addresses)
  }
  function settingTwoProds(data){
      setProducts(data)
      setProdsMemory(data)
  }
  
 useEffect(()=>{
    fetch(`${herokuURL}/me`)
    .then(r => {
      if (r.ok) {
        r.json().then(r => settingState(r))
      }else{
        r.json().then(r => console.log(r))
      }
    })
 }, [])

 useEffect(()=>{
  fetch(`${herokuURL}/products`)
  .then(r => r.json())
  .then(productList => settingTwoProds(productList))
}, [])

 useEffect(() =>{
  fetch(`${herokuURL}/categories`)
  .then(r => r.json())
  .then(categoryList => setCategories(categoryList))
  .then(console.log(categories))
},[])
  
 function logout(){
  fetch(`${herokuURL}/logout`, { method: "DELETE"}).then(r=>{
    if (r.ok){
      setCurrentUser("")
    }
  })
}

function handleChange(id){
  setBrand("")
  setProducts(prodsMemory)
  history.push(`/categories/${id}`)
}

const mappedCategories =  categories.map(category =>{
  return(   
       <li onClick={()=>handleChange(category.id)} >
          <h3 value={category.id} >{category.name}</h3>
      </li>)
})

function handleSearchBar(e){
  e.preventDefault()
  let diffValue = e.target.value
  let searchFilter = products.filter(product => {
      return product.name.toLowerCase().search(diffValue.toLowerCase()) != -1
    })
    console.log(prodsMemory)
    setTimeout(setProducts(searchFilter), 1000)
    history.push("/products")
  }
const mappedProducts = categories.map(category => {
    return(<Route path = {`/categories/${category.id}`}>
      <ProductList recentlyViewed={recentlyViewed} setRecentlyViewed={setRecentlyViewed} brand={brand} setBrand={setBrand} currentUser={currentUser} setCart={setCart} cart={cart} mappedCategories={mappedCategories} category={category}/>
      <BottomNav />
    </Route>)
})

const mappedProductPages = products.map(product =>{
    return(<Route path = {`/product/${product.id}`}>
    <ProductPage currentUser={currentUser} product={product} setCart={setCart} cart={cart} mappedCategories={mappedCategories}/>
  </Route>)
})
  
  return (
    // <div className="App">
      
    //   {currentUser ? 
    //   <div>
    //   <h1>{currentUser.username}</h1>
    //   <button onClick={logout} >logout</button>
    //   </div>:
    //   <div></div>}
      <Switch>
        <Route exact path="/" >
          <Home cart={cart} setCart={setCart} setRecentlyViewed={setRecentlyViewed} recentlyViewed={recentlyViewed} open={open} setOpen={setOpen} products={products} setProducts={setProducts} prodsMemory={prodsMemory} handleSearchBar={handleSearchBar} currentUser={currentUser} mappedCategories={mappedCategories} />
          <BottomNav/>
        </Route>
        <Route path="/signup" >
         <Signup setOpen={setOpen} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/login" >
         <Login setOpen={setOpen} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/userpage" >
         <UserPage />
        </Route>
        <Route path="/user-account-page" >
          <AccountPage setDisplayedAddresses={setDisplayedAddresses} displayedAddresses={displayedAddresses} orderHistory={orderHistory} mappedCategories={mappedCategories} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/add-addresses" >
          <Addresses displayedAddresses={displayedAddresses} setDisplayedAddresses={setDisplayedAddresses} mappedCategories={mappedCategories} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/addresses" >
          <Alladdresses setCart={setCart} cart={cart} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/order-history" >
          <OrderHistory orderHistory={orderHistory} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products" >
         <AllProducts setCart={setCart} cart={cart} setRecentlyViewed={setRecentlyViewed} brand={brand} setBrand={setBrand} categories={categories} mappedCategories={mappedCategories} products={products} />
        </Route>
        <Route path="/cart" >
         <Cart currentUser={currentUser} mappedCategories={mappedCategories} products={products} />
        </Route>
        <Route path="/checkout" >
         <Checkout orderHistory={orderHistory} setOrderHistory={setOrderHistory} setCompletedOrder={setCompletedOrder} currentUser={currentUser} />
        </Route>
        <Route path="/order-complete" >
         <CompletedOrder completedOrder={completedOrder} setCompletedOrder={setCompletedOrder} currentUser={currentUser} />
        </Route>
        {mappedProducts}
        {mappedProductPages}
      </Switch>
    // </div>
  );
}

export default App;
