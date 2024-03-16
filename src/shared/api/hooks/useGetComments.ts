import {useState} from "react";
import {useQuery} from "react-query";
import getCommentsRequest from "src/api/comments/getCommentsRequest";

export const useGetComments = (page: number) => {
    const [refetched, setRefetched] = useState(false);

    const {
        data: commentsData,
        refetch: refetchComments,
        isError: isCommentsError,
        isLoading: isCommentsLoading,
        ...query
    } = useQuery(["comments", page], () => getCommentsRequest(page), {
        onError() {
            if (!refetched) refetchComments();
            setRefetched(true);
        },
    });

    return {
        commentsData,
        refetchComments,
        isCommentsError,
        isCommentsLoading,
        ...query,
    };
};
