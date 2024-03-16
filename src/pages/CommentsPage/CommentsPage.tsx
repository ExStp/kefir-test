import styles from "./CommentsPage.module.css";

import {useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import {Button} from "src/shared/ui/Button/Button";
import {CommentsList} from "src/widgets/commentsList/CommentsList";
import {ErrorFallback} from "src/widgets/errorFallback/errorFallback";
import {LoaderFallback} from "src/widgets/loaderFallback/loaderFallback";

export const CommentsPage = () => {
    const [page, setPage] = useState(1);

    const authors = useQuery("authors", getAuthorsRequest);
    const comments = useQuery(["comments", page], () =>
        getCommentsRequest(page),
    );

    if (comments.isLoading || comments.isLoading) return <LoaderFallback />;
    if (comments.error || authors.error) return <ErrorFallback />;
    const {total_pages, page: currentPage} = comments.data.pagination;

    return (
        <div className={styles.wrapper}>
            <CommentsList
                authors={authors.data}
                comments={comments.data.data}
                key={"commentsList"}
            />
            {total_pages !== currentPage ? (
                <Button
                    onClick={() => setPage(page + 1)}
                >
                    Загрузить еще
                </Button>
            ) : (
                <Button
                    onClick={() => setPage(1)}
                >
                    Вернутсья назад
                </Button>
            )}
        </div>
    );
};
