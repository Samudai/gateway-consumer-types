import { IUser } from '../user-profile/interfaces'
import { DiscussionResponse, Message } from './types'

export interface creatDiscussionRequest {
  discussion: {
    discussion_id?: string
    dao_id: string
    topic: string
    description: string
    created_by?: string
    updated_by?: string
    category: string
    category_id?: string
    closed: boolean
    proposal_id?: string
  }
  participants: string[]
}

export interface getDiscussionResponse {
  message: string
  data: DiscussionResponse[]
  error?: string
}

export interface getTagsResponse {
  message: string
  data: string[]
  error?: string
}

export interface DiscussionData {
  discussion_id: string
  dao_id: string
  topic: string
  description: string
  created_by: string
  updated_by: string
  category: string
  category_id: string
  closed: boolean
  created_at: string
  updated_at: string
}

export interface getMessageResponse {
  message: string
  data: Message[]
  error?: string
}
export interface getDiscussionByMemberIdResponse {
  message: string
  data: DiscussionResponse[]
  error?: string
}

export interface discussionByProposalRes {
  message: string
  data: {
    discussion_id: string
    dao_id: string
  }
  error?: string
}

export interface createMessageReq {
  message: {
    discussion_id: string
    type: string
    content: string
    sender_id: string
    attachment_link: any
    metadata: any
  }
}

export interface addParticipantReq {
  participant: {
    discussion_id: string
    member_id: string
  }
}

export interface addParticipantBulkReq {
  participants: {
    discussion_id: string
    participants: string[]
  }
}

export interface archiveForumRequest {
  discussion_id: string
  closed: boolean
  updated_by: string
}

export interface bookmarkForumRequest {
  discussion: {
    discussion_id: string
    pinned: boolean
    updated_by: string
  }
}

export interface IDiscussion {
  id: string
  topic: string
  description: string
  participants: IUser[]
  author: IUser
  type: DiscussionType
  created_at: string
}

export enum DiscussionType {
  Project = 'Project',
  Proposal = 'Proposal',
  Community = 'Community',
}
