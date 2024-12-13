import React from 'react'

type SubmissionWindowOldScroteFeedbackProps = {
  name: string
  title: string
  company: string
  address: string
  telephone: string
  fax: string
  email: string
  category: string
  comment: string
}

export default function SubmissionWindowOldScroteFeedback({name, title, company, address, telephone, fax, email, category, comment}: SubmissionWindowOldScroteFeedbackProps) {
  return (
    <div style={{width:'100%'}}>
    Name <br />
    title <br />
    company <br />
    address <br />
    telephone <br />
    fax <br />
    email <br />
    category <br />
    comment
    </div>
  )
}
