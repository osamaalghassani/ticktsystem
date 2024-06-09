const useEffectOnce = (callback: () => void, when: boolean) => {
  const hasRunOnce = useRef<boolean>(false);

  useEffect(() => {
    if (when && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
  }, [callback, when]);
};

export default useEffectOnce;
