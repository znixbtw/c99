# C99 Unofficial API Wrapper

### Installing
Using npm:

```bash
$ npm i @znixbtw/c99
```

Using yarn:

```bash
$ yarn add @znixbtw/c99
```


### Usage
```js
const client = new C99({
	key: 'XXXX-XXXX-XXXX-XXXX'
});

const pingIp = await client.ping('1.1.1.1')

console.log(pingIp);
```
 
### Docs
* [Official](https://api.c99.nl/)

### License
[MIT](LICENSE)
