
## Installation
add `"dependency-injector": "github:KirillGudkov/dependency-injector#master"`
your to package.json and run `npm install`
## Usage

- create file DITypes.js
```
import { HomePresenter } from "./HomePresenter";

export default {
  'Home': HomePresenter
}

```

- call `DIBuilder.build(DITypes)` in your root component

- use `@inject` decorator to inject dependency. Something like:
```
import {inject, bind, injectedProperty} from 'dependency-injector';

class Home extends React.Component implements HomeView {

  @inject 
  presenter!: HomePresenter;

  @bind
  @injectedProperty
  showMessage(): void {
    Alert.alert('Message', 'Hello')
  };

  render() {
    return (
      <View>
        <Button title={'Say Hello'} onPress={this.presenter.handleOnPress} />
      </View>
    )
  }
}

```


HomePresenter.ts:

```
import {bind, Presenter} from "dependency-injector";

export class HomePresenter extends Presenter<HomeView>{

  @bind
  handleOnPress() {
    this.view.showMessage()
  }
}
```

HomeView.ts:
```
export interface HomeView {
  showMessage: Function
}
```

`@inject` decorator instantiate `HomePresente.ts` 
object and append it to `Home.tsx` object automatically.
`@injectedProperty` decorator marks property as `Injectable` 
and provides access it for `HomePresenter.ts`
