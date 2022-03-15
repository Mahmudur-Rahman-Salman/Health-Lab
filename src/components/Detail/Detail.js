
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const { detailsId } = useParams();
    // const [d, setD] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {

        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    if (item.id == detailsId) {
                        setInfo(item);
                    }
                });
            })
    }, [])

    // useEffect(() => {

    //     fetch('/data.json')
    //         .then(res => res.json())
    //         .then(data => setD(data));
    // }, [])

    // useEffect(() => { 
    //     if (d.length > 0) { 
    //         d.map(item => {
    //             if (item?.id == detailsId) { 
    //                 setInfo(item)
    //             }
    //         })
    //     }
    // }, [d]);



    return (
        <div className='pt-5'>
            <div>
                <img src={info.img} alt="img" />
                <h4>{info.Name}</h4>
                <p>{info.Description}</p>
            </div>
        </div>
    );
};

export default Detail;