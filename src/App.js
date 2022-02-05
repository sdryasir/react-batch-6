import { useState } from 'react';
import './App.css';

function App() {

   const [num1, setNum1] = useState(10);

  const increase=()=>{
    setNum1(num1+1);
  }
  const decrease=()=>{
    setNum1(num1-1);
  }
  
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-primary" onClick={decrease}>-</button>
              </li>
              <li class="nav-item">
                <a class="nav-link">{num1}</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-primary" onClick={increase}>+</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
