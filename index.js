// Function 1: scuberGreetingForFeet
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    return 'No can do.';
  }
}

// Function 2: ternaryCheckCity
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function 3: switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Do not modify the code below this line!
module.exports = {
  scuberGreetingForFeet,
  ternaryCheckCity,
  switchOnCharmFromTip,
};
