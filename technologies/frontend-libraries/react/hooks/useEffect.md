# USEEFECCT

* useEffect async
  [link](https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret)

```bash
Until React provides a better way, you can create a helper, useEffectAsync.js:

import { useEffect } from 'react';


export default function useEffectAsync(effect, inputs) {
    useEffect(() => {
        effect();
    }, inputs);
}
Now you can pass an async function:

useEffectAsync(async () => {
    const items = await fetchSomeItems();
    console.log(items);
}, []);
```
