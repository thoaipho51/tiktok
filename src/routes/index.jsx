import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "../components/Layout";
import Trending from "~/pages/Trending";
const publicRoutes = [
    {patch: '/', component: Home},
    {patch: '/following', component: Following},
    {patch: '/profile', component: Profile},
    {patch: '/upload', component: Upload, layout: HeaderOnly}, // Trang lẻ dùng riêng layout không bao gồm defaultLayout
    {patch: '/trending', component: Trending, layout: null},
    

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}