import path from 'path'
import fs from 'fs-extra'

export default function createAppDir(name) {
  const root = path.resolve(name)
  // fs.ensureDirSync(root)
  fs.ensureDir(root)
    .then(() => {
      console.log('success!')
    })
    .catch(err => {
      console.error(err)
    })
}