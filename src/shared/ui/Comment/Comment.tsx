import imgSrc from "../../../assets/avatars/chew.jpeg";
import clsx from "clsx";
import styles from "./Comment.module.css";
import {CommentProps} from "./Comment.types";
import {formatDate} from "src/shared/utils/formatDate";
import {LikesCounter} from "../LikesCounter/LikesCounter";
import {useQueryClient} from "react-query";

export const Comment = ({comment, children, child, author}: CommentProps) => {
    const commentStyles = clsx(styles.wrapper, {[styles.child]: child});
    const {avatar, id: authorId, name} = author;
    const {created, id: commentId, likes, parent, text} = comment;




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
                    onClick={() => {}}
                    iconType="outline"
                    likesAmount={likes}
                />
            </div>
            <div className={styles.text}>{text}</div>
        </div>
    );
};
