
import { useState } from "react";


function Card({id, image, info, price, name, removeTour}) {
    const[readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }
