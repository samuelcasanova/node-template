import { SayHelloWithOptional } from './application/SayHelloWithOptional'

const result = new SayHelloWithOptional().run()
result.fold(
  () => {
    throw new Error('500: Internal Server Error')
  },
  (someValue) => {
    console.log(someValue)
  }
)
