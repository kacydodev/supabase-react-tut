import { createClient } from '@supabase/supabase-js';
import { useMemo } from 'react';

let client;

function getSupabaseBrowserClient() {
	if (client) {
		return client;
	}

	client = createClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY
	);

	return client;
}

function useSupabaseBrowser() {
	return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
