import {UseQueryResult} from "react-query";

export interface CommentsListProps {
    authors: UseQueryResult<any, unknown>;
    comments: UseQueryResult<any, unknown>;
}
