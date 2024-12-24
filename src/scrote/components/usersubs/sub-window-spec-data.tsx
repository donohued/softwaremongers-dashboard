import React from 'react'

type SubmissionWindowMainProps = {
    data: Record<string, string[]>
}

export default function SubmissionWindowMainComponent({ data }: SubmissionWindowMainProps) {

    console.log(data);
    return (
        <div style={{ width: "100%" }}>
            {Object.entries(data).map(([key, value]) => (
            <div key={key}>
                <strong>{key}</strong>: {value[1]}
                <br />
            </div>
            ))}
        </div>
    )
}
