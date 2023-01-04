


arr = [1, 5, 10, 20, 20, 20, 40, 80]
map1 = {}
// map insertion
for (let i=0; i<arr.length; i++) {
    let val = map1[arr[i]]
    // key: value [count]
    if (val == undefined ){
        map1[arr[i]] = 1
    } else {
        map1[arr[i]] = val + 1 // new value
    }
}

//Retrieve the value 
for( key in map1 ) {
    console.log(key, map1[key])
}

