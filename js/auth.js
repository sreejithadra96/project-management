// LOGIN
async function loginUser(email, password){

    const { error } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        })

    if(error){
        alert(error.message)
        return false
    }

    window.location.href = "index.html"
}

// SIGNUP
async function registerUser(email, password){

    const { error } =
        await supabaseClient.auth.signUp({
            email,
            password
        })

    if(error){
        alert(error.message)
        return
    }

    alert("Account created. Now login.")
}

// LOGOUT
async function logoutUser(){
    await supabaseClient.auth.signOut()
    window.location.href = "login.html"
}

// CHECK SESSION
async function checkAuth(){

    const { data } = await supabaseClient.auth.getSession()

    if(!data.session){
        window.location.href = "login.html"
    }

}