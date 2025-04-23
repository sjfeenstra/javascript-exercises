const findTheOldest = function(people) {
    people.forEach((item, i) => { if (item.yearOfDeath == undefined) people[i].yearOfDeath = 2025; });
    sorted = [...people].sort((a,b) => (a.yearOfDeath-a.yearOfBirth)-(b.yearOfDeath-b.yearOfBirth))
    return sorted[sorted.length-1]
};

// Do not edit below this line
module.exports = findTheOldest;
