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

### Available Functions (All descriptions are taken from [c99](https://api.c99.nl/))
| Functions          | Description                                                                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| subdomainFinder()  | Performs an advanced subdomain scan to find most subdomains of the given domain.                                                                                              |
| phoneLookup()      | Get more information about any phone number.                                                                                                                                  |
| skypeResolver()    | Attempts to grab an IP address of a Skype account, results are not guaranteed. (This is completely legal as it uses publicly available records)                               |
| ip2skype()         | Shows all Skype accounts with that specific IP.(This is completely legal as it uses publicly available records)                                                               |
| firewallDetector() | Scans to detect if a website is behind a firewall and determines what firewall it is.                                                                                         |
| portScanner()      | Scans all ports of given host.                                                                                                                                                |
| ping()             | Pings a host 4 times and shows the result.                                                                                                                                    |
| getHostname()      | Gets host of given IP address.                                                                                                                                                |
| dnsChecker()       | Performs an advanced check on the specific URL. Second parameter is optional. If left empty, all servers will be used. Possible check types: a, aaaa, cname, mx, ns, soa, txt |
| dnsResolver()      | Gets server IP of given host.                                                                                                                                                 |
| domainChecker()    | Checks whether a domain is available or not, no matter what extension.                                                                                                        |
| domainHistory()    | Checks available IP history of a domain with dates.                                                                                                                           |
| ip2domains()       | Attempts to find websites hosted on the specific IP address.                                                                                                                  |
| alexaRank()        | Grab the latest Alexa Rank information of any website, including backlinks and top country.                                                                                   |
| whois()            | Whois check on a domain to see who the domain owner is.                                                                                                                       |
| createScreenshot() | Creates a screenshot of any website/url you want.                                                                                                                             |
| geoIp()            | Locates the given host/ip address.                                                                                                                                            |
| upOrDown()         | Checks if a host is up or down.                                                                                                                                               |

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
