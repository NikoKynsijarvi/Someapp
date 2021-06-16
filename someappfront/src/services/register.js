import axios from "axios"
const baseUrl = '/api/users'

const create =  newObject => {
    const newUser = {
        username: newObject.newUsername,
        name: newObject.newName,
        password: newObject.newPassword
    }
   
    const request =  axios.post(baseUrl, newUser);
    return request.then((response) => response.data);
}

export default create