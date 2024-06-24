export const fetchHandler = async (url, options ={}) => {
  try {
    /** FEEDBACK: Great job getting all test cases to pass! */
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`)
    }
    // get the headers from the response.headers
    const isJson = (response.headers.get('content-type') || '').includes('application/json');
    if (isJson) {
      const jsonData = await response.json()
      return [jsonData, null]
    }
    const textData = await response.text()
    return [textData, null]
  } catch (error) {
    console.warn(error)
    return [null, error]
  }
};
