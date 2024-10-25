import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TostadoPerfectoProvider } from './context/tostadoPerfecto.context.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TostadoPerfectoProvider>
        <Header />
        <Body />
        <Footer />
      </TostadoPerfectoProvider>
    </BrowserRouter>
  </StrictMode>,
)
