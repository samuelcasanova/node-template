export type DomainErrorType = 'NameIsEmptyError' | 'VersionNotAvailableException'
export class DomainError extends Error {
  constructor (public name: DomainErrorType, message: string) {
    super(message)
  }
}
