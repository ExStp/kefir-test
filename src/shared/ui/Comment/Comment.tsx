import clsx from "clsx";
import styles from "./Comment.module.css";
import {CommentProps} from "./Comment.types";
import {formatDate} from "src/shared/utils/formatDate";
import {useState} from "react";
import {LikesCounter} from "../LikesCounter/LikesCounter";

export const Comment = ({comment, children, child, author}: CommentProps) => {
    const commentStyles = clsx(styles.wrapper, {[styles.child]: child});
    const {avatar, id: authorId, name} = author;
    const {created, id: commentId, likes, parent, text} = comment;

    const [liked, setLiked] = useState(false);

    return (
        <div className={commentStyles}>
            <div className={styles.commentHeader}>
                <div className={styles.authorWrapper}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <div className={styles.authorInfoWrapper}>
                        <div>{name}</div>
                        <div className={styles.date}>{formatDate(created)}</div>
                    </div>
                </div>
                <LikesCounter
                    // в src/api нет post эндпоинта для лайка
                    // можно конечно сделать хук, который в queryCache через queryClient.setQueryData добавит этот лайк
                    // типо optimistic ui, но не вижу в этом смысла
                    onClick={() => setLiked(!liked)}
                    iconType={liked ? "solidLike" : "outline"}
                    likesAmount={liked ? likes + 1 : likes}
                />
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};
