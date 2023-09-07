import {
  DAOEventContext,
  DAOEventType,
  MemberEventContext,
  MemberEventType,
  TagsType,
} from './enums'

export type DiscoverDAOResponse = {
  dao_id: string
  name: string
  profile_picture?: string

  bounties_open?: number
  bounties_total?: number

  opportunities_open?: number
  opportunities_total?: number

  projects_ongoing: number
  projects_completed: number
}

export type DiscoverMemberResponse = {
  member_id: string
  username: string
  name: string
  profile_picture?: string
  skills: string[]

  badges_earned?: number

  tasks_ongoing?: number
  tasks_completed?: number
}

export type UniversalSearchResponse = {
  id: string
  name: string
  profile_picture: string
  username?: string
  type: string
}

export type DAOEvent = {
  dao_id: string
  event_type: DAOEventType
  event_context: DAOEventContext
}

export type MemberEvent = {
  member_id: string
  dao_id: string
  event_type: MemberEventType
  event_context: MemberEventContext
}

export type NewView = {
  type: TagsType
  link_id: string
}

export type MostActiveResponse = {
  _id: string
  type: TagsType
  link_id: string
  count: number
  timestamp_property: string
}

export type MostViewedResponse = {
  _id: string
  type: TagsType
  link_id: string
  views: number
  date: string
}
