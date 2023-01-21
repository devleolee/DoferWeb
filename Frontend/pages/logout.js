import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLogout } from '@src/hooks/auth/useLogout';


export default function Logout() {
	const { logout } = useLogout();
	const router = useRouter();

	useEffect(() => {
		logout();
		router.push('/login');
	}, [])

	return (
		<div>logout</div>
	)
}
