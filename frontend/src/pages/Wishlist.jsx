import React, {useEffect, useState} from "react";
import {useSnapshot} from "valtio";
import {state} from "../store";

const Wishlist = () => {
    const snap = useSnapshot(state);
    const [wishlist, setWishlist] = useState({});

    useEffect(() => {
        console.log(snap.userId)
        fetch(`http://localhost:8080/wishlist/${snap.userId}`)
            .then((response) => response.json())
            .then((data) => {
                setWishlist(data);
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h2>Wishlist</h2>
        </div>
    )
}

export default Wishlist;