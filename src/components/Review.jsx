import axios from "axios";
import { useEffect, useState } from "react";

export default function Review() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/review")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex justify-center items-center m-20 bg-green-500 rounded">
            {data.map((item) => (
                <div className="bg-white m-5 p-6 rounded-lg shadow-md" key={item.id}>
                    <div className="flex items-center mb-4">
                        <div className="font-medium dark:text-white">
                            <p>
                                {item.name}
                                <time
                                    dateTime="2014-08-16 19:00"
                                    className="block text-sm text-gray-500 dark:text-gray-400"
                                >
                                    {item.designation}
                                </time>
                            </p>
                            <div className="rating items-center">
                                <span className="mr-2">
                                    {item.rating}

                                </span>
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                        {/* Your existing SVG icons */}
                    </div>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        This is my third Invicta Pro Diver. They are just fantastic value for
                        money. This one arrived yesterday and the first thing I did was set
                        the time, popped on an identical strap from another Invicta and went
                        in the shower with it to test the waterproofing.... No problems.
                    </p>
                </div>
            ))}
        </div>
    );
}
