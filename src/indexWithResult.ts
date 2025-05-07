import { SayHelloWithResult } from './application/SayHelloWithResult'

const result = new SayHelloWithResult().run()
result.fold(
  (value) => {
    console.log(value)
  },
  () => {
    throw new Error('500: Internal Server Error')
  }
)
