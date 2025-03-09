import images from '~/assets/images';

// import 'tippy.js/dist/tippy.css'; // optional

import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import AccountItem from '../../../AccountItem';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('input-search')}
                            placeholder="Search acount and video"
                            type="text"
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text to="/upload">
                        Upload
                    </Button>
                    <Button primary >Log in</Button>
                    <Button>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
