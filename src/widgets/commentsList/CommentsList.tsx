import {Comment} from "src/shared/ui/Comment/Comment";
import styles from "./CommentsList.module.css";

import {CommentsListProps} from "./CommentsList.types";
import {CommentsHeader} from "src/shared/ui/CommentsHeader/CommentsHeader";

export const CommentsList = ({authors, comments}: CommentsListProps) => {
    const Comments = comments.data.data.map((comment: any) => (
        <Comment text={comment.text} />
    ));

    return (
        <div className={styles.wrapper}>
            <CommentsHeader commentsArray={comments.data.data} />
            <div className={styles.commentsContainer}>{Comments}</div>
        </div>
    );
};
