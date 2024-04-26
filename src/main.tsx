import { StrictMode } from 'react'

import { App } from '@/app'
import ReactDOM from 'react-dom/client'

import '@/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
