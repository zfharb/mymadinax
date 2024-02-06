import { useState } from 'react'
import axios from "axios";

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (event) => {
        console.log("register event--------")
        console.log(event)
        console.log("register event--------")

        event.preventDefault();

        await axios
        .post(
                "https://usycq00pk7.execute-api.us-east-1.amazonaws.com/dev/register",
                {
                        name:name,
                        email:email,
                        username:username,
                        password:password
                }
        )
        .then((response) => {
                console.log("Successfully registered user!")
                console.log(response);
                setName('')
                setEmail('')
                setUsername('')
                setPassword('')

        })
        .catch((error) => {
                console.log("Something went wrong!")
                console.log(error);
                setName('')
                setEmail('')
                setUsername('')
                setPassword('')
        });

    }

    return (
        // class="position-absolute top-50 start-50 translate-middle"
        <>  
        <div class="container d-flex  position-absolute top-50 start-50 translate-middle justify-content-center">
            <form class="border border-dark w-50 p-3 form-bg">
                <div class="mb-3">
                <input type="username" class="form-control bg-light bg-gradient"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                <input type="password" class="form-control bg-light bg-gradient" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="mb-3">
                <input type="password" class="form-control bg-light bg-gradient" placeholder="Retype password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" class="btn btn-primary" onClick={registerUser}>Sing in</button>
                        <button type="submit" class="btn btn-primary" onClick={registerUser}>Sing in with facebook</button>
                        <p class="text-center"><a class="link-dark link-opacity-75" href="#">forgot your email or password ?</a></p>
                </div>
            </form>
        </div>
    </>
    )
}

export default Register