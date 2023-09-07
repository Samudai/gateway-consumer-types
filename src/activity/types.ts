import { ActionType, Visibility } from './enums'

export type Activity = {
  dao_id: string
  member_id: string
  project_id?: string
  task_id?: string
  subtask_id?: string
  discussion_id?: string
  job_id?: string
  payment_id?: string
  bounty_id?: string
  action_type: ActionType
  visibility: Visibility
  member: {
    username: string
    profile_picture: string
  }
  dao: {
    dao_name: string
    profile_picture: string
  }
  project?: {
    project_name: string
  }
  task?: {
    task_name: string
  }
  subtask?: {
    subtask_name: string
  }
  action: {
    message: string
  }
  metadata?: {
    [key: string]: any
  }
  timestamp_property: any
}

export type Feedback = {
  member_id: string
  type_of_member: string
  feedback: string
}
