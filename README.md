# react-native-shake-reanimated
A React Native component to shake child componets wrapped around it. Usually used to show error state. Created using [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Usage
Copy paste the file in your components folder or wherever you want.

```jsx
import { Shake, type ShakeRef } from 'Shake'; //import from location

const textRef = React.createRef<ShakeRef>();

const onSubmit = (data) => {
  //validation
  if(data.text === ''){
    textRef.current.shake();
  }
};

<Shake ref={textRef}>
  <Text>Hello World</Text>
</Shake>
```
