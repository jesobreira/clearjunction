const got = require('got')

export default class ClearJunction {

	_apiKey = null
	_apiPassword = null
	_testnet = false

	constructor(apiKey, apiPassword, testnet = false) {
		this._apiKey = apiKey
		this._apiPassword = apiPassword
		this._testnet = testnet
		this._host = testnet ? 'https://sandbox.clearjunction.com' : ''
	}

	_request = async(method, endpoint, params) => {
		try {
			let response
			let endpointUrl = this._host + '/' + endpoint

			let options = {
				responseType: 'json'
			}

			if (method === 'get')
				response = await got(endpointUrl, options)
			else if (method === 'post')
				response = await got.post(endpointUrl, {
					json: params,
					...options
				})

			return response.body.data
		} catch (e) {
			throw e
		}
	}

	_get = (endpoint) =>
		this._request('get', endpoint)

	_post = (endpoint, params) =>
		this._request('post', endpoint, params)

	createWallet = (walletUuid, userData) =>
		
}