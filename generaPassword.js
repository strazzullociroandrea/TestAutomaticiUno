const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const generaPassword = (length) =>{
  try{
    
    let id = '';
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
   
  }catch(error){
    throw new Error(error.message);
  }
} 

module.exports = generaPassword;