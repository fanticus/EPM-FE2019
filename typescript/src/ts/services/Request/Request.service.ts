export default class Request {
    getData(url: string) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
}