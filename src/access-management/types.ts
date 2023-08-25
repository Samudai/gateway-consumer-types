import { IMember } from '../project/types'
import { AccessType, ProjectAccessType } from './enums'

export type ProjectAccess = {
  id?: string
  project_id: string
  access: AccessType
  members: string[]
  roles: string[]
  invite_link: string
  created_at?: string
  updated_at?: string
}

export type ProjectAccessResponse = {
  id?: string;
  project_id: string;
  access: ProjectAccessType;
  members: IMember[];
  roles: string[];
  invite_link: string;
  created_at?: string;
  updated_at?: string;
};

export type DAOAccess = {
  id: string
  dao_id: string
  access: AccessType
  members: string[]
  roles: string[]

  created_at?: string
  updated_at?: string
}

export type DAOAccessResponse = {
  id: string;
  dao_id: string;
  access: AccessType;
  members: IMember[];
  roles: string[];

  created_at?: string;
  updated_at?: string;
};

export type AccessResponse = {
  manage_dao: boolean
  view: boolean
  create_task: boolean
  manage_project: boolean
}
