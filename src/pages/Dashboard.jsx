import { useAuth } from '../utils/store-session';

export default function Dashboard() {
	const session = useAuth().session;
	// console.log('session:', session);
	return <>Dashboard</>;
}
