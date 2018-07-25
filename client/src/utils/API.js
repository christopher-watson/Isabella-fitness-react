import axios from "axios";

export default {

  // save resopnses
  responseSave: function(responseInfo) {
    return axios.post("/api/clients", responseInfo)
  },

  // retrieve responses
  responseRetrieve: function() {
    return axios.get("/api/clients")
  },

  // delete responses
  responseDelete: function(id) {
    return axios.delete(`/api/clients/${id}`)
  }
}