import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { IteamDetailContainer } from "./components/ItemDetail/IteamDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import CarritoContainer from "./components/Cart/CarritoContainer";
import Form from "./components/Form/Form";
import CartContextProvider from "./context/CartContext";

function App() {



  return (
    <BrowserRouter>
    <CartContextProvider>
    <Routes>
      <Route element={<Navbar />}>
      <Route  path="/" element={<ItemListContainer />} />
      <Route  path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/itemDetail/:id" element={<IteamDetailContainer />} />
      <Route  path="/cart" element={<CarritoContainer/>} />
      <Route  path="/form" element={<Form/>} />
      <Route path="*" element={<h1>Error</h1>} />
      </Route>
    </Routes>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
