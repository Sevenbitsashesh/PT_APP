import { Component } from '@angular/core';
import { SharedProvider } from '../../providers/shared/shared';
import { DataProvider } from '../../providers/data/data';
import { UseractivityProvider } from '../../providers/useractivity/useractivity';
import { TweetsProvider } from '../../providers/tweets/tweets';


@Component({
  selector: 'feeds',
  templateUrl: 'feeds.html'
})
export class FeedsComponent {

  
  userModel;
  constructor(private tweetService: TweetsProvider) {
  
    
  }

}
