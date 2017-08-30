// @flow

import Hello from './hello'

test('it displays the given flags', async () => {
  let cmd = await Hello.mock()
  expect(cmd.out.stdout.output).toEqual('hello world!\n')
})
