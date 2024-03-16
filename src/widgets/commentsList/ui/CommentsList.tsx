import {Comment, CommentsHeader} from "src/shared/ui";
import styles from "./CommentsList.module.css";

import {CommentsListProps} from "./CommentsList.types";

export const CommentsList = ({authors, comments, page}: CommentsListProps) => {
    const getCommentsTree = (comments: any, parentId = null) => {
        return comments
            .filter((comment: any) => comment.parent === parentId)
            .map((comment: any) => ({
                ...comment,
                children: getCommentsTree(comments, comment.id),
            }));
    };

    const renderComments = (commentTree: any) => {
        return commentTree.map((comment: any) => {
            const {created, id, author} = comment;
            const authorData = authors.find(
                (authorItem) => authorItem.id === author,
            );
            return (
                <div key={comment.id}>
                    <Comment
                        page={page}
                        author={authorData}
                        comment={comment}
                        key={`${id}-${created}`}
                    />
                    {comment.children && (
                        <div className={styles.childComments}>
                            {renderComments(comment.children)}
                        </div>
                    )}
                </div>
            );
        });
    };

    const commentTree = getCommentsTree(comments);

    const renderedComments = renderComments(commentTree);

    return (
        <div className={styles.wrapper}>
            <CommentsHeader commentsArray={comments} />
            <div className={styles.commentsContainer}>{renderedComments}</div>
        </div>
    );
};