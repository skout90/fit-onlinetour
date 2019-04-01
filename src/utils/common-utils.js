export const formatPhone = (num) => {
  if (!num) return
  return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3')
}

export const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email)
export const isPasswordValid = (password) => /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,12}$/.test(password)
