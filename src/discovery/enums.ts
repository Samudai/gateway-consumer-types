export enum DAOEventType {
  PROJECT_CREATED = 'project_created',
  PROJECT_COMPLETED = 'project_completed',
  PROJECT_DELETED = 'project_deleted',
}

export enum DAOEventContext {
  PROJECT = 'project',
}

export enum MemberEventType {
  TASK_CREATED = 'task_created',
  TASK_ASSIGNED = 'task_assigned',
  TASK_UNASSIGNED = 'task_unassigned',
  TASK_COMPLETED = 'task_completed',
  TASK_DELETED = 'task_deleted',

  VERIFY_CREDS_CREATED = 'verifyable_creds_created',
  VERIFY_CREDS_UPDATED = 'verifyable_creds_updated',
}

export enum MemberEventContext {
  TASK = 'task',
  VERIFY_CREDS = 'verify_creds',
}

export enum TagsType {
  DAO = 'dao',
  CONTRIBUTOR = 'contributor'
}