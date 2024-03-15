import {Button} from "src/shared/ui/Button/Button";
import styles from "./errorFallback.module.css";

export const ErrorFallback = () => {
    const onClick = () => window.location.reload();
    
    return (
        <div className={styles.wrapper}>
            <div>Ошибка при получении данных</div>
            <Button onClick={onClick}>Перезагрузить</Button>
        </div>
    );
};
