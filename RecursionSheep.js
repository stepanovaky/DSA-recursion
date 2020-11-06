function countingSheep (num) {
        if (num === 0 ) {
            return console.log('all the sheep jumped over the fence')
        } else {
            return ( console.log('another sheep jumps over the fence') + countingSheep(num - 1))
        }

    
}

countingSheep(3);