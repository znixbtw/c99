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
Using import/export
```js
import C99 from '@znixbtw/c99';
```
Using require()
```js
const C99 = require('@znixbtw/c99');
```

### Usage
```js
// Initalizing
const client = new C99({
	key: 'XXXX-XXXX-XXXX-XXXX'
});

// Using async/await
async function ping() {
	try {
		const response = await client.ping('1.1.1.1');
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}

// Using promises
client
	.ping('1.1.1.1')
	.then((response) => console.log(response))
	.catch((error) => console.error(error));
```

### Available Functions (All descriptions are taken from [c99](https://api.c99.nl/))
| Functions               | Description                                                                                                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| subdomainFinder()       | Performs an advanced subdomain scan to find most subdomains of the given domain.                                                                                              |
| phoneLookup()           | Get more information about any phone number.                                                                                                                                  |
| skypeResolver()         | Attempts to grab an IP address of a Skype account, results are not guaranteed. (This is completely legal as it uses publicly available records)                               |
| ip2skype()              | Shows all Skype accounts with that specific IP.(This is completely legal as it uses publicly available records)                                                               |
| firewallDetector()      | Scans to detect if a website is behind a firewall and determines what firewall it is.                                                                                         |
| portScanner()           | Scans all ports of given host.                                                                                                                                                |
| ping()                  | Pings a host 4 times and shows the result.                                                                                                                                    |
| getHostname()           | Gets host of given IP address.                                                                                                                                                |
| dnsChecker()            | Performs an advanced check on the specific URL. Second parameter is optional. If left empty, all servers will be used. Possible check types: a, aaaa, cname, mx, ns, soa, txt |
| dnsResolver()           | Gets server IP of given host.                                                                                                                                                 |
| domainChecker()         | Checks whether a domain is available or not, no matter what extension.                                                                                                        |
| domainHistory()         | Checks available IP history of a domain with dates.                                                                                                                           |
| ip2domains()            | Attempts to find websites hosted on the specific IP address.                                                                                                                  |
| alexaRank()             | Grab the latest Alexa Rank information of any website, including backlinks and top country.                                                                                   |
| whois()                 | Whois check on a domain to see who the domain owner is.                                                                                                                       |
| createScreenshot()      | Creates a screenshot of any website/url you want.                                                                                                                             |
| geoIp()                 | Locates the given host/ip address.                                                                                                                                            |
| upOrDown()              | Checks if a host is up or down.                                                                                                                                               |
| reputationChecker()     | Checks whether a specific site/url is suspicious and might contain malware, phishing or other potential harmful software.                                                     |
| getHeaders()            | Gets the headers of a website.                                                                                                                                                |
| linkBackup()            | Makes an online backup of a link.                                                                                                                                             |
| urlShortener()          | Shorts every long URL.                                                                                                                                                        |
| randomStringPicker()    | Gets random string from given text file.                                                                                                                                      |
| dictionary()            | Gets the definition of any word.                                                                                                                                              |
| definePicture()         | Reverses the image/picture given and determines what's on it.                                                                                                                 |
| synonym()               | Gets the alternative words/synonyms for any legitimate english word you fill in.                                                                                              |
| emailValidator()        | Checks if given up e-mail exists.                                                                                                                                             |
| disposableMailChecker() | Checks if given up e-mail is disposable/temporarily or not.                                                                                                                   |
| ipValidator()           | Checks if IP address format is valid.                                                                                                                                         |
| torChecker()            | Checks whether an IP is from a TOR network or not.                                                                                                                            |
| translate()             | Translates your text (auto-detected) to any language.                                                                                                                         |
| randomPerson()          | Generates random name address etc. (genders: male/female/all).                                                                                                                |
| youtubeDetails()        | Gets all details of a specific YouTube video.                                                                                                                                 |
| youtubeMP3()            | Converts any song up to 10 minutes to MP3.                                                                                                                                    |
| bitcoinBalance()        | Checks the current balance of any Bitcoin address.                                                                                                                            |
| ethereumBalance()       | Checks the current balance of any Ethereum address.                                                                                                                           |
| currency()              | Converts normal and cryptocurrencies to any other currency.                                                                                                                   |
| currencyRates()         | Shows the rate of every currency in the world based on the unit price of the given source.                                                                                    |
| weather()               | Checks the weather of every city or postal code you give up.                                                                                                                  |
| qrGenerator()           | Generates a QR code and uploads it to imgur, useful to quickly share a piece of text or URL.                                                                                  |
| textParser()            | Extracts text from any image. It works best on English text.                                                                                                                  |
| proxyList()             | Fetches you a fresh proxy list, up to 1000 proxies.                                                                                                                           |
| proxyDetector()         | Detects whether an IP address is a proxy/vpn or not. High accuracy!                                                                                                           |
| passwordGenerator()     | Generates a random password based on the given configuration.                                                                                                                 |
| randomNumber()          | Generates a random number based on the given length or between parameter.                                                                                                     |
| licenseKeyGenerator()   | Generates a randomized license using given template.                                                                                                                          |
| eitherOr()              | Provides a random "would you rather" question/dilemma, giving two hard options.                                                                                               |
| gif()                   | Gives you a list of animated GIFs based on the given keyword.                                                                                                                 |


### Docs
* [Official](https://api.c99.nl/)

### License
[MIT](LICENSE)
