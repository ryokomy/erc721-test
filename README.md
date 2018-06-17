# erc721-test

## setup
```
yarn
yarn add truffle
```

## deploy
```
truffle deploy --network rinkeby --reset
```

## easy interaction
```
truffle exec --network rinkeby tools/exec_mints.js
truffle exec --network rinkeby tools/exec_views.js
```
when minting, set json and image files on correct uri.
