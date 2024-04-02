const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generaPassword = (length) =>{
  try{
    
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if(length > 40){
      return password.substring(0,10);
    }
    return password;
  }catch(error){
    throw new Error(error.message);
  }
} 

module.exports = generaPassword;