import axios from 'axios';

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
 * Performs an advanced subdomain scan to find most subdomains of the given domain.
 * @param {string} domain
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.subdomainFinder = async function (domain) {
	return axios
		.get(`/subdomainfinder?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Get more information about any phone number.
 * @param {string} number
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.phoneLookup = async function (number) {
	return axios
		.get(`/phonelookup?number=${number}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Attempts to grab an IP address of a Skype account, results are not guaranteed. (This is completely legal as it uses publicly available records)
 * @param {string} username
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.skypeResolver = async function (username) {
	return axios
		.get(`/skyperesolver?username=${username}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Shows all Skype accounts with that specific IP.(This is completely legal as it uses publicly available records)
 * @param {string} ip
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.ip2skype = async function (ip) {
	return axios
		.get(`/ip2skype?ip=${ip}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Scans to detect if a website is behind a firewall and determines what firewall it is.
 * @param {string} url
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.firewallDetector = async function (url) {
	return axios
		.get(`/firewalldetector?url=${url}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Scans all ports of given host.
 * @param {string} host
 * @param {string} port
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.portScanner = async function (host, port) {
	let endpoint = `/portscanner?host=${host}`;
	if (port) endpoint = `/portscanner?host=${host}&port=${port}`;
	return axios
		.get(endpoint)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Pings a host 4 times and shows the result.
 * @param {string} host
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.ping = async function (host) {
	return axios
		.get(`/ping?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Gets host of given IP address.
 * @param {string} host
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.getHostname = async function (host) {
	return axios
		.get(`/gethostname?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Performs an advanced check on the specific URL. Second parameter is optional. If left empty, all servers will be used. Possible check types: a, aaaa, cname, mx, ns, soa, txt
 * @param {string} url
 * @param {string} type
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.dnsChecker = async function (url, type) {
	let endpoint = `/dnschecker?url=${url}`;
	if (type) endpoint = `/dnschecker?url=${url}&type=${type}`;
	return axios
		.get(endpoint)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Gets server IP of given host.
 * @param {string} host
 * @param {string} server
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.dnsResolver = async function (host, server) {
	return axios
		.get(`/dnsresolver?host=${host}&server=${server}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Checks whether a domain is available or not, no matter what extension.
 * @param {string} domain
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.domainChecker = async function (domain) {
	return axios
		.get(`/domainchecker?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Checks available IP history of a domain with dates.
 * @param {string} domain
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.domainHistory = async function (domain) {
	return axios
		.get(`/domainhistory?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Attempts to find websites hosted on the specific IP address.
 * @param {string} ip
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.ip2domains = async function (ip) {
	return axios
		.get(`/ip2domains?ip=${ip}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Grab the latest Alexa Rank information of any website, including backlinks and top country.
 * @param {string} url
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.alexaRank = async function (url) {
	return axios
		.get(`/alexarank?url=${url}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Whois check on a domain to see who the domain owner is.
 * @param {string} domain
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.whois = async function (domain) {
	return axios
		.get(`/whois?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Creates a screenshot of any website/url you want.
 * @param {string} url
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.createScreenshot = async function (url) {
	return axios
		.get(`/createscreenshot?url=${url}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Locates the given host/ip address.
 * @param {string} host
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.geoIp = async function (host) {
	return axios
		.get(`/geoip?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

/**
 * Checks if a host is up or down.
 * @param {string} host
 * @returns {Promise<AxiosResponse<any>>}
 */
C99.prototype.upOrDown = async function (host) {
	return axios
		.get(`/upordown?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};
export default C99;
