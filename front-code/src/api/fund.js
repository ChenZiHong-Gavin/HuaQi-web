import request from '../utils/request'

export function showFundListReq () {
  return request.get('/showFundList')
}

export function showFundReq (fundCode) {
  return request.get('/showFundList/' + fundCode)
}
