

  var signup = document.getElementById('signup')

  signup.addEventListener('click', function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    axios.post('/api/v1/signup', {email: email, password: password})
    .then((res)=>{
      console.log('Done!: ' + res.data)
    })

    .catch((err)=>{
      console.log('error: ' + err)
    })
 


  })





