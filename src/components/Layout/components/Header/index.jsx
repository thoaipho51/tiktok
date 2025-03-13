import images from '~/assets/images';

// import HeadlessTippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faKeyboard,
    faCircleQuestion,
    faLanguage,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

//Custon Component
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
// import AccountItem from '~/components/AccountItem';
// import { PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { InboxIcon, MessageIcon, ProfileIcon, UploadIcon } from '../../../Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Ngôn Ngữ',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Bàn phím ảo',
        type: 'keyboard',
    },
];
function Header() {
    const [curentUser, setCurentUser] = useState([
        {
            icon: <ProfileIcon />,
            title: 'Hồ sơ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Xu',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng Xuất',
            to: '/logout',
            separate: true,
            type: 'logout',
        },
    ]);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Đổi ngôn ngữ', menuItem.title);
                break;
            case 'keyboard':
                console.log('Bật bàn phím ảo');
                break;
            case 'logout':
                break;
            default:
                console.log('Làm gì đó khác');
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {curentUser ? (
                        <>
                            <Tippy delay={[[0, 150]]} content="Tải video lên" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[[0, 150]]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[[0, 150]]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="26px" height="26px" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="/upload">
                                Upload
                            </Button>
                            <Button
                                primary
                                onClick={() => {
                                    setCurentUser(true);
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={curentUser ? curentUser : MENU_ITEM} onChange={handleMenuChange}>
                        {curentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://img.lovepik.com/png/20231127/young-businessman-3d-cartoon-avatar-portrait-character-digital_708913_wh1200.png"
                                alt="Avatar User"
                                // fallback='https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
