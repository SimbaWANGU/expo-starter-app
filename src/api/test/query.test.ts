import { createQueryKeyStore } from '@lukemorales/query-key-factory'
import { todos } from './api.test'

export const todoKeys = createQueryKeyStore({
	todo: {
		getTodos: () => ({
			queryKey: ['getTodos'],
			queryFn: () => todos.getTodos(),
		})
	}
})