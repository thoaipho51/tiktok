import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';

import MenuItem from './MenuItem';
import HeaderPopper from './HeaderPopper';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { data } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFn = ()=> {} //Không bị lỗi khi không truyền props (callback) bên ngoài vào

const Menu = ({ children, items = [], onChange =defaultFn }) => {
    const [menuIndex, setMenuIndex] = useState([{ data: items }]);
    
    const curentMenuIndex = menuIndex[menuIndex.length - 1];

    const renderItems = () => {
        return curentMenuIndex.data.map((item, idx) => {
            const menuParent = !!item.children;

            return (
                <MenuItem
                    key={idx}
                    data={item}
                    onClick={() => {
                        if (menuParent) {
                            setMenuIndex((prevState) => [...prevState, item.children]);
                        }else{
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            placement="bottom-end"
            interactive
            delay={[0, 800]} // delay khi hover và bỏ ra
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {menuIndex.length > 1 && (
                            <HeaderPopper
                                title={'Language'}
                                onBack={() => {
                                    setMenuIndex((prev) => prev.splice(menuIndex.length - 1, 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
