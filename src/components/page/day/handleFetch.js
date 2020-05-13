/*
 * @Date: 2020-05-13 14:56:56
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-13 14:57:38
 * desc: 要求最大并发数 maxNum
每当有一个请求返回，就留下一个空位，可以增加新的请求
所有请求完成后，结果按照 urls 里面的顺序依次打出
 */
function handleFetchQueue(urls, max, callback) {
  const urlCount = urls.length;
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = url => {
    const req = fetch(url)
      .then(res => {
        console.log('当前并发： ' + requestsQueue);
        const len = results.push(res);
        if (len < urlCount && i + 1 < urlCount) {
          requestsQueue.shift();
          handleRequest(urls[++i]);
        } else if (len === urlCount) {
          typeof callback === 'function' && callback(results);
        }
      })
      .catch(e => {
        results.push(e);
      });
    if (requestsQueue.push(req) < max) {
      console.log(i);
      handleRequest(urls[++i]);
    }
  };
  handleRequest(urls[i]);
}

const urls = Array.from({ length: 10 }, (v, k) => k);
console.log(urls);

const fetch = function(idx) {
  return new Promise(resolve => {
    console.log(`start request ${idx}`);
    const timeout = parseInt(Math.random() * 1e4);
    setTimeout(() => {
      console.log(`end request ${idx}`);
      resolve(idx);
    }, timeout);
  });
};

const max = 4;

const callback = res => {
  console.log('run callback', res);
};

handleFetchQueue(urls, max, callback);
