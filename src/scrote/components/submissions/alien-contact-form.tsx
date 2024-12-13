import React from 'react'

type SubmissionWindowAlienContactFormProps = {
  name: string
  email: string
  subject: string
  message: string
}

export default function SubmissionWindowAlienContactForm({name, email, subject, message}: SubmissionWindowAlienContactFormProps) {
  return (
    <div style={{ width: '100%' }}>
      name <br />
      email <br />
      subject <br />
      message
    </div>
  )
}
