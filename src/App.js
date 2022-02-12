import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductCard from './components/ProductCard';
// import {products} from './data';

function App() {

  const [postsData, setPostsData] = useState([])

    const posts = fetch('https://jsonplaceholder.typicode.com/photos');
    const data = posts.then((res)=>res.json())
    data.then((post_data)=>setPostsData(post_data))

    return (
    <div className="container">
      <Navbar/>
      <Slider/>
      <div className="row mt-5 mb-5">
          {/* {
            products.map((product)=>{
              return <ProductCard product={product}/>
            })
          } */}
          {
            postsData.map(post=>{
              return (
                <div className="col-md-2 mb-2">
                  <img style={{width:200}} src={post.url}/>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}

export default App;
