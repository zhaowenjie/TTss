// 类型声明空间
class Namespace1 {}
interface Namespace2 {}
type Namespace3 = {}

let n1: Namespace1
let n2: Namespace2
let n3: Namespace3

import * as foo from 'globalFoo'

console.log(foo)

export { n1, n2, n3}


// ts模块