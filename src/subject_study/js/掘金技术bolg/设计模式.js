/*
 * @Date: 2020-10-27 10:55:44
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-10-27 13:50:36
 */
// 单例模式

let SingleCase = function(name) {
  this.name = name
}

SingleCase.prototype.getName = function() {
  return this.name
}

let getInstance = (function() {
    let instance = null

    return function(name) {
        if (!instance) {
            instance = new SingleCase(name)
        }
        return instance
    }
})()

let one = getInstance('one')
let two = getInstance('two')
console.log(two.getName())
console.log(one === two)  // true

// 工厂模式
let UserFactory = function(role) {
    function User(opt) {
        this.name = opt.name
        this.viewPage = opt.viewPage
    }
    switch (role) {
        case 'superAdmin':
            return new User(superAdmin)
            // eslint-disable-next-line no-unreachable
            break
        case 'admin':
            return new User(admin)
            // eslint-disable-next-line no-unreachable
            break
        case 'user':
            return new User(user)
            // eslint-disable-next-line no-unreachable
            break
        default:
            throw new Error('参数错误')
    }
}

let superAdmin = UserFactory('superAdmin')
let admin = UserFactory('admin')
let user = UserFactory('user')
