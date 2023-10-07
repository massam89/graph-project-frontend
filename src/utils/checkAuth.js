const checkAuth = () => localStorage.getItem('token') ? true : false

export default checkAuth