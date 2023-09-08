import { IMember } from '../project/interfaces'
import { DiscussionCategory, MessageType, Visibility} from './enums'


export type Discussion = {
  discussion_id?: string
  dao_id: string
  topic: string
  closed: boolean
  category: DiscussionCategory
  category_id?: string

  description?: string
  description_raw?: string
  created_by?: string
  updated_by?: string
  views?: number

  proposal_id?: string
  tags?: string[]
  pinned?: boolean
  visibility: Visibility
  last_comment_at?: string
  created_at?: string
  updated_at?: string
}

export type Participant = {
  id: number
  discussion_id: string
  member_id: string

  created_at?: string
}

export type Message = {
  message_id: string
  discussion_id: string
  type: MessageType

  content?: string
  sender_id: string
  attachment_link?: string
  metadata?: any
  edited?: boolean
  parent_id?: string

  created_at?: string
  updated_at?: string
}

export type MessageResponse = {
  message_id: string
  discussion_id: string
  type: MessageType

  content?: string
  sender_id: string
  attachment_link?: string
  metadata?: any

  sender?: IMember
  edited?: boolean
  parent_message?: ParentMessage

  created_at?: string
  updated_at?: string
}

export type ParentMessage = {
  message_id: string
  discussion_id: string
  type: MessageType

  content?: string
  sender: IMember
  attachment_link?: string
  metadata?: any
  parent_id?: string
}

export type DiscussionResponse = {
  discussion_id: string
  dao_id: string
  topic: string
  closed: boolean
  description?: string
  description_raw?: string

  proposal_id?: string

  category: DiscussionCategory
  category_id: string
  closed_on: string

  updated_by: string

  created_at: string
  updated_at: string
  views?: number

  tags?: string[]
  pinned?: boolean
  visibility: Visibility
  last_comment_at?: string

  created_by: IMember

  participants: IMember[]
  messages: MessageResponse[]
  message_count: number

  opted_in?: boolean
}

export type UpdateBookmark = {
  discussion_id: string
  pinned: boolean
  updated_by: string
}

export type BulkParticipantRequest = {
  discussion_id: string
  participants: string[]
}
