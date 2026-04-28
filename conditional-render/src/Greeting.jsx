
const Greeting =({isLoggedIn}) => {
    // if(isLoggedIn){
    //     return <h1>Welcome back!</h1>
    // }else {
    //     return <h1>Please Sign in.</h1>


    // }
    return <h1>{isLoggedIn ? "Welcome back" : "Please go and sign in."}</h1>
        
    
}
export default Greeting;