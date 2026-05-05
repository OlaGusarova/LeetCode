const kidsWithCandies = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies);
  
  return candies.map(candyI => (candyI + extraCandies) >= maxCandies)
};

module.exports = kidsWithCandies;