// //Suma de numeros en un array
// function DyVSuma (array) {
//     debugger
//     //caso base
//     if (array.lenght === 1) {
//         return array[0]        
//     }

//     //dividir
//     //necesitamos un punto inicial, un pivote y punto final
//     const pivote = Math.floor(array.lenght/2)
//     //slice, 2 parametros, numero 1 y 2 
//     const inicio = array.slice(0, pivote)
//     const final = array.slice(pivote) 

//     //conquistar
//     const sumaInicio = DyVSuma(inicio)
//     const sumaFinal = DyVSuma(final)
    
//     //combinar
//     return sumaInicio + sumaFinal
// }
// console.log(DyVSuma([1,2,3,4]))

/*
// Suma de números en un array
function sumadyv (arr) {
    debugger
    //Caso base
    if(arr.length === 1){
        return arr[0]
    }
    //Dividir
    const medio = Math.floor(arr.length/2)
    const izq = arr.slice(0, medio)
    const der = arr.slice(medio)
    //Conquistar
    const sumaIzq = sumadyv(izq)
    const sumaDer = sumadyv(der)
    //Combinar
    return sumaIzq + sumaDer
}
console.log( sumadyv([1,4,3,5,8,2]) )*/

//Busqueda binaria
/*
function busquedaBinaria(arr, target, inicio=0, fin=arr.length-1){
    //caso base
    if(inicio > fin){
        return -1
    }
    //calcular el pivote
    const pivote = Math.floor((inicio+fin)/2)
    //si el elemento del medio es el target lo devolvemos
    if(arr[pivote] === target) return pivote
    
    //si el pivote es mayor al targen buscamos en la mitad final
    if(arr[pivote] > target){
        return busquedaBinaria(arr, target, inicio, pivote-1)
    }else{
        return busquedaBinaria(arr, target, pivote+1, fin)
    }
}
console.log( busquedaBinaria( [1,3,5,7,9], 7 ) )*/

function mergeSort(arr){
    //caso base
    if(arr.length <= 1) return arr
    //divide en 2
    const medio = Math.floor(arr.length/2)
    const izq = mergeSort(arr.slice(0, medio))
    const der = mergeSort(arr.slice(medio))
    //conquista => unir mitades ordenadas
    return merge(izq, der)
}

function merge (izq, der){
    const result = []
    let i = 0
    let j = 0

    while(i<izq.length && j < der.length){
        if(izq[i] < der[j]){
            result.push(izq[i])
            i++
        }else{
            result.push(der[j])
            j++
        }
    }
    return result.concat( izq.slice(i) ).concat( der.slice(j) )
}

console.log( mergeSort( [4,2,1,3,6,5,0,10,34] ) )