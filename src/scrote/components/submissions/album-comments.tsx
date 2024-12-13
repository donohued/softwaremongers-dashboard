import React from 'react'

type SubmissionWindowAlbumCommentsProps = {
    name: string;
    comment: string;
}

export default function SubmissionWindowAlbumComments({ name, comment }: SubmissionWindowAlbumCommentsProps) {
    return (
        <div style={{ width: '100%' }}>
            name <br />
            comment
        </div>
    )
}
