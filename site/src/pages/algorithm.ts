function merge(l: number[], r: number[]) {
    
}

function mergeSort(a: number[]) {
    let l = mergeSort(a.slice(0, a.length / 2));
    let r = mergeSort(a.slice(a.length / 2, a.length));
    return merge(l, r);
}

export function* Algorithm() {

}
