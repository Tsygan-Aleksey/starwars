import {Header} from "./header";
import {Items} from "./items/Items";
import {Route, Routes} from "react-router-dom";
import {Item} from "./item";
export function App() {
  return (
    <div className="App container-fluid">
      <Header/>
        <Routes>
            <Route path="" element={<div className="container-fluid">
                <img className="img-fluid" src="https://gallery.yopriceville.com/var/albums/Misk/Star_Wars_The_Last_Jedi_FullHD_Wallpaper.jpg?m=1512701142" alt=""/>
            </div>} exact/>
            <Route path="/:type" element={<Items />} exact/>
            <Route path="/:type/:id" element={<Item/>} exact/>
        </Routes>
    </div>
  );
}


