import { Context, Visibility } from './enums'

export type Activity = {
  member: {
    member_id: string
    username: string
    profile_picture: string
  }
  action: string
  timestamp: number
  context: Context
  access: string
  visibility: Visibility
}

export type MemberActivity = {
  action: string
  timestamp: number
  context: Context
  metadata: {
    [key: string]: string
  }
}
