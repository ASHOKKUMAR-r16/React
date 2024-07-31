import React from "react"
import { useState, useEffect } from "react"
import './Product.css'
export default function App() {
  const [state, setState] = useState([])
  const [serach, setSerach] = useState([])
  const handler = (a) => {
    setSerach(a.target.value)
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#f3f4f9', minHeight: '100vh', paddingTop: 20 }}>
        <h1 className="text-center mb-4" style={{color:'brown'}}>Search For products </h1>
        <div className="d-flex justify-content-center mb-4">
        
        <input type="text" className="form-control" placeholder="Serach for Products,Brands and More" value={serach} onChange={handler}style={{ maxWidth: 400 }}></input>
        <br />
        </div>
        <div className="row bg-secondary">
          {state.filter(x => x.title.includes(serach)).map((product) =>
            <div className="col-md-4">
              <div className="a card bg-light" style={{height:500,marginBottom:30}}>
                <img src={product.image} alt='' style={{height:300,width:300,marginTop:10}}/>
                <div class="card-body">
                  <p class="card-text">{product.title}</p>
                  <p class="card-text">{product.category}</p>
                  <button className="bg-warning">{product.price}</button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </>
  )
}
