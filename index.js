const fetch = require('node-fetch');


exports.generate = function(country,sex) {
  return new Promise((resolve, reject) => {
  if(country==null){
      country = "english-united-states"
    }
    if(sex==null){
      sex = "male"
    }
    var url="https://api.namefake.com/"+country+"/"+sex
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      resolve(data)
      
      var fullEmail = "http:\/\/emailfake.com\/jetable.pp.ua\/"+data.email_u
      console.log("The Mail is accessible!:\n"+fullEmail)
    })
  })
}