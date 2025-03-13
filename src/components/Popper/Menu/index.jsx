import HeadlessTippy from '@tippyjs/react/headless';

import { PopperWrapper } from '~/components/Popper';

import MenuItem from './MenuItem';
import HeaderPopper from './HeaderPopper';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
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
        <HeadlessTippy
            placement="bottom-end"
            offset={[8,8]}
            interactive
            delay={[0, 800]} // delay khi hover và bỏ ra
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {menuIndex.length > 1 && (
                            <HeaderPopper
                                title={'Language'}
                                //Giảm đi một cấp =>lấy phần tử từ phần tử đầu tiên đến phần tử trước phần tử cuối
                                onBack={() => {
                                    setMenuIndex((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={()=> setMenuIndex(prev => prev.slice(0,1))}
        >
            {children}
        </HeadlessTippy>
    );
};

export default Menu;
