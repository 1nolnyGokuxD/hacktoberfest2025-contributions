import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './index.css'
import App from './App.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
