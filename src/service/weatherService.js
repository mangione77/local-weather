import axios from 'axios'

const weatherService = {}

weatherService.getCurrent = (city) => {
	return new Promise((resolve,reject) => {
		axios.get(`https://api.apixu.com/v1/current.json?key=bd655b14d5254ea49ec175003171712&q=${city}`)
			.then(weather => {
				resolve(weather)
			})
			.catch(console.error)		
	})

}

weatherService.getLocation = () => {
	return new Promise((resolve,reject) => {
		axios.get('http://ip-api.com/json')
			.then(result => {
				resolve(result.data.city)
			})
			.catch(console.error)
	})
}

export default weatherService