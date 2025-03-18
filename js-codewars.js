// Messi Goals
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }

// Make negative
function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
  }

// Game Move
function move(position, roll) {
    return position + roll * 2;
  }

// Personalized Message
function greet(name, owner) {
    if (name === owner) {
      return "Hello boss";
    } else {
        return "Hello guest";
    }
  }

// Keep Hydrated
function litres(time) {
    return Math.floor(time * 0.5);
  }

// Opposites Attract
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
  }