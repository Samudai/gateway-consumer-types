import { DiscussionCategory, MessageType } from './enums'

export type Discussion = {
  discussion_id: string
  dao_id: string
  topic: string
  closed: boolean
  category: DiscussionCategory
  category_id?: string

  description?: string
  created_by?: string
  updated_by?: string

  created_at?: string
  updated_at?: string
}

export type Participant = {
  id: string
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

  created_at?: string
  updated_at?: string
}
