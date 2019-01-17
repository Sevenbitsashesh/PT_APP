export interface TweetModel {
    tweetid: string;
    t_title: string;
    t_image?: string;
    tweetcontent: string;
    t_date: string;
    t_user?: string;
    t_user_pic?: string;
    docid?: string;
    likeDoc?: string;
    liked?: any[],
    like?: boolean,
    
}
export class LikeModel {
    user: string;
}