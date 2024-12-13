import React from 'react'

type SubmissionWindowConfessionsProps = {
  name: string
  email: string
  confession: string
}

export default function SubmissionWindowConfessions({name, email, confession}: SubmissionWindowConfessionsProps) {
  return (
    <div style={{width:'100%'}}>
    name <br />
    email <br />
    confession
    </div>
  )
}
