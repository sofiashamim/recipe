import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [value, setvalue] = useState([]);
    const [search, setsearch] = useState("burger");
    console.log(search)

    let searchRef =useRef()

    async function fetchRecipe(){
     try {
      let res =await fetch(`https://api.edamam.com/search?q=${search}&app_id=d47fcf57&app_key=6b42ab7e6e9275c1dee466e8b435bb7d`)

      let data= await res.json()
    console.log(data.hits)
    setvalue(data.hits)
     } catch (error) {
      console.log(error)
     }
    }

    useEffect(()=>{
      fetchRecipe()
    },[search])

  const handleSearch=(e)=>{
e.preventDefault();
let searchValue =searchRef.current.value
setsearch(searchValue);

  }

  return (

     <div className="row row-col-3 gap-2 d-flex justify-content-center">
      <div>
      <form className="d-flex w-50 p-3 m-auto mt-3 mb-3" role="search">
  <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search recipe here..." aria-label="Search" />
  <button  onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
</form>

      </div>
     { value.map((ele)=>{
      // return <p>{ele.recipe.label}</p>
{/* <img src={ele.recipe.image} alt="" /> */}

      return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{ele.recipe.label}</h5>
    <Link to="/recipe" state={ele} id="viewRecipebtn" className="btn btn-primary ">View Recipe</Link>
  </div>
</div>

      })}
       
     </div>

  )
}

export default Home
