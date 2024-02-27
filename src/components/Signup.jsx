import { useState } from 'react'
import axios from "axios";

function Register() {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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
                        subject:subject,
                        email:email,
                        message:message
                }
        )
        .then((response) => {
                console.log("Successfully registered user!")
                console.log(response);
                setName('')
                setSubject('')
                setEmail('')
                setMessage('')

        })
        .catch((error) => {
                console.log("Something went wrong!")
                console.log(error);
                setName('')
                setSubject('')
                setEmail('')
                setMessage('')
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
                        <h2 class="text-info">Contact Us</h2>

                        <div class="col-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.
                        </div>
                </div>

           
                <div class="row justify-content-center" >
                    <div class="col-sm-4 bg-white border border-0 border-top border-info">
                        <form class="p-0">
                            <div class="px-5 my-3">
                            <label for="name" class="float-start form-label pt-3">Name</label>
                            <input class="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div class="px-5 my-3">
                            <label for="subject" class="float-start form-label">Subject</label>
                            <input class="form-control" id="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                            </div>
                            <div class="px-5 my-3">
                            <label for="email" class="float-start form-label">Email</label>
                            <input class="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div class="px-5 my-3">
                            <label for="message" class="float-start form-label">Message</label>
                            <textarea class="form-control input-lg" id="message" value={message} onChange={e => setMessage(e.target.value)} />
                            </div>
                        
                            <div class="float-start px-5 my-3">
                                    <button type="submit" class="btn btn-primary" onClick={registerUser}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row justify-content-center my-3" >
                        <h5>Already have an account ?  <a class="link-opacity-100" href="/signin">Login</a></h5>
                </div>
            </div>
        </div>
    </>
    )
}

export default Register