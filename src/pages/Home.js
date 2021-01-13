import React from 'react';

function Home() {
    const style = { backgroundImage: "url(/images/bgrecipe.jpg)", height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }
    return (
        <div style={style}>
            <div className="homeBox">
                <h2>Welcome to FamilyFroots</h2>
                <hr></hr>
                <p>FamilyFroots is a virtual library to share or save your family's recipes.</p>
                <p>Whether it's grandma's specialty or a new invention, you can post it here!</p>
            </div>
        </div>
    );
}

export default Home;