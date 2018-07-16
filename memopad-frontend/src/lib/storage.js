//storage wrapping module
const storage = {
    set(key, val) {
        localStorage.setItem(key,JSON.stringify(val));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

export default storage;