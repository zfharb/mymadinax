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
        <div class="bg-image"
        
        style={{  
            backgroundColor: 'WhiteSmoke',
          }}>
            <div class="container text-center">

                <div class="row justify-content-center m-5">
                        <h2 class="text-info mt-5">Contact Us</h2>

                        <div class="col-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                        </div>
                </div>

           
                <div class="row justify-content-center" >
                    <div class="col-sm-4 bg-white border border-0 border-top border-info">
                        <form class="p-0">
                            <div class="px-5 my-3">
                            <label for="name" class="float-start form-label pt-3">Email</label>
                            <input class="form-control" id="name" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div class="px-5 my-3">
                            <label for="subject" class="float-start form-label">Password</label>
                            <input class="form-control" id="subject" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            
                            <div class="float-start d-grid gap-2 col-6 ms-5 mb-3">

                                    <button type="submit" class="btn btn-primary" onClick={loginUser}>Singin</button>
                                    <button type="submit" class="btn btn-primary" onClick={loginUser}>Singin with facebook</button>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="row justify-content-center my-3" >
                        <a class="link-opacity-100" href="/signin">Forgot your email or password ?</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login
