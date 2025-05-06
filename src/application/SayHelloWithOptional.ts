import { Optional } from '../domain/Optional'

export class SayHelloWithOptional {
  run (): Optional<string> {
    if (process.env.USER == null) {
      return Optional.empty()
    }
    if (process.version == null) {
      return Optional.empty()
    }
    return Optional.of(`Hello ${process.env.USER ?? 'world'} from node ${process.version}`)
  }
}
