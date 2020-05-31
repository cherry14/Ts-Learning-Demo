/*
 * @Page: 更多更新
 * @Version: 1.0.0
 * @Autor: xumeng
 * @Date: 2020-05-22 09:30:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-22 19:32:57
 */ 
function getIndexPromise(bool) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
         if (bool) { resolve('a') }  
         else { reject(Error('error')) }
       }, 1000);
        
    })
}
getIndexPromise(false).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
async function asyncFunc() {
    const res = await getIndexPromise(true)
}


interface Res {
    data: {
        [key:string]: any
    }
}
namespace axios {
   export function post(url: string, config: object): Promise<Res> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const res: Res = { data:{} }
                if (url === '/login') { res.data.user_id = 111}
                else { res.data.role = 'admin' }
                resolve()
            }, 1000)
        })
    }
}
interface LoginInfo {
    user_name: string
    password: string
}
async function loginReq({ user_name, password }: LoginInfo) {
    try {
        const res = await axios.post('/login', {
            data:{
                user_name,
                password  
            }
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}
async function getRoleReq(user_id: number) {
    try {
        const res = await axios.post('/user_roles', {
            data: {
                user_id
            }
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}
loginReq({ user_name: 'lili', password: '123456'}).then (res => {
   const { data: { user_id } } = res
   getRoleReq(user_id).then(res => {
       const { data: { role } } = res
       console.log(res)
   })
})




async function getTime(format: string) {
    const moment = await import('moment')
    return moment().format()
}





interface ObjIn {
    name?: string
    age?: number
}
let objIn = {
    sex: 'man'
}
function printInfo(info: ObjIn) {
    console.log(info)
}
printInfo(objIn as ObjIn)




function mergeOptions<T, U extends string>(op1: T, op2: U) {
    return { ...op1, op2 }
}
console.log(mergeOptions({ a: 'a'}, 'name')) // { a: 'a', op2: 'name' }

function getExcludeProp<T extends { props: string }>(obj: T) {
    const { props, ...rest } = obj
    return rest
}
const objInfoTwo = {
    props: 'something',
    name: 'lison',
    age: 18
}
console.log(getExcludeProp(objInfoTwo)) // { name: 'lison',  age: 18 }