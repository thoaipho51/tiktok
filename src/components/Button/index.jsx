import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

import { Link } from 'react-router-dom';

const Button = ({
    to,
    href,
    rounded= false,
    disable = false,
    text = false,
    primary = false,
    small = false,
    lage = false,
    outline = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = a;
    }   

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        lage,
        text,
        disable,
        rounded
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}

        </Component>
    );
};

export default Button;
