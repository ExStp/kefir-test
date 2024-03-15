export const getLikesAmount = (commentsArray: any): number => {
    return commentsArray.reduce(
        (acc: number, comment: any) => acc + comment.likes,
        0,
    );
};
