import React from 'react'

type SubmissionWindowPrayerRequestsProps = {
  name: string
  request: string
  subject: string
}

export default function SubmissionWindowPrayerRequests({name, request, subject}: SubmissionWindowPrayerRequestsProps) {
  return (
    <div style={{width:'100%'}}>
    Name <br />
    request <br />
    subject <br />
    </div>
  )
}
