import { Coin } from "./levels";

export function unboundedKnapsack(W: number, coins: Coin[]) {
  // Stores most dense item
  let maxDenseIndex = 0;

  // Find the item with the highest unit value
  // (if two items have the same unit value, choose the lighter item)
  for (let i = 1; i < coins.length; i++) {
    const currentDensity = coins[i].value / coins[i].weight;
    const maxDensity = coins[maxDenseIndex].value / coins[maxDenseIndex].weight;

    if (
      currentDensity > maxDensity ||
      (currentDensity === maxDensity &&
        coins[i].weight < coins[maxDenseIndex].weight)
    ) {
      maxDenseIndex = i;
    }
  }

  const dp = new Array(W + 1).fill(0);

  let counter = 0;
  let breaked = false;
  let i;

  for (i = 0; i <= W; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j].weight <= i) {
        dp[i] = Math.max(dp[i], dp[i - coins[j].weight] + coins[j].value);
      }
    }

    if (
      i - coins[maxDenseIndex].weight >= 0 &&
      dp[i] - dp[i - coins[maxDenseIndex].weight] === coins[maxDenseIndex].value
    ) {
      counter += 1;

      if (counter >= coins[maxDenseIndex].weight) {
        breaked = true;
        break;
      }
    } else {
      counter = 0;
    }
  }

  if (!breaked) {
    return dp[W];
  } else {
    const start = i - coins[maxDenseIndex].weight + 1;
    const times = Math.floor((W - start) / coins[maxDenseIndex].weight);
    const index = ((W - start) % coins[maxDenseIndex].weight) + start;

    return times * coins[maxDenseIndex].value + dp[index];
  }
}

// export const isOptimalSolution = (selectedCoins: Coins[], coins: Coins[], maxWeight: number) => {
//   const selectedValue = selectedCoins.reduce((acc, coin: Coins) => acc + coin.value, 0);
//   const optimalValue = knapsack(coins, maxWeight);
//   return selectedValue === optimalValue;
// };
