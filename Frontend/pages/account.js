import { getCookie } from 'cookies-next'
import { verify } from 'jsonwebtoken';
import Link from 'next/link';
import Router, { useRouter  } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';



export default function account() {

    const JWT = getCookie('jwt');
    const username = getCookie('username');
    const router = useRouter()
    const JWT_SECRET = process.env.JWT_KEY;
   

    
  return (
    <div className='container py-10'>
<h1 className='display-2'>{username}</h1><br></br>

<button className='btn btn-danger'>
<Link href="/logout">Logout</Link>
</button>


    </div>
  )
}
