import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { todoKeys } from '@Api/test/query.test'

const useTodos = () => {
  const { isLoading, data: todos, isError } = useQuery({
		...todoKeys.todo.getTodos(),
		//enabled: storeValue !== null && storeValue !== undefined,
	})

  return {
    todos,
    isLoading,
    isError
  }
}

export default useTodos