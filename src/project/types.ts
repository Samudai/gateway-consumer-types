import { CommentType, ProjectType, Visibility } from './enums'

interface Metadata {
  [key: string]: string
}

export interface IMember {
  member_id: string
  username: string
  profile_picture?: string
}

export interface IExtras {
  [key: string]: any
}

export type Project = {
  project_id: string
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
  columns?: ProjectColumn[]

  github_repos?: string[]
  poc_member_id?: string
  discord_channel?: string
  captain?: string
  budget_amount?: number
  budget_currency?: string
  completed: boolean

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
  task_id: string
  project_id: string
  title: string
  description: string
  col: number
  created_by: string

  updated_by?: string

  poc_member_id?: string
  github_issue?: string
  notion_page?: string
  tags?: string[]
  deadline?: string
  assignee_member?: string[]
  assignee_clan?: string[]
  feedback?: string
  position: number
  payout_amount?: number
  payout_currency?: string

  files?: TaskFile[]
  subtasks?: SubTask[]
  comments?: Comment[]

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
  subtask_id: string
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

export type Pagination = {
  offset: number
  limit: number
}

export type ProjectColumn = {
  column_id: number
  name: string
}

//Responses

export type ProjectResponse = {
  project_id: string //id
  link_id: string //doa_id or member_id
  type: ProjectType // member, clan, dao
  title: string //title
  description: string
  visibility: Visibility //
  start_date?: string //
  end_date?: string //
  created_by: string // member info
  updated_by?: string
  default: boolean
  department: string
  columns?: ProjectColumn[]

  github_repos?: string[]
  poc_member_id?: string
  discord_channel?: string
  captain?: string

  budget_amount?: number
  budget_currency?: string

  completed: boolean

  manager?: IMember

  extras?: IExtras

  tasks?: Task[]

  created_at?: string
  updated_at?: string
}

export type TaskResponse = {
  task_id: string
  project_id: string
  title: string
  description: string
  col: number
  created_by: string

  updated_by?: string

  poc_member_id?: string
  github_issue?: string
  notion_page?: string
  tags?: string[]
  deadline?: string
  assignee_member?: string[]
  assignee_clan?: string[]
  feedback?: string
  position: number
  payout_amount?: number
  payout_currency?: string

  assignees?: IMember[]

  files?: TaskFile[]
  subtasks?: SubTask[]
  comments?: Comment[]

  created_at?: string
  updated_at?: string
}
