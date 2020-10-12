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

export function surveyReq (username, password, subjectiveRiskPreference,
  plannedInvestmentCycle, plannedTotalInvestmentAccount, objectiveInvestmentStrength) {
  return request.post('/survey', {
    username: username,
    password: password,
    subjectiveRiskPreference: subjectiveRiskPreference,
    objectiveInvestmentStrength: objectiveInvestmentStrength,
    plannedInvestmentCycle: plannedInvestmentCycle,
    plannedTotalInvestmentAccount: plannedTotalInvestmentAccount
  })
}

export function showUserReq (id) {
  return request.get('/showUser/' + id)
}
