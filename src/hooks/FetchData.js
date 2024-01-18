import { useEffect } from 'react';
import { useState } from 'react';



const FetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data),setLoading(true))
            .catch(err => console.log(err),setLoading(false))
    }, []);

    return {data,loading};
    // return (
    //     <div>
    //         <ul>
    //             {data.map((list, index) => (
    //                 <li key={index}>{list.id} | {list.title}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );
}

export default FetchData