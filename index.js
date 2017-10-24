const co = require('co')
const exec = require('executive')
const { isSuccess } = require('consistent-failables/failable')

const probe = co.wrap(function * (video) {
  return exec(`ffprobe -i ${video}`)
})

module.exports = {
  probe
}
