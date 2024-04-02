export const generaPassword = async (lgn) => {
  let rs = await fetch("/generaPassword",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },body: JSON.stringify({
        length: lgn
    })
  });
  rs = await rs.json();
  return rs.result;
};
