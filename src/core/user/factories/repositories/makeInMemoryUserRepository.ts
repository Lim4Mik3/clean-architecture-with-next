import { InMemoryUserRepository } from '../../data/implementations/InMemoryUserRepository'

export const makeInMemoryUserRepository = () => new InMemoryUserRepository()