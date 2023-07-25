export enum JobType {
  PROJECT = 'project',
  TASK = 'task',
}

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export enum JobStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  DRAFT = 'draft',
  ARCHIVED = 'archived'
}

export enum ApplicantType {
  MEMBER = 'member',
  CLAN = 'clan',
}

export enum ApplicantStatusType {
  APPLIED = 'applied',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum OpportunityOpenTo {
  DAOs = 'DAOs',
  DAO_MEMBERS = 'DAO Members',
  CAPTAINS = 'Captains',
  CONTRIBUTORS = 'Contributors',
}

export enum JobFormat {
  FULL_TIME = 'Full Time',
  REMOTE = 'Remote',
  FREELANCE = 'Freelance',
}

export enum JobPayoutLinkType {
  TASK = 'task',
  BOUNTY = 'bounty'
}

export enum JobPayoutStatus { 
  UNASSIGNED = 'unassigned',
  MPT = 'moved_to_project',
  COMPLETED = 'completed'
}
