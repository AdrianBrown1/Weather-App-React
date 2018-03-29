const thirties = [
    'BRICK', 'FROZEN', 'colder than a polar bears toenails', "Baby, it's cold outside",
  ]
  
  const forties = [ 
    'fu*k that', 'too cold', 'wtf', 'stay inside', 'cold af', 'gloves, hat & scarf', 'a bit nippy'
  ]
  
  const fifties = [
    'chilly', 'decent', 'still need a coat', 'almost warm', 
  ]
  
  const sixties = [
    'dopeee', 'nice af', 'could be worse', 'meh', 'chill' , 'leave the jacket home',
  ]
  
  const seventies = [
    'a little bit clammy', 'expect some upper lip sweat', 'you gonna sweat'
  ]
  
  const eithtiesAndUp = [
    'pretty fuking hot', "you're gonna sweat", 'hot af', 'sweaty pits', 
    'grade your shades', 'hot flashes', 'hot stuff', 'a scorche'
  ]
  
  export const getHighTempQuote = (temp) => {
    if(temp >= 30 && temp < 40) {
      return thirties[Math.floor(Math.random()*thirties.length)];
    } else if (temp >= 40 && temp < 50) {
      return forties[Math.floor(Math.random()*forties.length)];
    } else if (temp >= 50 && temp < 60) {
      return fifties[Math.floor(Math.random()*fifties.length)];
    } else if (temp >= 50 && temp < 60) {
      return sixties[Math.floor(Math.random()*sixties.length)];
    } else if (temp >= 60 && temp <= 79) {
      return seventies[Math.floor(Math.random()*seventies.length)];
    } else if (temp >= 80) {
      return eithtiesAndUp[Math.floor(Math.random()*eithtiesAndUp.length)];
    }
  }
  
  export const getLowTempQuote = (temp) => {
    if(temp >= 30 && temp < 40) {
      return thirties[Math.floor(Math.random()*thirties.length)];
    } else if (temp >= 40 && temp < 50) {
      return forties[Math.floor(Math.random()*forties.length)];
    } else if (temp >= 50 && temp < 60) {
      return fifties[Math.floor(Math.random()*fifties.length)];
    } else if (temp >= 50 && temp < 60) {
      return sixties[Math.floor(Math.random()*sixties.length)];
    } else if (temp >= 60 && temp <= 79) {
      return seventies[Math.floor(Math.random()*seventies.length)];
    } else if (temp >= 80) {
      return eithtiesAndUp[Math.floor(Math.random()*eithtiesAndUp.length)];
    }
  }