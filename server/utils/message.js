var generateMessage = (from ,text) => {
  return {
    from,
    text,
createdAt:new Date().getTime()
};
};

var generateLocationMessage = (from,latitude,longitude)=>{
  return{
    from,
    url:`htttps://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  };
};
module.exports={generateMessage,generateLocationMessage};
