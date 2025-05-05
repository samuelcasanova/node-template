import { SayHello } from '../src/application/SayHello'

it('should say hello', () => {
  expect(new SayHello().run()).toMatch(/Hello \w+ from node v\d+.\d+.\d+/)
})
