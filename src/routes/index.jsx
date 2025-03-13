import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '../components/Layout';
import Trending from '~/pages/Trending';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/:username', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }, // Trang lẻ dùng riêng layout không bao gồm defaultLayout
    { path: '/trending', component: Trending, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
