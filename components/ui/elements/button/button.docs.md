---
description: An imperfect button.
labels: ['react', 'typescript', 'button']
---

import { Button } from './button';

> **Try importing a component from another remote scope**
>
> This component uses the _imported_ ['dots-loader' component](https://bit.dev/teambit/teaching/ui/elements/dots-loader) from teambit's 'teaching' scope. Try replacing it with another loader:
>
> - Head over teambit's ['design' scope](https://bit.dev/teambit/design) to explore the ['round-loader'](https://bit.dev/teambit/design/ui/round-loader) component.
> - Import it into this workspace using `bit import teambit.design/ui/round-loader`
> - Use the newly-imported component (in this 'button' component) by referencing to it using its generated package name `import { RoundLoader } from '@teambit/ui.round-loader'`
> - You can also modify the imported component to fit your own needs (you'll find it in your `components` directory)
> - See [this link](https://harmony-docs.bit.dev/components/importing) to lean more about importing components from remote scopes.

### Using the button component

Use the live playground below to learn how to use this component.

- Remove the `isLoading` prop to see the button as 'active'
- Add the `disabled` prop to see it disabled without indicating loading

```jsx live
<Button isLoading>Click here</Button>
```
