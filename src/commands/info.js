// @flow

import {Command, flags} from 'cli-engine-heroku'
import {addonCompletion, spaceCompletion} from '../completions'

export default class AppInfo extends Command {
  static topic = 'foo:bar'
  static command = 'info'
  static description = 'demo flag completion'
  static flags = {
    app: flags.app(), // app completion included
    space: flags.string({description: 'space to use', char: 's', completion: spaceCompletion}),
    addon: flags.string({description: 'addon to use', char: 'a', completion: addonCompletion})
  }

  async run () {
    let app = this.flags.app
    let space = this.flags.space
    let addon = this.flags.addon
    if (!(addon || app || space)) throw new Error('missing resource')

    let output = this._formatOutput(addon, app, space)
    this.out.log(output)
  }

  _formatOutput (addon: ?string, app: ?string, space: ?string): string {
    let ad = addon ? `addon: ${addon}\n` : ''
    let ap = app ? `app: ${app}\n` : ''
    let sp = space ? `space: ${space}\n` : ''
    return `${ap}${ad}${sp}`
  }
}
