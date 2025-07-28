import { create } from 'zustand';
import { subscribeWithSelector, persist } from 'zustand/middleware';

const auth = (set) => ({
	session: [{ user: 'testUser', status: 'logged-in' }],
});

export const useAuth = create(
	subscribeWithSelector(persist(auth), { name: 'auth' })
);
