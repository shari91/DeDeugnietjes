import React from 'react'
import { createRoot } from 'react-dom/client'

import './fonts.css'
import './index.css'

import App from './App'
import { initOverlayScrollbar } from './scrollbar'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

initOverlayScrollbar()
