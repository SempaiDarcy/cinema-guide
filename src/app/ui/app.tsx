import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '@/components/header'
import { Home } from '@/pages/home/home'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path={'/'} />
      </Routes>
    </BrowserRouter>
  )
}
