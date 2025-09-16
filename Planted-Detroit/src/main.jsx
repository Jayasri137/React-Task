import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import Comp2 from './Comp2';
import Product from './Product';
import Plants from './plant';
import Order from './Order';
import Microgreens from './Microgreens';
import Farm from './Farm';
import Community from './Community';
import Feedback from './Feedback';
import Final from './Final';
import Pro from './pro';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Comp2/>
    <Product/>
    <Pro/>
    <Order/>
    <Plants/>
    <Microgreens/>
    <Farm/>
    <Community/>
    <Feedback/>
    <Final/>
  </StrictMode>,
)
