declare module 'harmonic' {
  export type ScaleParams = {
    base?: number,
    ratio?: number,
    step?: number,
    zero?: number,
  }
  export type Scale = (s: number) => number;
  export default function scale(s: number): number;
  export function makeScale(params: ScaleParams): Scale;
}
