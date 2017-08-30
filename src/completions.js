// @flow

import type {Completion} from 'cli-engine-command/lib/completion'
import {APIClient as Heroku} from 'cli-engine-heroku'

export const addonCompletion: Completion = {
  // cacheDuration defaults to 1 day
  cacheDuration: 60 * 60, // 1 hour
  // cacheKey defaults to arg or flag name
  // if cacheKey is falsey
  cacheKey: async (ctx) => {
    return (ctx.flags && ctx.flags.app) ? `${ctx.flags.app}_addons` : ''
  },
  options: async (ctx) => {
    const heroku = new Heroku({out: ctx.out})
    let addons = (ctx.flags && ctx.flags.app) ? await heroku.get(`/apps/${ctx.flags.app}/addons`) : []
    return addons.map(a => a.name).sort()
  }
}

export const spaceCompletion: Completion = {
  cacheDuration: 60 * 30, // half-hour
  options: async (ctx) => {
    const heroku = new Heroku({out: ctx.out})
    let spaces = await heroku.get('/spaces')
    return spaces.map(s => s.name).sort()
  }
}
