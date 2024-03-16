import styles from "./CommentsPage.module.css";
import {CommentsList, ErrorFallback, LoaderFallback} from "src/widgets";
import {Button} from "src/shared/ui";

import {useState} from "react";
import {useGetAuthors, useGetComments} from "src/shared/api/hooks";

export const CommentsPage = () => {
    const [page, setPage] = useState(1);

    const {authorsData, refetchAuthors, isAuthorsError, isAuthorsLoading} =
        useGetAuthors();
    const {commentsData, refetchComments, isCommentsError, isCommentsLoading} =
        useGetComments(page);

    const handleReloadData = () => {
        if (isAuthorsError) refetchAuthors();
        if (isCommentsError) refetchComments();
    };

    if (isCommentsLoading || isAuthorsLoading) return <LoaderFallback />;
    if (isCommentsError || isAuthorsError)
        return <ErrorFallback handleReload={handleReloadData} />;

    const {total_pages, page: currentPage} = commentsData.pagination;

    return (
        <div className={styles.wrapper}>
            <CommentsList
                page={page}
                authors={authorsData}
                comments={commentsData.data}
                key={"commentsList"}
            />
            {total_pages !== currentPage ? (
                <Button onClick={() => setPage(page + 1)}>Загрузить еще</Button>
            ) : (
                <Button onClick={() => setPage(1)}>Вернуться назад</Button>
            )}
        </div>
    );
};
