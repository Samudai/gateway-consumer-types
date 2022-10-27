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

export type IMember = {
  member_id: string
  username: string
  profile_picture: string
  name: string
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
  member: IMember
  payment_id: string
  receiver: {
    username: string
    name: string
    member_id: string
  }
  amount: string
  currency: string
  onReject: {
    status: 'rejected'
  }
  onApprove: {
    safeAddress: string
    safeTxHash: string
    provider: string
  }
}

export type PaymentReceivedNotificationMetaData = {
  member: IMember
  payment_id: string
  payment_tx_hash: string
}

//Reviews
export type JobApplicantNotificationMetaData = {
  member: IMember
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
  member: IMember
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
  member: IMember
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
  member: IMember
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
  member: IMember
  from: {
    username: string
    member_id: string
  }
  onReject: {
    status: 'declined'
    request_id: string
  }
  onApprove: {
    status: 'accepted'
    request_id: string
  }
}

export type AddedToProjectNotificationMetaData = {
  member: IMember
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

export type AddedToTaskNotificationMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    added_by: string
  }
  onView: {
    task_id: string
  }
}

export type CollabRequestNotificationMetaData = {
  member: IMember
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

export type DealFormResponseNotificationMetaData = {
  member: IMember
  response: {
    project_id: string
    title: string
    form_id: string
    added_by: string
  }
  onView: {
    form_id: string
  }
}

export type DiscussionCreatedNotificationMetaData = {
  member: IMember
  discussion: {
    title: string
    discussion_id: string
    created_by: string
  }
  onView: {
    discussion_id: string
  }
}
