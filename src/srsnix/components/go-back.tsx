import React from 'react';
import { Link } from 'react-router-dom';

interface GoBackProps {
    url: string;
}

export default function GoBack({ url }: GoBackProps) {
    return (
        <div style={{margin:'auto', width:'50%', textAlign:'center'}}>
            <Link to={url}>Go Back</Link>
        </div>
    );
}
