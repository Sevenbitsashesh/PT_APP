import { TweetModel } from "./tweet_model";

export class UserDetails  {
    id?: string;
    user_name: string;
    email: string;
    name: string;
     address: string;
     gender: string;
     mobile: number;
    //  verified? : boolean;
    interest?: string[];
    profile_img?: string;
     dob: Date;
    //  fname: string;
    //  lname: string;
    //  followers?: FollowingModel[];
    // followings?: FollowingModel[]; 
    // tweets?: TweetModel[];
    bio?: string;
    // status?: boolean;
    publicguid?: string; 
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
