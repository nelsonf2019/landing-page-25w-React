import axios from 'axios'

const instance = axios.create({
  baseURL: 'nelson-laravel-api.herokuapp.com/public/api/'
})



const sendEmail = async (data) => {
  console.log(data)
    const response = await instance({
      method: 'post',
      url: 'contacts/store',
      data: data
    });
    return response
  };


export {
    sendEmail
}