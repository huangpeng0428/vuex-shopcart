```
用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
    var arr = []
    const addArr = () => {
        if (arr.length === 5) return
        for(let i = 0; i < 5; i++) {
            let item = 2 + Math.floor(Math.random()*31)
            if(arr.indexOf(item) === -1 && arr.length < 5) {
                arr.push(item)
            }else{
                addArr() 
            }
        }
        return arr
    }
    
    console.log(addArr())
```