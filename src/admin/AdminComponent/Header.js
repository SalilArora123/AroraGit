import React from 'react'
import { useRouter } from 'next/router';

const Header = () => {

    const router = useRouter();

    const logoutHandler = () => {
        router.push("/");
    }

    return (
        <div>
            <div style={{ backgroundColor: "#047600", marginLeft: "-11px", width: "103%", height: "72px" }}>
                <button onClick={logoutHandler}>Logout</button>
                Welcome to Header</div>
        </div >
    )
}

export default Header