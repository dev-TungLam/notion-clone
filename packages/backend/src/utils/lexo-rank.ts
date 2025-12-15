/**
 * LexoRank (Base36 fixed leng)
 *
 * Uses a fixed-length string (Base36) to represent rank.
 * Alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
 * Length: 6 characters (e.g., "000000" to "zzzzzz")
 */
export class LexoRank {
  static readonly LENGTH = 6;

  static min(): string {
    return '0'.padEnd(this.LENGTH, '0');
  }

  static max(): string {
    return 'z'.padEnd(this.LENGTH, 'z');
  }

  static middle(prev: string, next: string): string {
    // Default to min/max if inputs are empty
    const p = prev || this.min();
    const n = next || this.max();

    const prevVal = parseInt(p, 36);
    const nextVal = parseInt(n, 36);

    if (prevVal >= nextVal) {
      throw new Error(
        `Invalid range: prev "${p}" (${prevVal}) > next "${n}" (${nextVal})`,
      );
    }

    const diff = nextVal - prevVal;

    if (diff <= 1) {
      throw new Error('Rank gap exhausted. strict rebalance required.');
    }

    // Deterministic midpoint
    const midVal = prevVal + Math.floor(diff / 2);

    return midVal.toString(36).padStart(this.LENGTH, '0');
  }

  /**
   * Generates a new set of evenly spaced ranks for the entire list.
   * This is triggered when the gap between two existing ranks is too small (diff <= 1)
   * to insert a new item.
   *
   * Rebalancing Strategy:
   * 1. Define the full range of the rank space (min to max).
   * 2. Calculate the total available space.
   * 3. Divide the total space by (count + 1) to determine the step size.
   * 4. Generate new ranks by incrementing from the minimum value by the step size.
   *
   * Example:
   * Input: count = 3
   * Rank Space: 000000 (0) to zzzzzz (2,176,782,335)
   * Step Size: ~544,195,583
   *
   * Output:
   * [
   *   "08zi1h", // 0 + step
   *   "0hzn2y", // prev + step
   *   "0qzr4f"  // prev + step
   * ]
   *
   * @param count The number of items to rebalance
   */
  static getRebalancedRanks(count: number): string[] {
    if (count < 1) return [];

    const minVal = parseInt(this.min(), 36);
    const maxVal = parseInt(this.max(), 36);
    const totalSpace = maxVal - minVal;

    // Step size = totalSpace / (count + 1)
    const step = Math.floor(totalSpace / (count + 1));

    if (step < 1) {
      throw new Error('Too many items to rebalance. Rank space exhausted.');
    }

    const ranks: string[] = [];
    let currentVal = minVal;

    for (let i = 0; i < count; i++) {
      currentVal += step;
      ranks.push(currentVal.toString(36).padStart(this.LENGTH, '0'));
    }

    return ranks;
  }
}
