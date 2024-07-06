import { useLayoutEffect, useState } from "react";

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useLayoutEffect(() => {
        setIsLoading(false)
    }, []);
  
    return <>
    {isLoading ? <div id="containerLoading">
        <div className="loader"></div>
    </div>
    : null
    }
</>;
  };

export default Loader;
