const axios = require('axios');

const C99 = function (config) {
	if (!this || this.constructor !== C99) {
		throw new Error('C99 must be called as a constructor.');
	}

	if (!config || !config.key) {
		throw new Error('API key is undefined.');
	}

	axios.defaults.baseURL = 'https://api.c99.nl';
	axios.defaults.params = {
		key: config.key,
		json: '',
	};
};
/**
 * Makes get request with axios
 * @param {string} url
 * @returns {Promise<Object>}
 */
function request(url) {
	return axios
		.get(url)
		.then(({ data }) => data)
		.catch((error) => error);
}

/**
 * Performs an advanced subdomain scan to find most subdomains of the given domain.
 * @param {string} domain
 * @returns {Promise<Object>}
 */
C99.prototype.subdomainFinder = async function (domain) {
	return request(`/subdomainfinder?domain=${domain}`);
};

/**
 * Get more information about any phone number.
 * @param {string} number
 * @returns {Promise<Object>}
 */
C99.prototype.phoneLookup = async function (number) {
	return request(`/phonelookup?number=${number}`);
};

/**
 * Attempts to grab an IP address of a Skype account, results are not guaranteed. (This is completely legal as it uses publicly available records)
 * @param {string} username
 * @returns {Promise<Object>}
 */
C99.prototype.skypeResolver = async function (username) {
	return request(`/skyperesolver?username=${username}`);
};

/**
 * Shows all Skype accounts with that specific IP.(This is completely legal as it uses publicly available records)
 * @param {string} ip
 * @returns {Promise<Object>}
 */
C99.prototype.ip2skype = async function (ip) {
	return request(`/ip2skype?ip=${ip}`);
};

/**
 * Scans to detect if a website is behind a firewall and determines what firewall it is.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.firewallDetector = async function (url) {
	return request(`/firewalldetector?url=${url}`);
};

/**
 * Scans all ports of given host.
 * @param {string} host
 * @param {string} port
 * @returns {Promise<Object>}
 */
C99.prototype.portScanner = async function (host, port) {
	let endpoint = `/portscanner?host=${host}`;
	if (port) endpoint = `/portscanner?host=${host}&port=${port}`;
	return request(endpoint);
};

/**
 * Pings a host 4 times and shows the result.
 * @param {string} host
 * @returns {Promise<Object>}
 */
C99.prototype.ping = async function (host) {
	return request(`/ping?host=${host}`);
};

/**
 * Gets host of given IP address.
 * @param {string} host
 * @returns {Promise<Object>}
 */
C99.prototype.getHostname = async function (host) {
	return request(`/gethostname?host=${host}`);
};

/**
 * Performs an advanced check on the specific URL. Second parameter is optional. If left empty, all servers will be used. Possible check types: a, aaaa, cname, mx, ns, soa, txt
 * @param {string} url
 * @param {('a', 'aaaa', 'cname', 'mx', 'ns', 'soa', 'txt')} [type]
 * @returns {Promise<Object>}
 */
C99.prototype.dnsChecker = async function (url, type) {
	let endpoint = `/dnschecker?url=${url}`;
	if (type) endpoint = `/dnschecker?url=${url}&type=${type}`;
	return request(endpoint);
};

/**
 * Gets server IP of given host.
 * @param {string} host
 * @param {string} server
 * @returns {Promise<Object>}
 */
C99.prototype.dnsResolver = async function (host, server) {
	return request(`/dnsresolver?host=${host}&server=${server}`);
};

/**
 * Checks whether a domain is available or not, no matter what extension.
 * @param {string} domain
 * @returns {Promise<Object>}
 */
C99.prototype.domainChecker = async function (domain) {
	return request(`/domainchecker?domain=${domain}`);
};

/**
 * Checks available IP history of a domain with dates.
 * @param {string} domain
 * @returns {Promise<Object>}
 */
C99.prototype.domainHistory = async function (domain) {
	return request(`/domainhistory?domain=${domain}`);
};

/**
 * Attempts to find websites hosted on the specific IP address.
 * @param {string} ip
 * @returns {Promise<Object>}
 */
C99.prototype.ip2domains = async function (ip) {
	return request(`/ip2domains?ip=${ip}`);
};

/**
 * Grab the latest Alexa Rank information of any website, including backlinks and top country.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.alexaRank = async function (url) {
	return request(`/alexarank?url=${url}`);
};

/**
 * Whois check on a domain to see who the domain owner is.
 * @param {string} domain
 * @returns {Promise<Object>}
 */
C99.prototype.whois = async function (domain) {
	return request(`/whois?domain=${domain}`);
};

/**
 * Creates a screenshot of any website/url you want.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.createScreenshot = async function (url) {
	return request(`/createscreenshot?url=${url}`);
};

/**
 * Locates the given host/ip address.
 * @param {string} host
 * @returns {Promise<Object>}
 */
C99.prototype.geoIp = async function (host) {
	return request(`/geoip?host=${host}`);
};

/**
 * Checks if a host is up or down.
 * @param {string} host
 * @returns {Promise<Object>}
 */
C99.prototype.upOrDown = async function (host) {
	return request(`/upordown?host=${host}`);
};

/**
 * Checks whether a specific site/url is suspicious and might contain malware, phishing or other potential harmful software.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.reputationChecker = async function (url) {
	return request(`/reputationchecker?url=${url}`);
};

/**
 * Gets the headers of a website.
 * @param {string} host
 * @returns {Promise<Object>}
 */
C99.prototype.getHeaders = async function (host) {
	return request(`/getheaders?url=${host}`);
};

/**
 * Makes an online backup of a link.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.linkBackup = async function (url) {
	return request(`/linkbackup?url=${url}`);
};

/**
 * Shorts every long URL.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.urlShortener = async function (url) {
	return request(`/urlshortener?url=${url}`);
};

/**
 * Gets random string from given text file.
 * @param {string} textfile
 * @returns {Promise<Object>}
 */
C99.prototype.randomStringPicker = async function (textfile) {
	return request(`/randomstringpicker?textfile=${textfile}`);
};

/**
 * Gets the definition of any word.
 * @param {string} word
 * @returns {Promise<Object>}
 */
C99.prototype.dictionary = async function (word) {
	return request(`/dictionary?word=${word}`);
};

/**
 * Reverses the image/picture given and determines what's on it.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.definePicture = async function (url) {
	return request(`/definepicture?url=${url}`);
};

/**
 * Gets the alternative words/synonyms for any legitimate english word you fill in.
 * @param {string} word
 * @returns {Promise<Object>}
 */
C99.prototype.synonym = async function (word) {
	return request(`/synonym?word=${word}`);
};

/**
 * Checks if given up e-mail exists.
 * @param {string} email
 * @returns {Promise<Object>}
 */
C99.prototype.emailValidator = async function (email) {
	return request(`/emailvalidator?email=${email}`);
};

/**
 * Checks if given up e-mail is disposable/temporarily or not.
 * @param {string} email
 * @returns {Promise<Object>}
 */
C99.prototype.disposableMailChecker = async function (email) {
	return request(`/disposablemailchecker?email=${email}`);
};

/**
 * Checks if IP address format is valid.
 * @param {string} ip
 * @returns {Promise<Object>}
 */
C99.prototype.ipValidator = async function (ip) {
	return request(`/ipvalidator?ip=${ip}`);
};

/**
 * Checks whether an IP is from a TOR network or not.
 * @param {string} ip
 * @returns {Promise<Object>}
 */
C99.prototype.torChecker = async function (ip) {
	return request(`/torchecker?ip=${ip}`);
};

/**
 * Translates your text (auto-detected) to any language.
 * @param {string} text
 * @param {string} tolanguage
 * @returns {Promise<Object>}
 */
C99.prototype.translate = async function (text, tolanguage) {
	return request(`/translate?text=${text}&tolanguage=${tolanguage}`);
};

/**
 * Generates random name address etc. (genders: male/female/all).
 * @param {string} gender
 * @returns {Promise<Object>}
 */
C99.prototype.randomPerson = async function (gender = 'all') {
	return request(`/randomperson?gender=${gender}`);
};

/**
 * Gets all details of a specific YouTube video.
 * @param {string} videoid
 * @returns {Promise<Object>}
 */
C99.prototype.youtubeDetails = async function (videoid) {
	return request(`/youtubedetails?videoid=${videoid}`);
};

/**
 * Converts any song up to 10 minutes to MP3.
 * @param {string} videoid
 * @returns {Promise<Object>}
 */
C99.prototype.youtubeMP3 = async function (videoid) {
	return request(`/youtubemp3?videoid=${videoid}`);
};

/**
 * Checks the current balance of any Bitcoin address.
 * @param {string} address
 * @returns {Promise<Object>}
 */
C99.prototype.bitcoinBalance = async function (address) {
	return request(`/bitcoinbalance?address=${address}`);
};

/**
 * Checks the current balance of any Ethereum address.
 * @param {string} address
 * @returns {Promise<Object>}
 */
C99.prototype.ethereumBalance = async function (address) {
	return request(`/ethereumbalance?address=${address}`);
};

/**
 * Converts normal and cryptocurrencies to any other currency.
 * @param {number} amount
 * @param {string} from
 * @param {string} to
 * @returns {Promise<Object>}
 */
C99.prototype.currency = async function (amount, from, to) {
	return request(`/currency?amount=${amount}&from=${from}&to=${to}`);
};

/**
 * Shows the rate of every currency in the world based on the unit price of the given source.
 * @param {string} source
 * @returns {Promise<Object>}
 */
C99.prototype.currencyRates = async function (source) {
	return request(`/currencyrates?source=${source}`);
};

/**
 * Checks the weather of every city or postal code you give up.
 * @param {string} location
 * @param {('F', 'C')} [unit=F] - F for Fahrenheit and C for Celsius.
 * @returns {Promise<Object>}
 */
C99.prototype.weather = async function (location, unit) {
	return request(`/weather?location=${location}&unit=${unit}`);
};

/**
 * Generates a QR code and uploads it to imgur, useful to quickly share a piece of text or URL.
 * @param {string} string
 * @param {number} size
 * @returns {Promise<Object>}
 */
C99.prototype.qrGenerator = async function (string, size) {
	return request(`/qrgenerator?string=${string}&size=${size}`);
};

/**
 * Extracts text from any image. It works best on English text.
 * @param {string} url
 * @returns {Promise<Object>}
 */
C99.prototype.textParser = async function (url) {
	return request(`/textparser?url=${url}`);
};

/**
 * Fetches you a fresh proxy list, up to 1000 proxies.
 * @param {number} limit - Number of proxies
 * @param {('http', 'https', 'socks4', 'socks5')} type - Proxy type
 * @param {('all', 'Anonymous', 'Elite', 'Transparent')} [anonimity='all']
 * @param {('all', 'US', 'CA', 'NL', 'DE', 'FR', 'ES')} [country='all']
 * @returns {Promise<Object>}
 */
C99.prototype.proxyList = async function (limit, type, anonimity, country) {
	return request(
		`/proxylist?limit=${limit}&type=s${type}&anonimity=${anonimity}&country=${country}`,
	);
};

/**
 * Detects whether an IP address is a proxy/vpn or not. High accuracy!
 * @param {string} ip
 * @returns {Promise<Object>}
 */
C99.prototype.proxyDetector = async function (ip) {
	return request(`/proxydetector?ip=${ip}`);
};

/**
 * Generates a random password based on the given configuration.
 * @param {string} length - Password's length
 * @param {('numbers', 'letters', 'chars')} include
 * @param {string} [customlist]
 * @returns {Promise<Object>}
 */
C99.prototype.passwordGenerator = async function (length, include, customlist) {
	let endpoint = `/passwordgenerator?length=${length}&include=${include}`;
	if (customlist)
		endpoint = `/passwordgenerator?length=${length}&include=${include}&customlist=${customlist}`;
	return request(endpoint);
};
/**
 * Generates a random number based on the given length or between parameter.
 * @param {number} [length]
 * @param {number} [between]
 * @returns {Promise<Object>}
 */
C99.prototype.randomNumber = async function (length, between) {
	return request(`/randomnumber?length=${length}&between=${between}`);
};

/**
 * Generates a randomized license using given template. Wildcards are: * ? and %. * is alphabetic, % is numeric, ? is mixed.
 * @param {string} template - Wildcards are: * ? and %. * is alphabetic, % is numeric, ? is mixed.
 * @param {number} amount
 * @returns {Promise<Object>}
 */
C99.prototype.licenseKeyGenerator = async function (template, amount) {
	return request(
		`/licensekeygenerator?template=${template}&amount=${amount}`,
	);
};

/**
 * Provides a random "would you rather" question/dilemma, giving two hard options.
 * @returns {Promise<Object>}
 */
C99.prototype.eitherOr = async function () {
	return request(`/eitheror`);
};

/**
 * Gives you a list of animated GIFs based on the given keyword.
 * @param {string} keyword
 * @returns {Promise<Object>}
 */
C99.prototype.gif = async function (keyword) {
	return request(`/gif?keyword=${keyword}`);
};
module.exports = C99;
