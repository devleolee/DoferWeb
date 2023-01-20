import React from 'react'
import { getCookie, deleteCookie } from 'cookies-next'
import { useEffect } from 'react';
import Router, { useRouter  } from 'next/router';


export default function Logout() {
    deleteCookie('jwt');
    deleteCookie('userInfo');
    deleteCookie('username');
    deleteCookie('email');

    const username = getCookie('username');
    const router = useRouter()

    useEffect(() => {
        if (!(username)) {
          router.push('/login')
        }
      }, [])

  return (
    <div>logout</div>
  )
}
