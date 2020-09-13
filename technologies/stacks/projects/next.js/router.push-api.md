# Router.push API

[link](https://spectrum.chat/next-js/general/add-query-params-to-router-push-same-way-as-link-does-it~105ec690-5734-4ff9-8175-0303af5c04e6)

```bash
<Link href="/profile" as="/@jauny"> // Router.push('/profile', '/@jauny')
<Link href="/profile?abc=def" as="/@jauny"> // Router.push('/profile?abc=def', '/@jauny')
<Link href={{pathname: '/profile', query: {abc: 'def'}} as="/@jauny"> // Router.push({pathname: '/profile', query: {abc: 'def'}, '/@jauny')
```