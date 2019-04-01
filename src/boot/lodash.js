import _ from 'src/boot/lodash'

export default ({ app, router, Vue }) => {
  Vue.prototype._ = _
}
