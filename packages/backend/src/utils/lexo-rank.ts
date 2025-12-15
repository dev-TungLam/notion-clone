// Base36 fixed-length (6 chars) rank. Capacity ~2.1B
// Fixed length prevents infinite string growth but requires O(N) rebalancing when gaps perform strict check
export class LexoRank {
  static readonly LENGTH = 6;
  static readonly BASE36 = 36;

  static min(): string {
    return '0'.padEnd(this.LENGTH, '0');
  }

  static max(): string {
    return 'z'.padEnd(this.LENGTH, 'z');
  }

  static middle(prev: string, next: string): string {
    const prevRankOrDefault = prev || this.min();
    const nextRankOrDefault = next || this.max();

    const prevVal = parseInt(prevRankOrDefault, this.BASE36);
    const nextVal = parseInt(nextRankOrDefault, this.BASE36);

    if (prevVal >= nextVal) {
      throw new Error(
        `Invalid range: prev "${prevRankOrDefault}" (${prevVal}) > next "${nextRankOrDefault}" (${nextVal})`,
      );
    }

    const diff = nextVal - prevVal;

    if (diff <= 1) {
      // Gap exhausted. Caller must trigger O(N) rebalance
      throw new Error('Rank gap exhausted. strict rebalance required.');
    }

    // Deterministic midpoint
    const midVal = prevVal + Math.floor(diff / 2);

    return midVal.toString(this.BASE36).padStart(this.LENGTH, '0');
  }

  // O(N) rebalance strategy: Distribute items evenly across the entire rank space to maximize future insert gaps
  static getRebalancedRanks(count: number): string[] {
    if (count < 1) return [];

    const minVal = parseInt(this.min(), this.BASE36);
    const maxVal = parseInt(this.max(), this.BASE36);
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
      ranks.push(currentVal.toString(this.BASE36).padStart(this.LENGTH, '0'));
    }

    return ranks;
  }
}
