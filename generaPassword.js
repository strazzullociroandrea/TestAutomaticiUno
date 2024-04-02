const caratteriPossibili = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * Funzione per generare una password con lunghezza = lenght
 * @param {*} length lunghezza della password
 * @returns password || errore
 */
export const generaPassword = (length) =>{
  try{
    let password = '';
    for (let i = 0; i < length; i++) {
      password += caratteriPossibili.charAt(Math.floor(Math.random() * caratteriPossibili.length));
    }
    //istruzione per mandare in errore il test
    if(length > 40){
      return password.substring(0,10);
    }
    return password;
  }catch(error){
    throw new Error(error.message);
  }
} 