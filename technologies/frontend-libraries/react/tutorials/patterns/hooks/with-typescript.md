# REACT HOOKS & TYPESCRIPT GUIDE

* useTypescript — A Complete Guide to React Hooks and TypeScript - [LINK](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

* The React Typescript types allow us to handle children, context, propTypes, contexTypes, defaultProps, displayName:

In FC/FunctionComponent:

```bash
interface FunctionComponent<P = {}> {
  (props: P & { children?: ReactNode }, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

* Basic Hooks

useState
useEffect
useContext

* Advanced Hook

useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue

## useState with Typescript

basic example

```bash
import * as React from 'react';

const MyComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {count}
    </div>
  );
};
```

Typescript example

```bash
import * as React from 'react';

interface IUser {
  username: string;
  email:  string;
  password: string;
}

const ComplexState = ({ initialUserData }) => {
  const [user, setUser] = React.useState<IUser | null>(initialUserData);
  
  if (!user) {
    // do something else when our user is null
  }

  return (
    <form>
      <input value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
      <input value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
      <input value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
    </form>  
  );
}
```

## useEffect with Typescript

basic example

```bash
useEffect(() => {
  const subscription = props.source.beginAPIPoll();
  return () => {
    // Clean up the subscription
    subscription.cancelAPIPoll();
  };
});
```

## useContext with TypeScript

```bash
import { createContext, useContext } from 'react';
props ITheme {
  backgroundColor: string;
  color: string;
}
// The standard way to create context. It takes an initial value object
const ThemeContext = createContext<ITheme>({
  backgroundColor: 'black',
  color: 'white',
})
// Accessing context in a child component
const themeContext = useContext<ITheme>(ThemeContext);
```

## useReducer with TypeScript