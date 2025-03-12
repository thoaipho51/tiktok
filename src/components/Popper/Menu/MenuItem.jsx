import Button from '~/components/Button';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


const MenuItem = ({ data , onClick}) => {
    const classMenuItem = cx('menu-item', {
        separate: data.separate
    })
    return (
        <Button className={classMenuItem} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
        
    );
};

export default MenuItem;
