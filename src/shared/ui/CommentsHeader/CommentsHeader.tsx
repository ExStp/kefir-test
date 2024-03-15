import styles from "./CommentsHeader.module.css";

import {LikesCounter} from "../LikesCounter/LikesCounter";
import {CommentsHeaderProps} from "./CommentsHeader.types";
import {getLikesAmount} from "src/widgets/commentsList/lib/getLikesAmount";

export const CommentsHeader = ({commentsArray}: CommentsHeaderProps) => {
    return (
        <div className={styles.wrapper}>
            <div>{commentsArray.length} комментариев</div>
            <LikesCounter
                iconType="dislike"
                likesAmount={getLikesAmount(commentsArray)}
            />
        </div>
    );
};
