import { IMember } from '../project/interfaces'
import {
  NotificationCreatedby,
  NotificationFor,
  NotificationScope,
  NotificationStatus,
  NotificationType,
} from './enums'
import { Extra } from './interfaces'

export type MemberSession = {
  memberId: string
  member: string
  connected: boolean
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
  tags: string[]
  popup: boolean
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
    origin?: string
    by: NotificationCreatedby
  }
  metaData?: {
    id: string
    redirect_link?: string
    extra?: Extra
  }
  timestamp: string
}

// project
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
  project?: string
  redirect_link?: string
}

export type TaskStatusChangedNotificationMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    project_id: string
    updated_status: string
  }
  updatedBy: {
    username: string
    member_id: string
  }
  project: string
  redirect_link?: string
}

export type TaskCreatedNotificationMetaData = {
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
  redirect_link?: string
}

export type TaskDeletedNotificationMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    project_id: string
  }
  redirect_link?: string
}

export type PayoutAssignedNotificationnMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    project_id: string
  }
  payout: {
    member_id: string
    payout_amount: number
    payout_currency: string
    receiver_address: string
  }
  redirect_link?: string
}

export type TaskAssignedToContributorNotificationMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    project_id: string
    contributors: string[]
  }
  redirect_link?: string
}

export type ReviewNudgeContributorNotificationMetaData = {
  member: IMember
  dao: {
    dao_id: string
    name: string
  }
  redirect_link?: string
}

export type ReviewNudgeDAONotificationMetaData = {
  member: IMember
  redirect_link?: string
}

export type AddedToProjectNotificationMetaData = {
  member: IMember
  project: {
    title: string
    project_id: string
    dao: string
    added_by: string
  }
  redirect_link?: string
}

export type AddedToTaskNotificationMetaData = {
  member: IMember
  task: {
    title: string
    task_id: string
    added_by: string
  }
  redirect_link?: string
}

// payment
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
  redirect_link?: string
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
  redirect_link?: string
}

export type PaymentCompletedNotificationMetaData = {
  member: IMember
  payment_id: string
  payment_tx_hash: string
  redirect_link?: string
}

export type ProviderAddedNotificationMetaData = {
  member: IMember
  provider_id: string
  redirect_link?: string
}

export type DefaultProviderChangedNotificationMetaData = {
  member: IMember
  updated_provider_id: string
  redirect_link?: string
}

// job
export type postingJobNotificationMetaData = {
  member: IMember
  job: {
    job_id: string
    title: string
    dao_id: string
    dao_name: string
  }
  redirect_link?: string
}

export type postingBountyNotificationMetaData = {
  member: IMember
  bounty: {
    bounty_id: string
    title: string
    dao_id: string
    dao_name: string
  }
  redirect_link?: string
}

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
  redirect_link?: string
}

export type BountySubmissionNotificationMetaData = {
  member: IMember
  bounty: {
    bounty_id: string
    submission_id: string
  }
  submittedBy: {
    username: string
    member_id: string
  }
  redirect_link?: string
}

export type AccecptanceOfJobApplicantNotificationMetaData = {
  member: IMember
  job: {
    id: string
    title: string
    applied_on: string
    contributors: string[]
  }
  redirect_link?: string
}

// Forum
export type DiscussionCreatedNotificationMetaData = {
  member: IMember
  discussion: {
    title: string
    discussion_id: string
    created_by: string
  }
  redirect_link?: string
}

export type DiscussionInvitationNotificationMetaData = {
  member: IMember
  discussion: {
    title: string
    discussion_id: string
    created_by: string
  }
  redirect_link?: string
}

export type MostViewedDiscussionNotificationMetaData = {
  discussion: {
    title: string
    discussion_id: string
    created_by: string
  }
  redirect_link?: string
}

export type MostActiveParticipantToCreatorNotificationMetaData = {
  member: IMember
  discussion: {
    title: string
    discussion_id: string
    created_by: string
  }
  redirect_link?: string
}

export type MostLikedCommentNotificationMetaData = {
  discussion_id: string
  comment_id: string
  redirect_link?: string
}

// discovery
export type viewedProfileNotificationMetaData = {
  member: IMember
  viewer_id: string
  viewed_member_id: string
  redirect_link?: string
}

export type MostActiveNotificationMetaData = {
  most_active_type: string
  most_active_id: string
  redirect_link?: string
}

// chat
export type ChatRequestNotificationMetaData = {
  member: IMember
  redirect_link?: string
}

export type ChatRequestAcceptedNotificationMetaData = {
  member: IMember
  redirect_link?: string
}

export type MessageRecievedNotificationMetaData = {
  member: IMember
  redirect_link?: string
}

// contributor
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

export type ContributorCompleteProfileNotificationMetaData = {
  member: IMember
  contributors: IMember[]
  redirect_link?: string
}

// general
export type GenenralNotificationMetaData = {
  member: IMember
  redirect_link?: string
}

export type MeetingCreatedNotificationMetaData = {
  member: IMember
  meeting: {
    title?: string
    location: string
    meeting_id: string
    date: string
    from: string
    to: string
  }
  onView: {
    meeting_link: string
  }
  redirect_link?: string
}

export type DealFormResponseNotificationMetaData = {
  member: IMember
  response: {
    project_id: string
    title?: string
    form_id: string
    added_by: string
  }
  onView: {
    form_id: string
    project_id: string
    dao_id: string
  }
  redirect_link?: string
}

// dao
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

export type CompleteProfileNotificationMetaData = {
  member: IMember
  dao_admins: string[]
  redirect_link?: string
}
