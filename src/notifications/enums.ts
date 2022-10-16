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
