# REACT RENDER PROPS

* Understanding React Render Props by Example - [LINK](https://levelup.gitconnected.com/understanding-react-render-props-by-example-71f2162fd0f2)

```bash
import React from 'react';

const SharedComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.render()}
      </div>
    );
  }
}

export default SharedComponent;

------

import React from 'react';
import SharedComponent from 'components/SharedComponent';

const SayHello = () => (
  <SharedComponent render={() => (
    <span>hello!</span>
  )} />
);
// This would return:
// <div>
//   <span>hello!</span>
// </div>
```

* BASIC EXAMPLE

```bash
import React from 'react';

const SECRET_TO_LIFE = 42;

class ShareSecretToLife extends React.Component {
  render() {
    return (
      <div>
       {this.props.render({ secretToLife: SECRET_TO_LIFE })}
      </div>
    );
  }
}

-----

const ShareSecretWithWorld = () => (
  <ShareSecretToLife 
    render={({ secretToLife }) => (
      <h1>
        <b>{secretToLife}</b>
      </h1>
    )}
  />
);
// This will return:
// <div>
//   <h1>
//     <b>
//       42
//     </b>
//   </h1>
// </div>
```
