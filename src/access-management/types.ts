import { AccessType } from './enums'

export type ProjectAccess = {
  id?: string
  project_id: string
  access: AccessType
  members: string[]
  roles: string[]

  created_at?: string
  updated_at?: string
}

export type DAOAccess = {
  id: string
  dao_id: string
  access: AccessType
  members: string[]
  roles: string[]

  created_at?: string
  updated_at?: string
}

export type AccessResponse = {
  manage_dao: boolean
  view: boolean
  create_task: boolean
  manage_project: boolean
}
