export type Project = {
  project_id: string
  title: string
  description: string | null
  visibility: string
  poc_member_id: string
  github: string | null
  deadline: string | null
  created_by: string
  updated_by: string
  discord_channel: string | null
  dao_id: string
  guild_id: string
  discord_id: string
}

export type Task = {
  task_id: string
  title: string
  description: string | null
  status: string
  project_id: string
  poc_member_id: string
  github: string | null
  tags: string[]
  deadline: string | null
  created_by: string
  updated_by: string
  assignee: string[]
}

export type SubTask = {
  subtask_id: string
  title: string
  completed: boolean
  task_id: string
}
