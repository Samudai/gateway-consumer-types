export type AccessRole = {
  guild_id: string
  discord_role_id: string
  role_name: string
  admin: boolean
  view_access: boolean
  raw_position: number
  permission: string
  created_at: string
  updated_at: string
  //access: string[] | null,
}

export type ProjectAccess = {
  project_id: string
  todo: string[]
  in_review: string[]
  done: string[]
  created_at: string
  updated_at: string
}
