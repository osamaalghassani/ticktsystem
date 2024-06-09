import { type DependencyList, useEffect } from 'react';

export function useDebounceEffect(
  function_: (...args: any[]) => void,
  waitTime: number,
  deps: DependencyList = [],
) {
  useEffect(() => {
    const time = setTimeout(() => {
      function_(...deps);
    }, waitTime);

    return () => {
      clearTimeout(time);
    };
  }, [deps, function_, waitTime]);
}
