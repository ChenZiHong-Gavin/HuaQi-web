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

export function surveyReq (username, password, riskAssessmentIndex, stopProfit, stopLoss,
  plannedInvestmentCycle, plannedTotalInvestmentAccount,
  plannedInvestmentIncome) {
  return request.post('/survey', {
    username: username,
    password: password,
    riskAssessmentIndex: riskAssessmentIndex,
    stopProfit: stopProfit,
    stopLoss: stopLoss,
    plannedInvestmentCycle: plannedInvestmentCycle,
    plannedTotalInvestmentAccount: plannedTotalInvestmentAccount,
    plannedInvestmentIncome: plannedInvestmentIncome
  })
}

export function showUserReq (id) {
  return request.get('/showUser/' + id)
}
