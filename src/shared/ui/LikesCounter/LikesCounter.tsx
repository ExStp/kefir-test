import styles from './LikesCounter.module.css'

import DislikeIcon from "../../icons/dislike-icon.png";
import OutlineLikeIcon from "../../icons/outline-like-icon.png";
import SolidLikeIcon from "../../icons/solid-like-icon.png";
import {LikeIconTypes, LikesCounterProps} from "./LikesCounter.types";

export const LikesCounter = ({iconType, likesAmount}: LikesCounterProps) => {
    const Icon: Record<LikeIconTypes, string> = {
        dislike: DislikeIcon,
        outline: OutlineLikeIcon,
        solidLike: SolidLikeIcon,
    };

    return (
        <div className={styles.counterWrapper}>
            <img src={Icon[iconType]} alt={iconType} />
            <span>{likesAmount}</span>
        </div>
    );
};
