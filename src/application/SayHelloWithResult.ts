import { NameIsEmptyError } from '../domain/NameIsEmptyError'
import { Result } from '../domain/Result'
import { VersionNotAvailableException } from '../domain/VersionNotAvailableException'

export class SayHelloWithResult {
  run (): Result<string, NameIsEmptyError | VersionNotAvailableException> {
    if (process.env.USER == null) {
      return Result.error(new NameIsEmptyError())
    }
    if (process.version == null) {
      return Result.error(new VersionNotAvailableException())
    }
    return Result.ok(`Hello ${process.env.USER ?? 'world'} from node ${process.version}`)
  }
}
