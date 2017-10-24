const co = require('co')
const equal = require('assert').deepEqual
const { isSuccess } = require('consistent-failables/failable')
const { probe } = require('./index')

describe('index.js', () => {
  const videoFile = 'ps1024x768Vid.mp4'

  it('should run basic ffprobe with input video', co.wrap(function * () {
    const result = yield probe(videoFile)
    equal(isSuccess(result))
  }))
})
