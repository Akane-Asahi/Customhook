import React, { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        await fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => { console.log(error) })
        setLoading(true);
    }

    useEffect(() => {
        getData();
        console.log("before ", data);
    }, []);


    return { data, loading };
}
export default useFetch;