import { DomainError } from './DomainError'

export class VersionNotAvailableException extends DomainError {
  constructor () {
    super('VersionNotAvailableException', 'Version not available')
  }
}
