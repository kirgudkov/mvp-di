A simple DI package inspired by the MVP pattern.
It can inject the presentation layer in React.js/React Native applications.

## Installation
Run `yarn add mvp-di`
## Usage

- ##### create file DITypes.js

```typescript
import {PresenterMap} from "mvp-di";

export enum ComponentEnum {
  HOME = 'Home',
  SETTINGS = 'Settings'
}

export default new PresenterMap<ComponentEnum>()
  .set(ComponentEnum.HOME, HomePresenter)
  .set(ComponentEnum.SETTINGS, SettingsPresenter);

```

- ##### call `DIBuilder.build(DITypes)` in your root component

- ##### implement view interface:

```typescript
import {MvpView} from "mvp-di";

interface HomeView extends MvpView {
  showMessage: Function
}
```

- ##### implement presenter:

```typescript
import {bind, Presenter} from 'mvp-di';

class HomePresenter extends Presenter<HomeView>{

  @bind
  public handleOnPress() {
    this.view.showMessage();
  }
}
```

- ##### implement component and use `@inject` decorator to inject dependency:

```typescript
import {inject, bind, viewProperty} from 'mvp-di';

class Home extends React.Component<{}, {}> implements HomeView {

  @inject 
  private presenter!: HomePresenter;
  
  public getClassName(): string {
    return ComponentEnum.HOME;
  }

  @bind
  @viewProperty
  public showMessage(): void {
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

`@inject` decorator instantiate `HomePresenter.ts` 
object and append it to `Home.tsx` object automatically.

`@viewProperty` decorator marks property as `Injectable` 
and provides access it for `HomePresenter.ts`

`@bind` decorator is also available

## Important
The `Presenter <T>` extension provides the ability to communicate with View methods. 
And this is a must. `Presenter <T>` provides a `view` property that gives 
access to the View methods.

All of your view interfaces must extends the `MvpView`. 
It will oblige your views to implement `getClassName` method.

`getClassName` have to return string that exactly like in DITypes enum
