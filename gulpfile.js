const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const sftp = require('gulp-sftp')
const objectAssign = require('object-assign')

const remoteDir = '/aliyun/static/assets/xxx',
  remoteStaticDir = '/aliyun/static/assets/xxx/static'
const remoteConf = [
  {
    host: 'xxx.xxx.xxx.001',
    user: 'root',
    pass: '12345',
    port: 22
  },
  {
    host: 'xxx.xxx.xxx.002',
    user: 'root',
    pass: '12345',
    port: 22
  }
]

function upload(localPath, conf) {
  return gulp.src(localPath)
    .pipe(sftp(conf))
}

gulp.task('upload', function () {
  const distDir = path.join(__dirname, 'build')
  const childrenFiles = fs.readdirSync(distDir)
  const pathConf = []
  childrenFiles.forEach(function (file) {
    const fileDir = path.join(distDir, file)
    const isDirectory = fs.lstatSync(fileDir).isDirectory()
    if (isDirectory) {
      pathConf.push({
        localPath: fileDir + '/**',
        remotePath: remoteStaticDir
      })
    } else {
      pathConf.push({
        localPath: fileDir,
        remotePath: remoteDir
      })
    }
  })
  pathConf.forEach(function (p) {
    remoteConf.forEach(function (conf) {
      upload(p.localPath, objectAssign({}, conf, { remotePath: p.remotePath }))
    })
  })
})
