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

C99.prototype.subdomainFinder = async function (domain) {
	return axios
		.get(`/subdomainfinder?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.phoneLookup = async function (number) {
	return axios
		.get(`/phonelookup?number=${number}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.skypeResolver = async function (username) {
	return axios
		.get(`/skyperesolver?username=${username}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.ip2skype = async function (ip) {
	return axios
		.get(`/ip2skype?ip=${ip}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.firewallDetector = async function (url) {
	return axios
		.get(`/firewalldetector?url=${url}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.portScanner = async function (host) {
	return axios
		.get(`/portscanner?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.ping = async function (host) {
	return axios
		.get(`/ping?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.getHostname = async function (host) {
	return axios
		.get(`/gethostname?host=${host}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.dnsChecker = async function (url, type) {
	return axios
		.get(`/dnschecker?url=${url}&type=${type}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.dnsResolver = async function (host, server) {
	return axios
		.get(`/dnsresolver?host=${host}&server=${server}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.domainChecker = async function (domain) {
	return axios
		.get(`/domainchecker?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.domainHistory = async function (domain) {
	return axios
		.get(`/domainhistory?domain=${domain}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.ip2domains = async function (ip) {
	return axios
		.get(`/ip2domains?ip=${ip}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

C99.prototype.alexaRank = async function (url) {
	return axios
		.get(`/alexarank?url=${url}`)
		.then(({ data }) => data)
		.catch((error) => error);
};

export default C99;
