# useState hook
#  using when?
WHEN the data changes, the interface is automatically updated (re-rendered according to the data).
### How to use
```jsx
import { useState } from 'react'
function Component () {
const Istate, setStatel = useState(initState)
...
}
```
### NOTE
- Component is re-rendered after 'setState'
- Initial state is only used for the first time
- Set state with callback?
- Initial state with callback?
- Set state is to replace state with new value