import axios from "axios";

class TodoService {

  constructor() {
    this.url = 'https://ms-discord-upy5mhs63a-rj.a.run.app';
  }

  async getTodos(email) {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url}/todos?email=${email}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  getHeaders() {
    return {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
  }

  async addTodo(todo) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios.post(`${this.url}/todos`, todo, headers)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
  }

  async updateTodo(todo) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios.put(`${this.url}/todos`, todo, headers)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
   
  }

  async deleteTodo(id) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      axios.delete(`${this.url}/todos/${id}`, headers)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
  }
}

export default TodoService;