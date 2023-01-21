import { Formik, useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { setCookie, getCookie } from 'cookies-next';
import Router, { useRouter  } from 'next/router';
import Link from 'next/link';

export default function Registera() {
 
    const router = useRouter();
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            cpassword:""
        },
    
    validationSchema: Yup.object({
    
    name:Yup.string()
    .min(6, "Must be atleast 6 charectors.")
    .required("This is a required fiels."),
    
    email:Yup.string()
    .email("Please provide a valid email.")
    .required("This is a required fiels."),

    password:Yup.string()
    .min(6, "Must be more than 6 chars.")
    .required("This is a required fiels."),
    
    cpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required("This is a required fiels."),
       
    }),
    
    onSubmit:(values)=>{


        const username = values.name;
        const email = values.email;
        const password = values.password;

        axios.post(process.env.NEXT_PUBLIC_API +  '/auth/local/register', {username, email, password})
        .then(function (response) {
             console.log(response);
                setCookie('jwt', response.data.jwt);
                setCookie('email', response.data.user.email);
                setCookie('userInfo', JSON.stringify(response.data.user));
                setCookie('username', response.data.user.username);
                // sending message
                toast.success('Registration Successful.');
                // redirecting to account page
                router.push('/account');
            })
            .catch(function (error) {
              console.log(error);
              toast.error(error.response.data.error.message);
            }); 
   
        }

  

});
 
 
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
    duration: 5000,

    // Default options for specific types
    success: {
      duration: 5000,
    },
  }}
/>


<section className="wrapper bg-light">
  <div className="container pb-14 pb-md-16">
    <div className="row">
      <div className="col-lg-7 col-xl-6 col-xxl-5 mx-auto pt-8">
        <div className="card">
          <div className="card-body p-11 text-center">
            <h2 className="mb-3 text-start">Register</h2>
            <p className="lead mb-6 text-start">Registration takes less than a minute.</p>
            <form className="text-start mb-3" onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-4">
                <input 
                name='name'
                onChange={formik.handleChange} 
                value={formik.values.name}
                onBlur={formik.handleBlur}
                 type="text" className="form-control" placeholder="Name"/>
                <label>Name</label>

                {formik.touched.name && formik.errors.name && <span className='text-danger small'>{formik.errors.name}</span>}

              </div>
              <div className="form-floating mb-4">
                <input 
                name='email'
                 onChange={formik.handleChange} 
                 value={formik.values.email}
                 onBlur={formik.handleBlur} type="email" className="form-control" placeholder="Email" />
                <label >Email</label>


                {formik.touched.email && formik.errors.email && <span className='text-danger small'>{formik.errors.email}</span>}

              </div>
              <div className="form-floating password-field mb-4">
                <input 
                name='password'
                 onChange={formik.handleChange} 
                 value={formik.values.password}
                 onBlur={formik.handleBlur}

                type="password" className="form-control" placeholder="Password"/>
               
                <label>Password</label>

                {formik.touched.password && formik.errors.password && <span className='text-danger small'>{formik.errors.password}</span>}

              </div>
              <div className="form-floating password-field mb-4">
                <input 
                name='cpassword'
                 onChange={formik.handleChange} 
                 value={formik.values.cpassword}
                 onBlur={formik.handleBlur}
                type="password" className="form-control" placeholder="Confirm Password" />
                <label>Confirm Password</label>

                {formik.touched.cpassword && formik.errors.cpassword && <span className='text-danger small'>{formik.errors.cpassword}</span>}

              </div>
                           <button type='submit' className="btn btn-primary rounded-pill btn-login w-100 mb-2">Register </button>
            </form>
            {/* /form */}
            
            
           


            <div className="divider-icon my-4">or</div>

            <Link href="/login">
            <button type='submit' className="btn btn-primary rounded-pill btn-login w-100 mb-2"> Login</button>
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
