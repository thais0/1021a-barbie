import Header from './componentes/header/Header'
import Filme from './componentes/filme/Filme'
import Main from './componentes/main/Main'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
  },
  {
    path: "/filme",
    element: <div>Filme</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
      <Header/>
      <Main/>
  )
}
export default App