import Home from './root/Home';
import Contact from './root/Contact';
import NewsPage from './root/NewsPage';
import User from './root/User';

import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Search from './root/Search';
const RouteApp = () => {
    const [idUser, setIdUser] = useState('');
    const [searchItem, setSearchItem] = useState('');

    const publicRoutes = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/newspage',
            component: NewsPage,
        },
        {
            path: '/contact',
            component: Contact,
        },
    ];

    return (
        <div>
            <h1>Đây là phần điều hướng</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">About</Link>
                </li>
                <li>
                    <Link to="/newspage">NewsPage</Link>
                </li>
                <li>
                    <input type="text" onChange={(e) => setIdUser(e.target.value)} placeholder="Nhập ID USER" />
                    <Link to={`/user/${idUser}`}>User</Link>
                </li>
                <li>
                    <input type="text" onChange={(e) => setSearchItem(e.target.value)} placeholder="Search " />
                    <Link to={`/search?q=${searchItem}`}>Search</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/newspage" element={<NewsPage />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    );
};

export default RouteApp;
