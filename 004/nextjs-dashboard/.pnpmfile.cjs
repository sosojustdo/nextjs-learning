// .pnpmfile.cjs
module.exports = {
    hooks: {
      readPackage(pkg) {
        // 允许 bcrypt 和 sharp 执行安装脚本
        if (['bcrypt', 'sharp'].includes(pkg.name)) {
          pkg.scripts = pkg.scripts || {};
          return pkg;
        }
        return pkg;
      }
    }
}
