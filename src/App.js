import React, { useEffect, useState } from "react"
import { Route, Switch, useHistory } from "react-router"
import Signup from "./components/Signup"
import Home from "./components/Home";
import Login from "./components/Login";
import ProductList from "./components/ProductList";

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

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
       <li>
          <h3 value={category.id} onClick={()=>handleChange(category.id)} >{category.name}</h3>
      </li>)
})

const mappedProducts = categories.map(category => {
    return(<Route path = "/categories/:id">
      <ProductList mappedCategories={mappedCategories} category={category}/>
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
          <Home mappedCategories={mappedCategories} />
        </Route>
        <Route path="/signup" >
         <Signup/>
        </Route>
        <Route path="/login" >
         <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/products" >
         <ProductList products={products} />
        </Route>
        {mappedProducts}
      </Switch>
    // </div>
  );
}

export default App;
