import { Component, Input } from '@angular/core';
import { TweetsProvider } from '../../providers/tweets/tweets';



@Component({
  selector: 'feeds',
  templateUrl: 'feeds.html'
})
export class FeedsComponent {

  @Input('tweetModel') tweetModel;
  constructor(private tweetService: TweetsProvider) {
      this.tweetModel = this.tweetService.tweets;
  }
  
}
