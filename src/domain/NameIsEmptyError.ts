import { DomainError } from './DomainError'

export class NameIsEmptyError extends DomainError {
  constructor () {
    super('NameIsEmptyError', 'Name is empty')
  }
}
