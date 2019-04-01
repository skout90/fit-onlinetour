import * as utils from 'src/utils/common-utils'

export default async ({ app, router, Vue }) => {
  Vue.prototype.$util = utils
}
