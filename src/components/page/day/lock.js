/*
 * @Date: 2020-05-12 19:40:22
 * @LastEditors: PoloHuang
 * @LastEditTime: 2020-05-13 14:55:01
 * desc: promise 锁
 */

const mockRequest = (name, time = Math.random() * 1000) =>
  new Promise(resolve => {
    console.log(`${name}---------------run`);
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      resolve(`${name}---------------done`);
    }, time);
  });

const lock = { wait: null, runing: null };

const request = async(
  name,
  opts = { withOutLock: false, lockOthers: false, hasErr: false }
) => {

  // 不需要等待的请求直接执行
  if (opts.withOutLock) {
    const res = await mockRequest(`${name} - withOutLock`);

    console.log(res);
    return;
  }

  // 关键请求未执行完成 其他请求进入等待状态
  if (lock.runing) {
    console.log(`${name}---------------wating...`);
    await lock.runing;
  }

  // 锁住之后进来的请求
  if (opts.lockOthers) {
    lock.runing = mockRequest(name, 4000);
    let res = await lock.runing;

    // 清空进行锁
    lock.runing = null;

    // 模拟关键请求失败的 需要再次等待其他操作的情况 例如重新登陆等
    if (opts.hasErr) {
      lock.wait = mockRequest('关键请求异常处理', 4000);
    } else {
      console.log(res);
      return;
    }
  }

  // 等待模拟关键请求失败的处理
  if (lock.wait) {
    console.log(`等待关键请求异常处理中...`);
    await lock.wait;

    // 清空等待锁
    lock.wait = null;
    console.log(`关键请求异常处理完成`);
  }

  const res = await mockRequest(name);

  console.log(res);

  return;
};

const mockConcurrent = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      request(`并发请求${i}`, { withOutLock: i === 0 });
    }, Math.random() * 100);
  }
};
request('关键请求 - 其他需要等待完成才能进行', {
  lockOthers: true,
  hasErr: false
});

mockConcurrent();
