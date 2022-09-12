import { TaskStatus } from './enums'

export type PropertyValue = {
  name: string
  value: string
}

export type Property = {
  [key in TaskStatus]: PropertyValue
}

export type CreateNotionTaskParam = {
  member_id: string
  database_id: string
  dao_id: string
  project_id: string
  // department: string;
  property: Property
  notion_property: string
}

export type NotionDatabase = {
  id: string
  name: string
}
