import request from 'superagent'
const serverUrl = 'http://localhost:3000/user/'

export default class UserModel {
  static fetchAll () {
    return request
      .get(serverUrl)
      .then(res => {
        return res.body
      })
      .catch((e) => {
        UserModel.findErrorMessage(e)
      })
  }

  static fetchRecord (id) {
    return request
      .get(serverUrl + id)
      .then(res => {
        return res.body
      })
      .catch((e) => {
        UserModel.findErrorMessage(e)
      })
  }

  static updateAttributes (id, attr) {
    return request
      .put(serverUrl + id)
      .send(attr)
      .then((res) => {
        return res.body
      })
      .catch((e) => {
        UserModel.findErrorMessage(e)
      })
  }

  static addRecord (attr) {
    return request
      .post(serverUrl)
      .send(attr)
      .then((res) => {
        return res.body
      })
      .catch((e) => {
        UserModel.findErrorMessage(e)
      })
  }

  static deleteRecord (id) {
    return request
      .delete(serverUrl + id)
      .then((res) => {
        return res.body
      })
      .catch((e) => {
        UserModel.findErrorMessage(e)
      })
  }

  static findErrorMessage (e) {
    if (e.response && e.response.body && e.response.body.message) {
      throw e.response.body.message
    } else {
      throw e.message
    }
  }
}
