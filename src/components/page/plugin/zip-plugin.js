const JSZip = require('jszip')

// const zip = new JSZip()

module.exports = class ZipPlugin {
    constructor(option) {
        this.option = option
    }

    apply(compiler) {

        // console.log('compiler', compiler.afterPlugins)

        // console.log('compiler', compiler.hooks)
        // compiler.plugin('emit', function(compilation, callback) {

            // const folder = zip.folder(this.option.filename)
            // console.log('folder', compilation)
        // })

        compiler.hooks.emit.tapAsync('ZipPlugin', (compilation, callback) => {
            const folder = zip.folder(this.option.filename)

            console.log('folder', folder)

            for (let filename in compilation.assets) {
                console.log(filename)
            }
        })
    }
}
