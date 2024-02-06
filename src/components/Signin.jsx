import { useState } from 'react'
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (event) => {
        console.log("login event--------")
        console.log(event)
        console.log("login event--------")

        event.preventDefault();

        await axios
        .post(
                "https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/login",
                {
                        username:email,
                        password:password
                }
        )
        .then((response) => {
                console.log("Successfully logged in user!")
                console.log(response);
                setEmail('')
                setPassword('')

        })
        .catch((error) => {
                console.log("Something went wrong!")
                console.log(error);
                setEmail('')
                setPassword('')
        });

    }

    return (
        <>  
            <div class="container d-flex  position-absolute top-50 start-50 translate-middle justify-content-center">
                <form class="border border-dark w-50 p-3 form-bg">
                            <div class="mb-3">
                            <input type="username" class="form-control bg-light bg-gradient"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                            <input type="password" class="form-control bg-light bg-gradient" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" class="btn btn-primary" onClick={loginUser}>Sing in</button>
                                <button type="submit" class="btn btn-primary" onClick={loginUser}>Sing in with facebook</button>
                                <p class="text-center"><a class="link-dark link-opacity-75" href="#">forgot your email or password ?</a></p>
                            </div>
                </form>
            </div>
        </>
    )
}

export default Login
