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

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const history = useHistory()
  
  function handleHistory(e){
      history.push(e.target.value)
  }

 useEffect(()=>{
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then(r => setCurrentUser(r))
      }else{
        r.json().then(r => console.log(r))
      }
    })
 }, [])

 useEffect(()=>{
  fetch("/products")
  .then(r => r.json())
  .then(productList => setProducts(productList))
}, [])

 useEffect(() =>{
  fetch("/categories")
  .then(r => r.json())
  .then(categoryList => setCategories(categoryList))
  .then(console.log(categories))
},[])
  
 function logout(){
  fetch("/logout", { method: "DELETE"}).then(r=>{
    if (r.ok){
      setCurrentUser("")
    }
  })
}

function handleChange(id){
  history.push(`/categories/${id}`)
}

const mappedCategories =  categories.map(category =>{
  return(   
       <li onClick={()=>handleChange(category.id)} >
          <h3 value={category.id} >{category.name}</h3>
      </li>)
})

const mappedProducts = categories.map(category => {
    return(<Route path = {`/categories/${category.id}`}>
      <ProductList currentUser={currentUser} setCart={setCart} cart={cart} mappedCategories={mappedCategories} category={category}/>
    </Route>)
})

const mappedProductPages = products.map(product =>{
    return(<Route path = {`/product/${product.id}`}>
    <ProductPage product={product} setCart={setCart} cart={cart} mappedCategories={mappedCategories}/>
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
          <Home currentUser={currentUser} mappedCategories={mappedCategories} />
        </Route>
        <Route path="/signup" >
         <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/login" >
         <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/userpage" >
         <UserPage />
        </Route>
        <Route path="/user-account-page" >
          <AccountPage mappedCategories={mappedCategories} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/add-addresses" >
          <Addresses mappedCategories={mappedCategories} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/addresses" >
          <Alladdresses currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/order-history" >
          <OrderHistory currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products" >
         <AllProducts mappedCategories={mappedCategories} products={products} />
        </Route>
        <Route path="/cart" >
         <Cart currentUser={currentUser} mappedCategories={mappedCategories} products={products} />
        </Route>
        <Route path="/checkout" >
         <Checkout currentUser={currentUser} mappedCategories={mappedCategories} products={products} />
        </Route>
        {mappedProducts}
        {mappedProductPages}
      </Switch>
    // </div>
  );
}

export default App;
