import {Spinner} from "src/shared/ui/Spinner/Spinner";
import styles from "./loaderFallback.module.css";

export const LoaderFallback = () => {
    return (
        <div className={styles.wrapper}>
            <Spinner />
        </div>
    );
};
