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
