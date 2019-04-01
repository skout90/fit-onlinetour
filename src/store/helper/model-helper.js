export const returnSuccess = res => ({
  success: true,
  statusCode: res.status,
  errorMsg: ''
})

export const returnFail = res => ({
  success: false,
  statusCode: res.status,
  errorMsg: res.error
})
