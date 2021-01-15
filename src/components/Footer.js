import React from 'react';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <div className="footer">
            <p>© 2021 Damien Mesure - <a href={`/termsofuse`} className="footerUrl">Terms Of Use</a></p>
        </div>
    );
}

