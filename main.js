const pets = ["cat", "dog", "fish", "reptile", "hamster", "horse"]
const pets2 = ["cat", "dog", "bear", "wolf", "pig"]
// breaks the array into chunks
console.log('(_.chunk)')
console.log(_.chunk(pets, 2))

// reverses the order of the array
console.log('(_.reverse)')
console.log(_.reverse(pets))

// displays the array without specific values
console.log('(_.without)')
console.log(_.without(pets, "horse", "reptile"))

// returns a new shuffled aray
console.log('(_.shuffle)')
console.log(_.shuffle(pets))

// creates a new array with front values dropped.
console.log('(_.drop)')
console.log(_.drop(pets, 2))

// returns a string and joins them with a 'seperator'
console.log('(_.join)')
console.log(_.join(pets, "+"))
console.log(_.join(pets, "   *   "))

// returns a new array of combined items but won't repeat values
console.log('(_union)')
console.log(_.union(pets, pets2))