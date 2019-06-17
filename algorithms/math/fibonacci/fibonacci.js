// Returns a fibonacci sequence array up to given depth
const fibonacci = (depth) => {
  const sequence = [];
  for (let i = 0; i < depth; i++) {
    const previous = sequence[sequence.length - 2];
    const current = sequence[sequence.length - 1];
    const next = previous + current;
    sequence.length < 2 ? sequence.push(...[0, 1]) : sequence.push(next);
  }
  return sequence;
}