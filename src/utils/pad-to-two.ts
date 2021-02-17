export default function padToTwo(n: number): string | number {
  return n <= 9 ? `0${n}` : n;
}
