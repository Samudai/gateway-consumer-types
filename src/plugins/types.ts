import { PluginType } from './enums'

export type PropertyValue = {
  field: string
  value: string
}

export type CreateNotionTaskParam = {
  member_id: string;
  database_id: string;
  dao_id: string;
  project_id: string;
  // department: string;
  property: PropertyValue[];
  notion_property: string;
};

export type NotionTaskResponse = {
  task_id: string;
  notion_page: string;
  notion_property: string;
};

export type NotionDatabase = {
  id: string
  name: string
}

export type Plugin = {
  pluginType: PluginType
  connected: boolean
  value?: string
}
