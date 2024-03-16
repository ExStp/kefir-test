import {Button} from "src/shared/ui/Button/Button";
import styles from "./errorFallback.module.css";
import {ErrorFallbackProps} from "./errorFallback.types";

export const ErrorFallback = ({handleReload}: ErrorFallbackProps) => {
    
    const onClick = () => {
        if (handleReload) {
            handleReload();
        } else {
            window.location.reload();
        }
    };

    return (
        <div className={styles.wrapper}>
            <div>Ошибка при получении данных</div>
            <Button onClick={onClick}>Перезагрузить</Button>
        </div>
    );
};
