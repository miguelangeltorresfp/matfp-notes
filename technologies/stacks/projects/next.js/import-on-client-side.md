# Import modules in next.js only on client side

* How to import modules from a folder outside node modules in next js
[link](https://stackoverflow.com/questions/58669052/how-to-import-modules-from-a-folder-outside-node-modules-in-next-js)

```bash
let dynamicallyImportPackage = async () => {
let TrackballControls

await import('three/examples/jsm/controls/TrackballControls')
// you can now use the package in here
.then(module => {
    TrackballControls = module.TrackballControls
})
.catch(e => console.log(e))

return TrackballControls
}
```

* Dynamic import - [link](https://nextjs.org/docs/#dynamic-import)

* Dynamic Import Node Module With Next.js - [link](https://stackoverflow.com/questions/52939439/dynamic-import-node-module-with-next-js)

* How to conditionally include packages on client but not server (and vice-versa)?
  [link](https://github.com/zeit/next.js/issues/219)