import { TweetModel } from "./tweet_model";

export class UserInfo  {
    
    _id: string;
    // email: string;
    // name: string;
    // exp: number;
    // iat: number;
    // id?: string;
    // // name: string;
    //  address: string;
    //  gender: string;
    //  mobile: number;
    // //  verified? : boolean;
    // interest?: string[];
    // profile_img?: string;
    //  dob: Date;
    // //  fname: string;
    // //  lname: string;
    // //  followers?: FollowingModel[];
    // // followings?: FollowingModel[]; 
    // // tweets?: TweetModel[];
    // bio?: string;
    // // status?: boolean;
    // publicguid?: string; 
    address: string;
    bio: string;
    cover_image: string;
    user_name: string;
    dob: Date;
    id: string;
    interests: string;
    mobile: string;
    profile_pic: string;
    userid: string;
    website: string;
    socialUser: boolean
}
export interface TokenResponse {
token: string;
}
export interface TokenPayload {
    email: string;
    password: string;
    user_name: string;
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
