import {useState} from "react";
import {useQuery} from "react-query";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

export const useGetAuthors = () => {
    const [refetched, setRefetched] = useState(false);

    const {
        data: authorsData,
        refetch: refetchAuthors,
        isError: isAuthorsError,
        isLoading: isAuthorsLoading,
        ...query
    } = useQuery("authors", getAuthorsRequest, {
        onError() {
            if (!refetched) refetchAuthors();
            setRefetched(true);
        },
    });

    return {
        authorsData,
        refetchAuthors,
        isAuthorsError,
        isAuthorsLoading,
        ...query,
    };
};
