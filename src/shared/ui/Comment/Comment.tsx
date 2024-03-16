import clsx from "clsx";
import styles from "./Comment.module.css";
import {CommentProps} from "./Comment.types";
import {formatDate} from "src/shared/utils/formatDate";
import {useState} from "react";
import {LikesCounter} from "../LikesCounter/LikesCounter";
import {useSetLike} from "src/shared/api/hooks/useSetLike";
import {useSetDislike} from "src/shared/api/hooks/useSetDislike";

export const Comment = ({comment, child, author, page}: CommentProps) => {
    const commentStyles = clsx(styles.wrapper, {[styles.child]: child});
    const {avatar, name} = author;
    const {created, id: commentId, likes, text} = comment;

    const [liked, setLiked] = useState(false);
    const {setLike} = useSetLike();
    const {setDislike} = useSetDislike();

    const handleLike = () => {
        // эндпоинта для лайка нет, поэтому сделал замоканный хук для мутации queryClient кэша
        // получилось некое подобие optimistic ui
        if (!liked) {
            setLike(commentId, page);
            setLiked(true);
        } else {
            setDislike(commentId, page);
            setLiked(false);
        }
    };

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
                    onClick={handleLike}
                    iconType={liked ? "solidLike" : "outline"}
                    likesAmount={likes}
                />
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};
