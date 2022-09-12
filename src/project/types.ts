import { CommentType, ProjectType, TaskStatus, Visibility } from './enums'

interface Metadata {
  [key: string]: string
}

export type Project = {
  project_id?: string
  link_id: string
  type: ProjectType
  title: string
  description: string
  visibility: Visibility
  start_date?: string
  end_date?: string
  created_by: string
  updated_by?: string
  default: boolean
  department: string

  github_repos?: string[]
  poc_member_id?: string
  discord_channel?: string
  captain?: string

  created_at?: string
  updated_at?: string
}

export type ProjectFile = {
  project_file_id: string
  project_id: string
  name: string
  url: string
  metadata: Metadata

  created_at?: string
  updated_at?: string
}

export type Task = {
  task_id?: string
  project_id: string
  title: string
  description: string
  status: TaskStatus
  created_by: string
  position: number

  updated_by?: string
  poc_member_id?: string
  github_issue?: string
  tags?: string[]
  deadline?: string
  assignee_member?: string[]
  assignee_clan?: string[]
  feedback?: string

  notion_page?: string
  notion_property?: string

  created_at?: string
  updated_at?: string
}

export type TaskFile = {
  task_file_id: string
  task_id: string
  name: string
  url: string
  metadata: Metadata

  created_at?: string
  updated_at?: string
}

export type SubTask = {
  subtask_id?: string
  task_id: string
  title: string
  completed: boolean

  created_at?: string
  updated_at?: string
}

export type Comment = {
  id: string
  link_id: string
  body: string
  author: string
  type: CommentType

  tagged_members?: string[]

  created_at?: string
  updated_at?: string
}

export type TaskAssign = {
  type: string
  task_id: string
  assignee_member?: string[]
  assignee_clan?: string[]
  updated_by: string
}

export type DAODetail = {
  dao_id: string
  roles: string[]
}
