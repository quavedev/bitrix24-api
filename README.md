# Bitrix24 API

### Using GH Packages in projects

## Github access token

### Create GH Access Token

Visit https://github.com/settings/tokens and create access token

### Configure local NPM to use created access token

Create file in home directory named `.npmrc` with content

```javascript
//npm.pkg.github.com/:_authToken=PERSONAL-ACCESS-TOKEN
```

### Login with your Github username

```shell
npm login --scope=@quavedev --registry=https://npm.pkg.github.com
```

### Github Packages doc

For more information visit
https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

## Local tests

```shell
API_ENDPOINT="http://hostname..." yarn test 
```
