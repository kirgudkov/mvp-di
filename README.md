
## Installation
add `"dependency-injector": "github:KirillGudkov/dependency-injector#master"`
your to package.json and run `npm install`
## Usage

create file DITypes.js
```
import { HomePresenter } from "./HomePresenter";

export default {
  'Home': HomePresenter
}

```

Then call `DIBuilder.build(DITypes)` in your root component

Then use decorators `@inject`,  `@injectedProperty` and `@bind` to inject your dependencies
like:
```
import {inject, bind, injectedProperty} from 'dependency-injector';

class Home extends React.Component implements HomeView {

  @inject 
  presenter!: HomePresenter;

  @bind
  @injectedProperty // <- that provide access to this method from presenter
  showMessage(): void {
    Alert.alert('Message', 'Hello')
  };

  render() {
    return (
      <View>
        <Button title={'Say Hello'} onPress={this.presenter.handleOnClick} />
      </View>
    )
  }
}

```


and HomePresenter:

```
import {bind} from "dependency-injector";

export class HomePresenter {
  view: HomeView;

  constructor(view: HomeView) {
    this.view = view
  }

  @bind
  handleOnClick() {
    this.view.showMessage()
  }
}
```
