import fs from 'fs'
import mem from 'mem'
import { execFile } from 'child_process'

let pathname = '/Applications/Sketch.app/Contents/Resources/sketchtool'

const bin = () => `${pathname}/bin/sketchtool`

const run = mem((...args) => {
  return new Promise((resolve, reject) => {
    execFile(bin(), args, (error, stdout, stderr) => {
      if (error) return reject(error)
      resolve(stdout)
    })
  })
})

export default {
  get path() {
    return pathname
  },

  set path(val) {
    pathname = val
  },

  get bin() {
    return bin()
  },

  get installed() {
    return fs.existsSync(this.bin)
  },

  get version() {
    return run('--version')
      .then(out => Number(out.match(/(\d+)/)[0]))
  },

  dump(document) {
    return run('dump', document)
      .then(out => JSON.parse(out))
  }
}
