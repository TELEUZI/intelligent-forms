import { Validator } from '@/index'

export function minimumLengthValidator<T extends { length: number }>(length: number, message: string): Validator<T> {
  return (control) => {
    const { value } = control
    return value.length < length ? message : null
  }
}
