import { SayHello } from './application/SayHello'
import { DomainError } from './domain/DomainError'

try {
  console.log(new SayHello().run())
} catch (error) {
  if (!(error instanceof DomainError)) {
    throw new Error('500: Internal Server Error')
  }
  switch (error.name) {
    case 'NameIsEmptyError':
    case 'VersionNotAvailableException':
      console.error(error.message)
      break
    default:
      throw new Error(error.name satisfies never)
  }
}
