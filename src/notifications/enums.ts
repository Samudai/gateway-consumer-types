export enum NotificationType {
  Actionable = 0,
  Alert = 1,
  Information = 2,
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
}

export enum NotificationScope {
  PAYMENT = 0,
  REVIEWS = 1,
}

export enum SocketEventsToService {
  'CONNECTION' = 'connection',
  'DAO_CHANGE' = 'dao_change',
  'PAYMENT_CREATED_NOTIFICATION' = 'payment_created_notification',
  'CONTRIBUTOR_PAYMENT_RECEIVED' = 'contributor_payment_received',
  'JOB_APPLICANT_SUBMITTED' = 'job_applicant_submitted',
  'BOUNTY_SUBMISSION' = 'bounty_submission',
  'TASK_REVIEW' = 'task_review',
  'ADDED_TO_PROJECT' = 'added_to_project',
  'ADDED_TO_TASK' = 'added_to_task',
  'MEETING_CREATED' = 'meeting_created',
  'SOCIAL_CONNECTION' = 'social_connection',
  'COLLLABORATION_REQUEST' = 'collaboration_request',
  'DEAL_FORM_RESPONSE' = 'deal_form_response',
  'DISCONNECT' = 'disconnect',
}

export enum SocketEventsFromService {
  'MEMBER_CONNECTED' = 'memberConnected',
  'PAYMENT_NOTIFICATION' = 'payment_notification',
  'REVIEW_NOTIFICATION' = 'review_notification',
}
