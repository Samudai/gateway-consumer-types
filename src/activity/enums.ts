export enum Context {
  DAO = 'DAO',
  PROJECT = 'PROJECT',
  TASK = 'TASK',
  JOB = 'JOB',
  USER = 'USER',
}

export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export enum ActionType {
  PROJECT_CREATED = 'projectCreated',
  PROJECT_UPDATED = 'projectUpdated',
  PROJECT_ACCESS_UPDATED = 'projectAccessUpdated',
  TASK_CREATED = 'taskCreated',
  TASK_UPDATED = 'taskUpdated',
  TASK_IN_REVIEW = 'taskInReview',
  TASK_COMPLETED = 'taskCompleted',
  SUBTASK_CREATED = 'subtaskCreated',
  SUBTASK_UPDATED = 'subtaskUpdated',
  SUBTASK_IN_REVIEW = 'subtaskInReview',
  SUBTASK_COMPLETED = 'subtaskCompleted',
  CONTRIBUTOR_ADDED_TO_TASK = 'contributorAddedToTask',
  CONTRIBUTOR_ADDED_TO_PROJECT = 'contributorAddedToProject',
  REVIEW_ADDED = 'reviewAdded',
  SNAPSHOT_ADDED = 'snapshotAdded',
  SNAPSHOT_UPDATED = 'snapshotUpdated',
  ABOUT_ADDED = 'aboutAdded',
  GITHUB_ADDED = 'githubAdded',
  GITHUB_UPDATED = 'githubUpdated',
  GCAL_ADDED = 'gcalAdded',
  GCAL_UPDATED = 'gcalUpdated',
  GCAL_EVENT_CREATED = 'gcalEventCreated',
  TWITTER_ADDED = 'twitterAdded',
  TWITTER_UPDATED = 'twitterUpdated',
  BLOG_ADDED = 'blogAdded',
  BLOG_UPDATED = 'blogUpdated',
  DISCUSSION_ADDED = 'discussionAdded',
  DISCUSSION_UPDATED = 'discussionUpdated',
  DAO_ACCESS_UPDATED = 'daoAccessUpdated',
  ACCESS_UPDATED = 'accessUpdated',
  PROJECT_COMMON_ACCESS_UPDATED = 'projectCommonAccessUpdated',
  TASK_COMMON_ACCESS_UPDATED = 'taskCommonAccessUpdated',
  VIEW_COMMON_ACCESS_UPDATED = 'viewCommonAccessUpdated',
  CONNECTION_SENT = 'connectionSent',
  CONNECTION_ACCEPTED = 'connectionAccepted',
  CONNECTION_REJECTED = 'connectionRejected',
  VIEW_CREATED = 'viewCreated',
  VIEW_RENAMED = 'viewRenamed',
  VIEW_DELETED = 'viewDeleted',
}

export enum NewDAOItems {
  SETUP_DAO_PROFILE = 'setup_dao_profile',
  COMPLETE_INTEGRATIONS = 'complete_integrations',
  CREATE_A_PROJECT = 'create_a_project',
  CLAIM_SUBDOMAIN = 'claim_subdomain',
  CONNECT_DISCORD = 'connect_discord',
  CONNECT_SAFE = 'connect_safe',
  CONNECT_SNAPSHOT = 'connect_snapshot',
  // COMPLETE_PROFILE = 'complete_profile',
  // EXPLORE_DASHBOARD = 'explore_dashboard',
  // INVITE_MEMBERS = 'invite_members',
  // START_NEW_PROJECT = 'start_new_project',
  // POST_A_JOB = 'post_a_job',
  // COLLABORATION_PASS_CLAIM = 'collaboration_pass_claim',
}

export enum NewContributorItems {
  OPEN_TO_WORK = 'open_to_work',
  ADD_TECHSTACK = 'add_techstack',
  FEATURED_PROJECTS = 'featured_projects',
  ADD_HOURLY_RATE = 'add_hourly_rate',
  ACCEPT_PENDING_REQUESTS = 'accept_pending_requests',
  CONNECT_TELEGRAM = 'connect_telegram',
  CLAIM_SUBDOMAIN = 'claim_subdomain',
  CLAIM_NFT = 'claim_nft',
  CONNECT_DISCORD = 'connect_discord',
  // COMPLETE_PROFILE = 'complete_profile',
  // INVITE_MEMBERS = 'invite_members',
  // CONNECT_WITH_CONTRIBUTORS = 'connect_with_contributors',
  // APPLY_FOR_JOB = 'apply_for_job',
  // NFT_CLAIM = 'nft_claim',
}

export enum DAOItems {
  COMPLETE_PROFILE = 'complete_profile',
  EXPLORE_DASHBOARD = 'explore_dashboard',
  INVITE_MEMBERS = 'invite_members',
  START_NEW_PROJECT = 'start_new_project',
  POST_A_JOB = 'post_a_job',
  COLLABORATION_PASS_CLAIM = 'collaboration_pass_claim',
}

export enum ContributorItems {
  COMPLETE_PROFILE = 'complete_profile',
  INVITE_MEMBERS = 'invite_members',
  CONNECT_WITH_CONTRIBUTORS = 'connect_with_contributors',
  APPLY_FOR_JOB = 'apply_for_job',
  NFT_CLAIM = 'nft_claim',
}
