import { createInstance } from './index.js';

const instance = createInstance();

function setAuthTokenToHeader(token) {
  instance.defaults.headers.common['auth-token'] = token;
}

function login(user, success, fail) {
  // instance.defaults.headers['access-token'] = window.localStorage.getItem('access-token');
  const params = {
    email: user.email,
    pass: user.pass,
  };

  return instance
    .get('account/login', { params })
    .then(success)
    .catch(fail);
}

async function findByToken(token, success, fail) {
  instance.defaults.headers['auth-token'] = token;
  await instance
    .get('account/info')
    .then(success)
    .catch(fail);
}

function logout() {
  instance.defaults.headers['auth-token'] = undefined;
}

// 이메일, 닉네임, 비밀번호, 전화, 나의한마디, 성별, 생일, 지역, 나이 
function signup ( email, nickname, password, tel, mystory, gender, birth, region, age, success, fail) {
  instance
  .post('account/signup', { email, nickname, password, tel, mystory, gender, age, birth, region })
  .then(success)
  .catch(fail);
}

function smtp( email, success, fail) {
  instance
  .get('account/smtp', { params: { email } })
  .then(success)
  .catch(fail);
}

export { login, findByToken, setAuthTokenToHeader, logout, signup, smtp };
