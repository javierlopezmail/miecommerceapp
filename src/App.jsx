import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
        {/* <NavBar />
        <ItemListContainer greeting={'Bienvenidos'} />
        <ItemDetailContainer /> */}
      </div>

      {/* <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer gretting = {'Bienvenidos'} />} />
      </Routes>
      
      </BrowserRouter> */}

      {/* <div className="App"> */}
        {/*<NavBar />*/}
        {/*<ItemListContainer gretting = {'Bienvenidos'} />*/}
      {/* </div> */}
    </>
  )
}

export default App
