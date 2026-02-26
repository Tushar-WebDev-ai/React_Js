import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Me from './Me.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Me />
  <App/>
  </>
)
