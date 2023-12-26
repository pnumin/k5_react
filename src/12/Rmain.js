import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rhome from "./Rhome";
import Rpage1 from "./Rpage1";
import Rpage2 from "./Rpage2";
import Rnav from "./Rnav";

export default function Rmain() {
  return (
    <main className="container mx-auto px-4 h-screen"> 
      <BrowserRouter>
        <Rnav />
        <Routes>
          <Route path="/" element={<Rhome />} />
          <Route path="/page1/:item1" element={<Rpage1 />} />
          <Route path="/page2" element={<Rpage2 />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
