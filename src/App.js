import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { IteamDetailContainer } from "./components/ItemDetail/IteamDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
      <Route  path="/" element={<ItemListContainer />} />
      <Route  path="/category/:categoryName" element={<ItemListContainer />} />
      <Route path="/itemDetail/:id" element={<IteamDetailContainer />} />
      <Route path="*" element={<h1>Error</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
