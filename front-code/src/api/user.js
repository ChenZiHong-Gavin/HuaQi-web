import request from '@/utils/request'

export function registerReq (username, password) {
  return request.post('/register', {
    username: username,
    password: password
  })
}

export function loginReq (username, password) {
  return request.post('/login', {
    username: username,
    password: password
  })
}

export function showUserReq (id) {
  return request.get('/showUser/{}')
}
