import { useSession } from '@src/hooks/auth/useCurrentUser';
import Link from 'next/link';


export default function account() {

	const { session } = useSession();
	console.log("====>session", session);
	return (
		<div className='container py-10'>
			<h1 className='display-2'>{session?.user?.username}</h1>
			<h4>{session?.user?.email}</h4><br></br>
			<button className='btn btn-danger'>
				<Link href="/logout">Logout</Link>
			</button>
		</div>
	)
}
