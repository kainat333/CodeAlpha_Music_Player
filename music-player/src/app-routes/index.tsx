
import { BrowserRouter,  Routes , Route } from "react-router-dom"
import AppLayout from "../app-layout"
import AllSongs from "../pages/all-songs"
import Albums from "../pages/album"
import Home from "../pages/home"

const AppRoutes=()=>{
    return(
<BrowserRouter>
<Routes>
    <Route element={<AppLayout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/all-songs" element={<AllSongs/>} />
    <Route path="/albums" element={<Albums/>} />
    </Route>
</Routes>
    </BrowserRouter>
    );
}
export default AppRoutes