import styles from "./Button.module.css";
import clsx from "clsx";
import {ButtonProps} from "./Button.types";

export const Button = ({children, disabled = false, onClick}: ButtonProps) => {
    const buttonStyles = clsx(styles.button, {[styles.disabled]: disabled});

    return (
        <button onClick={onClick} disabled={disabled} className={buttonStyles}>
            {children}
        </button>
    );
};
