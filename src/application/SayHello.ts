import { NameIsEmptyError } from '../domain/NameIsEmptyError'
import { VersionNotAvailableException } from '../domain/VersionNotAvailableException'

export class SayHello {
  run (): string {
    if (process.env.USER == null) {
      throw new NameIsEmptyError()
    }
    if (process.version == null) {
      throw new VersionNotAvailableException()
    }
    return `Hello ${process.env.USER ?? 'world'} from node ${process.version}`
  }
}
