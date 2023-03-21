import { UseErrorProps } from 'app/models/hooks/useError.mode'
import { useState } from 'react'

export const UseError = (): any => {
  const [errors, setErrors] = useState<UseErrorProps[]>([])

  const setError = ({ field, message }: UseErrorProps) => {
    const errorAlreadyExists = errors.find((error) => error.field === field)
    if (errorAlreadyExists) {
      return
    }

    setErrors((prevState) => [...prevState, { field, message }])
  }

  const removeError = (fieldName: string): void => {
    setErrors((prevState) =>
      prevState.filter(({ field }) => field !== fieldName)
    )
  }

  const getErrorMessageByFieldName = (fieldName: string) =>
    errors.find(({ field }) => field === fieldName)?.message

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  }
}
