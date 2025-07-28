import { createServerClient } from '@supabase/ssr';

export default function useSupabaseServer(cookieStore) {
	return createServerClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY,
		{
			cookies: {
				get(name) {
					return cookieStore.get(name)?.value;
				},
			},
		}
	);
}
