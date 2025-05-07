import { useEffect, useState } from "react";

function useFetch(fetchFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        console.error('Fetching Error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
}

export default useFetch;
