import { useEffect, useState, useCallback } from "react";

function useFetch(fetchFunction, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedFetchFunction = useCallback(fetchFunction, deps);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await memoizedFetchFunction();
        setData(result);
      } catch (err) {
        console.error('Fetching Error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [memoizedFetchFunction]);

  return { data, loading, error };
}

export default useFetch;
