import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import Comp2 from './Comp2';
import Product from './Product';
import Plant from './Plant';
import Order from './Order';
import Microgreens from './Microgreens';
import Farm from './Farm';
import Community from './Community';
import Feedback from './Feedback';
import Final from './Final';
import Pro from './pro';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Comp2/>
    <Product/>
    <Pro/>
    <Order/>
    <Microgreens/>
  </StrictMode>,
)
