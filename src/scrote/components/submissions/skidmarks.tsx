import React from 'react'

type SubmissionWindowSkidmarksProps = {
  name: string
  message: string
}

export default function SubmissionWindowSkidmarks({name, message}: SubmissionWindowSkidmarksProps) {
  return (
    <div style={{width:'100%'}}>
    Name <br />
    message
    </div>
  )
}
