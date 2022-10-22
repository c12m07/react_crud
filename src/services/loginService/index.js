import axios from "axios";

class LoginService {

  constructor() {
    this.url = 'https://ms-discord-upy5mhs63a-rj.a.run.app';
  }

// credentials for test todos  
// {
//     "email": "jose@larnu.com",
//     "discordId": "310544245155168256"
//  }

  async login(credentials) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/auth/login`, credentials)
        .then(response => {
          resolve(response.data);
          localStorage.setItem("token", response.data.token);
        })
        .catch(error => {
          reject(error);
        });
    })
  }
}

export default LoginService;