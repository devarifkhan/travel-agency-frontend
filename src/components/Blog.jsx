import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Blog() {

    const [data, setData] = useState([]); // Set initial state to an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:5000/api/blog');
                setData(result.data); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.length > 0 && (
                data.map((item, index) => (
                    <div className="mt-5" key={index}>
                        <div className="mx-auto w-3/4">
                            <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5">
                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-3">
                                        <a href="#">
                                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{item.title} </h5>
                                        </a>
                                        {/* Extracting the date part */}
                                        <p className="text-gray-500">{new Date(item.date).toISOString().split('T')[0]}</p>
                                    </div>
                                    <p className="font-normal text-gray-700 mb-3">{item.content}</p>
                                    <div id={`map-${index}`} style={{ height: "auto" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}