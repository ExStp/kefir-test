export type LikeIconTypes = "dislike" | "outline" | "solidLike";

export interface LikesCounterProps {
    iconType: LikeIconTypes;
    likesAmount: number;
    onClick?: () => void;
}
