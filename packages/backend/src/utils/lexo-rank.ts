export class LexoRank {
  static readonly LENGTH = 6;

  static min(): string {
    return '0'.padEnd(this.LENGTH, '0');
  }

  static max(): string {
    return 'z'.padEnd(this.LENGTH, 'z');
  }

  static middle(prev: string, next: string): string {
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
