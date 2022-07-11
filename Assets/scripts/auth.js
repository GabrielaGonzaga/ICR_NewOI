
async function Auth(e) { 

    // Informações do input 
    const userName = document.querySelector('input[name="user"]').value;
    const password = document.querySelector('input[name="pwd"]').value;
    const companyId = document.querySelectorAll('option:checked')[0].value

    // API url
    const baseUrl = '';
    
    //Requisição de POST na API para login
    await fetch(baseUrl, {
    method: "POST",
    headers: {"Content-Type":" application/json; charset=UTF-8"},
    body: JSON.stringify({
        company: companyId,
        email: userName,
        password: password
    })
    }).then( function (response){
    return response
    }).then( function (apiResponse){
        response = apiResponse
    }).catch(function(error) {
       error = console.log('An error ocurred!');
    });
      
    if(response.status == 200){
        window.AuthAction()
    }
    else{
        window.StopAction()
    }
}