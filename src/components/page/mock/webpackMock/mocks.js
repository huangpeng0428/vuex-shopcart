const Mock = require('mockjs')
const faker = require('faker')
const {
  pathToRegexp
} = require('path-to-regexp')

// const API_MAP = require('../api/api_map')

faker.locale = 'zh_CN' // 设置数据是中文类型

function normalizeResult(keys, matches) {
  const res = {}
  keys.forEach(function(item, index) {
    res[item.name] = matches[index + 1]
  })
  return res
}

function Chain() {
  this._routes = []
}

Chain.prototype.add = function(pattern, cb) {
  const keys = []
  const re = pathToRegexp(pattern, keys)
  this._routes.push({
    re,
    keys,
    cb
  })
}

Chain.prototype.exec = function(req, fn) {
  const len = this._routes.length
  for (let i = 0; i < len; i++) {
    const route = this._routes[i]
    const matches = route.re.exec(req.params[0])
    if (!matches) {
      continue
    } else {
      return fn(route.cb(req, normalizeResult(route.keys, matches)))
    }
  }
}

const chain = new Chain()

// mock
chain.add('/console/mdsp/dynamic/list', function(req, params) {
  return Mock.mock({
    code: 200,
    message: '',
    redirect: '',
    value: {
      total: 15,
      data: Array(Mock.Random.integer(10, 15)).fill(0).map((v, i) => {
        return {
          id: 1000 + i,
          name: Mock.Random.ctitle(), // cparagraph, csentence
          defaultKeyword: Mock.Random.ctitle(),
          keywords: Array(Mock.Random.integer(2, 6)).fill(0).map(v => Mock.Random.ctitle()),
          'dmpStatus|1': [0, 1]
        }
      })
    }
  })
})

module.exports = function(req, res, next) {
  chain.exec(req, function(result) {
    if (req.query.jsonpCallback) {
      res.send(`${req.query.jsonpCallback}(${JSON.stringify(result)})`)
    } else {
      res.json(result)
    }
    next()
  })
}
