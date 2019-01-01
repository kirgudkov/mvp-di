A simple DI package inspired by the MVP pattern.
It can inject the presentation layer in React.js/React Native applications.

## Installation
Run `yarn add mvp-di`
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
import {inject, bind, viewProperty} from 'mvp-di';

class Home extends React.Component implements HomeView {

  @inject 
  presenter!: HomePresenter;

  @bind
  @viewProperty
  showMessage(): void {
    Alert.alert('Message', 'Hello');
  }

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
import {bind, Presenter} from 'mvp-di';

export class HomePresenter extends Presenter<HomeView>{

  @bind
  handleOnPress() {
    this.view.showMessage();
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
`@viewProperty` decorator marks property as `Injectable` 
and provides access it for `HomePresenter.ts`

## Important
The `Presenter <T>` extension provides the ability to communicate with View methods. 
And this is a must. `Presenter <T>` provides a `view` property that gives 
access to the View methods.

If you need to pass some properties, such as `dispatch ()` for example, try to wrap it:

```
@bind
@viewProperty
public dispatch(action: Function): void {
  this.props.dispatch(action);
}
```
<a href="https://github.com/KirillGudkov/DI-example">Example</a>
