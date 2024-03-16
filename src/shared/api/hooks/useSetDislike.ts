import {useQueryClient} from "react-query";

export const useSetDislike = () => {
    const queryClient = useQueryClient();

    const setDislike = (commentId: number, page: number) => {
        const {data, pagination} = queryClient.getQueryData<any>([
            "comments",
            page,
        ]);
        const newData = data.map((comment: any) => {
            if (comment.id !== commentId) return comment;
            else return {...comment, likes: comment.likes - 1};
        });
        queryClient.setQueryData(["comments", page], {
            data: newData,
            pagination,
        });
    };

    return {setDislike};
};
