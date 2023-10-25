export enum NotificationType {
  HEADS_UP = 0,
  ACT_FAST = 1,
  TRACTION = 2,
  KUDOS = 3,
}

export enum NotificationStatus {
  Pending = 0,
  Read = 1,
  Seen = 2,
}

export enum NotificationCreatedby {
  MEMBER = 0,
  DAO = 1,
}

export enum NotificationFor {
  MEMBER = 0,
  ADMIN = 1,
  CAPTAIN = 2,
  ADMIN_MEMBER = 3,
}

export enum NotificationScope {
  HEADS_UP = 0,
  ACT_FAST = 1,
  TRACTION = 2,
  KUDOS = 3,
}

export enum SocketEventsToService {
  'CONNECTION' = 'connection',
  'DISCONNECT' = 'disconnect',
}

export enum SocketEventsToServiceGeneral {
  'DEAL_FORM_RESPONSE' = 'deal_form_response',
  'GENERAL_NOTIFICATION' = 'general_notification',
  'MEETING_CREATED' = 'meeting_created',
}

export enum SocketEventsToServiceChat {
  'CHAT_REQUESTED_NOTIFICATION' = 'chat_requested_notification',
  'CHAT_REQUEST_ACCEPT_NOTIFICATION' = 'chat_request_accepted_notification',
  'MESSAGE_RECIEVED_NOTIFICATION' = 'message_recieved_notification',
  'GROUP_MESSAGE_RECIEVED_NOTIFICATION' = 'group_message_received_notification',
  'GROUP_JOINING_REQUEST_NOTIFICATION' = 'group_joining_request_notification',
  'GROUP_JOINING_ACCEPTED_NOTIFICATION' = 'group_joining_accepted_notification',
}

export enum SocketEventsToServiceDiscovery {
  'PROFILE_VIEW_NOTIFICATION' = 'profile_view_notifications',
}

export enum SocketEventsToServiceForum {
  'DISCUSSION_CREATED' = 'discussion_created',
  'INVITED_TO_DISCUSSION' = 'invited_to_discussion',
  'NEW_PROPOSAL_DISCUSSION' = 'new_proposal_discussion',
  'ADDED_TO_DISCUSSION' = 'added_to_discussion',
  'MEMBER_JOINED' = 'member_joined',
  'MEMBER_LEFT' = 'member_left',
  'COMMENT_ADDED_ON_DISCUSSION' = 'comment_added_on_discussion',
  'MOST_LIKED_COMMENT' = 'most_liked_comment',
  'MOST_VIEWED_DISCUSSION' = 'most_viewed_discussion',
  'MOST_ACTIVE_PARTICIPANT' = 'most_active_participant',
  'MOST_ACTIVE_PARTICANT_TO_CREATOR' = 'most_active_participant_to_creator',
  'COLLECTED_COMMENTS_NOTIFICATION' = 'collected_comments_notification',
  'DISCUSSION_CLOSED' = 'discussion_closed',
  'REPLY_TO_COMMENT' = 'reply_to_comment',
  'TAGGED_IN_COMMENT' = 'tagged_in_comment',
  'ALL_TAGGED_IN_COMMENT' = 'all_tagged_in_comment',
}

export enum SocketEventsToServiceJob {
  'JOB_APPLICANT_SUBMITTED' = 'job_applicant_submitted',
  'BOUNTY_SUBMITTED' = 'bounty_submission',
  'JOB_APPLICANT_ACCEPTED' = 'job_applicant_accepted',
  'BOUNTY_REWARDED' = 'bounty_rewarded',
  'JOB_APPLICANT_REJECTED' = 'job_applicant_rejected',
  'BOUNTY_SUBMISSION_REJECTED' = 'bounty_submission_rejected',
}

export enum SocketEventsToServicePayment {
  'JOB_POSTED_NOTIFICATION' = 'job_posted_notification',
  'BOUNTY_POSTED_NOTIFICATION' = 'bounty_posted_notification',
  'PAYMENT_CREATED_NOTIFICATION' = 'payment_created_notification',
  'PAYMENT_CREATED_TO_CONTRIBUTOR_NOTIFICATION' = 'payment_created_to_contributor_notification',
  'CONTRIBUTOR_PAYMENT_RECEIVED' = 'contributor_payment_received',
  'PAYMENT_COMPLETED_NOTIFICATION' = 'payment_completed_notification',
  'PROVIDER_ADDED' = 'provider_added',
  'DEFAULT_PROVIDER_CHANGED' = 'default_provider_changed',
  'FIRST_SIGNING_PAYMENT' = 'first_signing_payment',
  'SIGNING_PAYMENT' = 'signing_payment',
  'EXECUTE_PAYMENT' = 'execute_payment',
  'INITIATE_PAYMENT' = 'initiate_payment',
}

export enum SocketEventsToServiceProject {
  'ADDED_TO_PROJECT' = 'added_to_project',
  'ADDED_TO_TASK' = 'added_to_task',
  'TASK_REVIEW' = 'task_review',
  'TASK_STATUS_CHANGED' = 'task_status_changed',
  'TASK_CREATED' = 'task_created',
  'TASK_DELETED' = 'task_deleted',
  'TASK_POSTED_AS_JOB_OR_BOUNTY' = 'task_posted_as_job_or_bounty',
  'PAYOUT_ASSIGNED_CONTRIBUTOR' = 'payout_assigned_contributor',
  'PAYOUT_ASSIGNED_DAO' = 'payout_assigned_dao',
  'KANBAN_BOARD_CHANGES' = 'kanban_board_changes',
  'TASK_STATUS_TO_COMPLETE' = 'task_status_to_completed',
  'COMMENT_TASK_ON_NOTIFICATION' = 'comment_on_task_notification',
  'ATTACHMENT_ADDED_TO_TASK' = 'attachment_added_to_task',
  'TASK_ASSIGNED_TO_CONTRIBUTOR' = 'task_assigned_to_contributor',
  'CONTRIBUTOR_REMOVED_FROM_TASK_CONTRIBUTOR' = 'contributor_removed_from_task_contributor',
  'CONTRIBUTOR_REMOVED_FROM_TASK_DAO' = 'contributor_removed_from_task_dao',
  'EDIT_IN_TASK' = 'edit_in_task',
  'REVIEW_NUDGE_CONTRIBUTOR' = 'review_nudge_contributor',
  'REVIEW_NUDGE_DAO' = 'review_nudge_dao',
}

export enum SocketEventsToServiceContributorProfile {
  'SOCIAL_CONNECTION_REQUEST' = 'social_connection_request',
  'CONNECTION_ACCEPTED_REQUEST' = 'connection_accepted_request',
  'CONTRIBUTOR_COMPLETE_PROFILE' = 'contributor_complete_profile',
  'CONTRIBUTOR_COMPlETE_PROFILE_TO_APPLY_JOB' = 'contributor_complete_profile_to_apply_job',
  'CONTRIBUTOR_SUBDOMAIN_CLAIMED_SUCCESS' = 'contributor_subdomain_claimed_success',
}

export enum SocketEventsToServiceDaoProfile {
  'COLLABORATION_REQUEST' = 'collaboration_request',
  'COMPLETE_PROFILE' = 'complete_profile',
}

export enum SocketEventsFromService {
  'MEMBER_CONNECTED' = 'memberConnected',
  'HEADS_UP' = 'heads_up',
  'ACT_FAST' = 'act_fast',
  'TRACTION' = 'traction',
  'KUDOS' = 'kudos',
}
