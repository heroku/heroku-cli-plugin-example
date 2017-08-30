// @flow

import {Command} from 'cli-engine-heroku'

export default class AppInfo extends Command {
  static topic = 'hello'
  static command = 'world'
  static description = 'example command'

  async run () {
    this.out.log('hello world!')
  }
}
