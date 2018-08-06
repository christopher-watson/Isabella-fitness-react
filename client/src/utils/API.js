import axios from "axios";

export default {

  // save resopnses
  responseSubmit: function(responseInfo) {
    return axios.post("/api/clients", responseInfo)
  },

  responseBackup: function(responseInfo) {
    return axios.post("/api/backup", responseInfo)
  },

  // retrieve responses
  responseRetrieve: function() {
    return axios.get("/api/clients")
  },

  // delete responses
  deleteResponse: function(id) {
    return axios.delete(`/api/clients/${id}`)
  },

  // send form to backend
  sendEmail: function(message) {
    return axios.post('/api/mail/', message)
  },

  // user login
  login: function(loginCreds) {
    return axios.post('/api/user/login', loginCreds)
  },

  // check login
  loginCheck: function() {
    return axios.get('/api/user/login')
  },

  // logout
  logout: function() {
    return axios.get('/api/user/logout')
  },

  // register 
  register: function(userInfo) {
    console.log(userInfo);
    return axios.post("/api/user/register", userInfo)
  },
}