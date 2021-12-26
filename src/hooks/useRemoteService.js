import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRemoteService = (initialState, url) => {
  const [data, setData] = useState(initialState, url)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)

      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
