import {
  NotificationCreatedby,
  NotificationFor,
  NotificationScope,
  NotificationStatus,
  NotificationType,
} from './enums'

interface Extra {
  [key: string]: string | number
}
export type MemberSession = {
  memberId: string
  member: string
  connected: boolean
}

export type ErrorResponse = {
  message: string
  error: string
}

//Notification that is sent out
export type WebNotification = {
  notificationId: string
  notificationData: NotificationPartialData
  notificationStatus: NotificationStatus
  notificationContent: NotificationContent
  timestamp: number
  scope: NotificationScope
}

export type NotificationContent = {
  type: NotificationType
  notificationHeader: string
  notificationBody: string
  metaData?: any
}

export type NotificationPartialData = {
  to: {
    to: string[]
    for: NotificationFor
  }
  from: {
    from: string
    origin: string
    by: NotificationCreatedby
  }
  metaData?: {
    id: string
    extra?: Extra
  }
  timestamp: string
}

//Payments
export type PaymentCreatedNotificationMetaData = {
  payment_id: string
  receiver: {
    username: string
    member_id: string
  }
  amount: string
  currency: string
  onReject: {
    status: 'REJECTED'
  }
  onApprove: {
    safeAddress: string
    safeTxHash: string
    provider: string
  }
}

export type PaymentReceivedNotificationMetaData = {
  payment_id: string
  payment_tx_hash: string
}

//Reviews
export type JobApplicantNotificationMetaData = {
  applicant: {
    username: string
    member_id: string
  }
  job: {
    id: string
    title: string
    applied_on: string
  }
  onView: {
    member_id: string
  }
}

export type BountySubmissionNotificationMetaData = {
  bounty: {
    title: string
    bounty_id: string
    submission_id: string
  }
  submittedBy: {
    username: string
    member_id: string
  }
  onView: {
    submission_id: string
  }
}

export type TaskReviewNotificationMetaData = {
  task: {
    title: string
    task_id: string
    project_id: string
  }
  updatedBy: {
    username: string
    member_id: string
  }
  project: string
  onView: {
    task_id: string
  }
}

export type MeetingCreatedNotificationMetaData = {
  meeting: {
    title: string
    location: string
    meeting_id: string
    date: string
    from: string
    to: string
  }
  onView: {
    meeting_link: string
  }
}

export type SocialConnectionRequestNotificationMetaData = {
  from: {
    username: string
    member_id: string
  }
  onReject: {
    status: 'REJECTED'
    request_id: string
  }
  onApprove: {
    status: 'APPROVED'
    request_id: string
  }
}

export type AddedToProjectNotificationMetaData = {
  project: {
    title: string
    project_id: string
    dao: string
    added_by: string
  }
  onView: {
    project_id: string
  }
}

export type CollabRequestNotificationMetaData = {
  from: {
    dao_name: string
    dao_id: string
  }
  to: {
    dao_name: string
    dao_id: string
  }
  onReject: {
    status: 'rejected'
    collaboration_id: string
  }
  onAccept: {
    status: 'accepted'
    collaboration_id: string
  }
}
