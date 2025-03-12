import HeadlessTippy from '@tippyjs/react/headless';

import { useEffect, useState, useRef } from 'react';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/components/AccountItem';
import { PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.module.scss';

import classNames from 'classnames/bind';
import { SearchIcon } from '../../../Icons';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 1, 1, 1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResults('')
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResults && searchResults.length > 0}
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
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search acount and video"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={()=> setShowResults(true)}
                />
                {searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
