export enum AccessType {
  HIDDEN = 'hidden',
  VIEW = 'view',
  MANAGE_PROJECT = 'manage_project',
  MANAGE_DAO = 'manage_dao',
  MANAGE_PAYMENT = 'manage_payment',
  MANAGE_JOB = 'manage_job',
  MANAGE_FORUM = 'manage_forum',
}

export enum ProjectAccessType {
  HIDDEN = 'hidden',
  VIEW = 'view',
  CREATE_TASK = 'create_task',
  MANAGE_PROJECT = 'manage_project',
  MANAGE_DAO = 'manage_dao',
}

export enum AccessLevels {
  hidden = 0,
  view = 1,
  create_task = 2,
  manage_payment = 3,
  manage_job = 3,
  manage_forum = 3,
  manage_project = 3,
  manage_dao = 4,
}