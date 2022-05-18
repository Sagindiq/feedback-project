import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const PostProvider = ({ children }) => {
  const [ data, setData ] = useState(null);
  const [ Fetch, setFetch ] = useState(false);

  useEffect(() => {
    if (!Fetch) {
      setFetch(true);
      fetch('/data.json')
        .then(res => res.json())
        .then(data => {
          setData({
            ...data,
            productRequests: data.productRequests.map(product => ({
              ...product,
              isUpvoted: false,
              upvoteColor: "#4661E6"
            })),
          });
        });
    }
  }, [Fetch]);

  if (!data) {
    return null;
  }

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
}

// export const useData = () => useContext(DataContext);
export const useData  = () => {
    return useContext(DataContext);
}

export default PostProvider;