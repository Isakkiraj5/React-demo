import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Heading from "./textfeilds/heading";
import { newcontext } from "./contexthooks/context";

const MountMethodApi = () => {
    let contextdata=useContext(newcontext)
    const [api, setApi] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const response = await axios.get('https://dummyjson.com/users');
        setApi(response.data.users);

    };
    console.log(api)
    return (
        <div className="row mx-0">
            <div className="col-6 p-4 mt-5 column_bt">

                <Heading heading={contextdata}/>
                <ul>
                    {api.map((x) => (
                        <li>{x.id}{x.firstName}{x.company.address.address}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MountMethodApi;
