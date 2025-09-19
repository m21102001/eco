import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { RecoilRoot } from 'recoil';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
<RecoilRoot>

    <App />
</RecoilRoot>

  </StrictMode>,
)
