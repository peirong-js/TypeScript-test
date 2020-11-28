let isDo: boolean = false
let age: number = 10
let myName: string = 'peirong'
let message: string = `hello ${myName}`

let numOrStr: number | string

const hello = (name: string) => {
    return `hello ${name}`
}
hello('peirong')

let un: undefined = undefined
let n: null = null

let not: any = 4
not = 'maybe'
not = true
not.myName
not.getName()

// 数组
let arrNumber: number[] = [1, 2, 3]
arrNumber.push(3)

// 元祖
let user: [string, number] = ['peirong', 23]
user.push('lili')
user.push(18)

// interface
interface Person {
    name: string,
    age?: number,
    readonly id: number
}
let peirong: Person = {
    id: 1,
    name: 'peirong',
    age: 18
}
// peirong.id = 0717

// 函数
const add = (x: number, y: number, z?: number): number => {
    if(typeof z === 'number') return x + y + z
    else return x + y
}
let add2: (x: number, y: number, z?: number) => number = add
// interface 描述函数类型
interface Sum {
    (x: number, y: number, z?: number) : number
}
let add3: Sum = add

// 
function getLength(input: string | number): number {
    const str = input as string
    if(str.length) {
        return str.length
    }else {
        const number = input as number
        return number.toString().length
    }
}

function getLength2(input: string | number): number {
    if(typeof input === 'string') {
        return input.length
    } else {
        return input.toString().length
    }
}

export {}