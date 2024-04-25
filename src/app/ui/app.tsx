import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/home/home'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
    </BrowserRouter>
  )
}
