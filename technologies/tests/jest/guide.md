# JEST GUIDE

## Update snapshots - `npx jest u`

## Solución para el problema de correr jest de forma interactiva cuando lo ejecutas en una app creada con create-react-app

```bash
  "scripts": {
    "start": "CHOKIDAR_USEPOLLING=true react-scripts start",
    "build": "react-scripts build",
    "test": "CI=true react-scripts test",
    "eject": "react-scripts eject"
  },
```

* Don't force "--watch" into Jest - [LINK](https://github.com/facebook/create-react-app/issues/784)
* Running CRA Jest in non-interactive mode - [LINK](https://stackoverflow.com/questions/39724017/running-cra-jest-in-non-interactive-mode)
* OFFICIAL DOCUMENTATION - [LINK](https://jestjs.io/docs/en/cli#ci)