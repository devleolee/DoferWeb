import Head from 'next/head'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import { verify } from 'jsonwebtoken';


export default function Login() {
  const username = getCookie('username');
  const jwt = getCookie('jwt');
  const router = useRouter()
 const backend = process.env.NEXT_PUBLIC_API;
 const JWT_KEY = process.env.JWT_KEY;
 const nlink = '/auth/local';

useEffect(() => {

  if (jwt){
  if (verify(jwt, JWT_KEY)) {
      router.push('/account')
    } else {
      toast.error('JWT Invalid Signature')
    }
  }
  return () => {
    
  }
}, [])

   

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const formSubmit = async (e) => {
        e.preventDefault();
        console.log(identifier,password); 

// http://localhost:1337/api/auth/local

    await axios.post(process.env.NEXT_PUBLIC_API + '/auth/local', {identifier, password})
    .then(function (response) {
        // console.log(response);
        // console.log(response.data.user.email);
        // setting the cookies
        setCookie('jwt', response.data.jwt);
        setCookie('email', response.data.user.email);
        setCookie('userInfo', JSON.stringify(response.data.user));
        setCookie('username', response.data.user.username);
        // sending message
        toast.success('Login Successful.');
        // redirecting to account page
        router.push('/account');

      })
      .catch(function (error) {
        console.log(error);
        toast.error('Wrong Email or Password.');
      });


    }



  return (
    <div>
    

<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 8000,

    // Default options for specific types
    success: {
      duration: 8000,
    },
  }}
/>





<section className="wrapper bg-light">
<div className="container pb-4 pb-md-6 pt-12">
<div className="row">
<div className="col-lg-7 col-xl-6 col-xxl-5 mx-auto ">
<div className="card">
<div className="card-body p-11 text-center">
<h2 className="mb-3 text-start">Welcome Back</h2>
<p className="lead mb-6 text-start">Fill your email and password to sign in.</p>
<form className="text-start mb-3" onSubmit={formSubmit}>
<div className="form-floating mb-4">
<input type="email" onChange={(e) => {setIdentifier(e.target.value)}} value={identifier} name="email" className="form-control" placeholder="Email" id="loginEmail" />
<label htmlFor="loginEmail">Email</label>
</div>
<div className="form-floating password-field mb-4">
<input type="password" onChange={(e) => {setPassword(e.target.value)}} value={password} name="password"  className="form-control" placeholder="Password" id="loginPassword" />
<span className="password-toggle"><i className="uil uil-eye" /></span>
<label htmlFor="loginPassword">Password</label>
</div>
<button type='submit' name='submit' className="btn btn-primary rounded-pill btn-login w-100 mb-2">Sign In</button>
</form>
{/* /form */}


<Link href="/forgot-password" className='btn btn-danger'>
<span className="btn btn-danger">Forgot password</span>
</Link>


<div className="divider-icon my-4">or</div>
<p className="mb-0">Don't have an account? 

</p>

<Link href="/" className='btn btn-outline-white'>
<span className="btn btn-danger">Register</span>
</Link>



{/*/.social */}
</div>
{/*/.card-body */}
</div>
{/*/.card */}
</div>
{/* /column */}
</div>
{/* /.row */}
</div>
{/* /.container */}
</section>





    </div>
  )
}
