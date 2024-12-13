import React from 'react'

type SubmissionWindowMissingPersonsProps = {
  name: string;
  email: string;
  person: string;
  dateLastSeen: string;
  description: string;
}

export default function SubmissionWindowMissingPersons({name, email, person, dateLastSeen, description}: SubmissionWindowMissingPersonsProps) {
  return (
    <div style={{width:'100%'}}>
      Name <br />
      email <br />
      person <br />
      date last seen <br />
      description <br />
    </div>
  )
}
