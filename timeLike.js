var timelike = function (hour) {

  var split1 = hour.toString().split('');


   if ( split1.length < 3 || split1.length > 4) {
     throw ('error')
   }
  var seconds = split1.splice(split1.length-2, split1.length)
  split1.push(':')
  split1.push(seconds[0], seconds[1])

  var final = split1.reduce((acc,char) => {
    return acc + char
  },'')
  // return split1.join('')
  return final
  }

  timelike(800) // # should return '8:00'
  timelike(1000) //# should return '10:00'
  timelike(1451) //# should return '14:51'
  timelike(3351) //# should return '33:51'
  //timelike(10000)