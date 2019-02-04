import { TweetModel } from "./tweet_model";

export class UserDetails  {
    userid: string;
    id?: string;
    username: string;
    password: string;
    email: string;
     address: string;
     gender: string;
     mobile: number;
     verified? : boolean;
    // hobbies: string[];
     profile_pic?: string;
     dob: Date;
     fname: string;
     lname: string;
     followers?: FollowingModel[];
    followings?: FollowingModel[]; 
    tweets?: TweetModel[];
    bio: string
}
export class FollowingModel {
    user: string;

}

// export interface SomeType {
//     count: number;
//   }
//   export interface UserProfile {
//       UserDetails: UserDetails;
//       UsersTweets: TweetModel;
//   }
