import { Component } from '@angular/core';
import { TweetsProvider } from '../../providers/tweets/tweets';



@Component({
  selector: 'feeds',
  templateUrl: 'feeds.html'
})
export class FeedsComponent {

  tweetModel;
  constructor(private tweetService: TweetsProvider) {
      this.tweetModel = this.tweetService.tweets;
  }
  
}
