// @flow

import Info from './info'

test('it displays the given flags', async () => {
  let cmd = await Info.mock('--app', 'foo', '--addon', 'bar', '--space', 'baz')
  expect(cmd.out.stdout.output).toEqual('app: foo\naddon: bar\nspace: baz\n\n')
})

test('it throws missing flag error', async () => {
  expect.assertions(1)
  try {
    await Info.mock()
  } catch (err) {
    expect(err.message).toEqual('Missing flag --app, --addon, or --space')
  }
})
