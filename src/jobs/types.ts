import {
  ApplicantStatusType,
  JobFormat,
  JobStatus,
  JobType,
  OpportunityOpenTo,
  Visibility,
  JobPayoutStatus
} from './enums'

interface Questions {
  [key: number]: string
}

interface Answers {
  [key: number]: any
}

interface Metadata {
  [key: string]: any
}

export type Opportunity = {
  job_id: string
  dao_id: string
  type: JobType
  title: string
  description: string
  description_raw: string
  created_by: string
  visibility: Visibility
  status: JobStatus
  req_people_count: number

  start_date?: string
  end_date?: string
  payout?: JobPayout[]
  project_id?: string
  task_id?: string
  subtask_id?: string
  github?: string
  poc_member_id?: string
  questions?: Questions
  captain: boolean
  department?: string

  skills: string[]
  tags: string[]
  experience: number
  open_to: OpportunityOpenTo[]
  job_format: JobFormat

  created_at?: string
  updated_at?: string
}

export type Applicant = {
  applicant_id: string
  job_id: string
  member_id: string
  clan_id: string
  answers: Answers
  status: ApplicantStatusType
  applicant: string
  updated_by?: string

  created_at?: string
  updated_at?: string
}

export type JobFilter = {
  dao_ids?: string[]
  tags?: string[]
  skills?: string[]

  payout_amount?: {
    min: number
    max: number
  }
}

export type JobFile = {
  job_file_id: string
  job_id: string
  name: string
  url: string
  metadata?: Metadata

  created_at?: string
  updated_at?: string
}

//Bounty

export type Bounty = {
  bounty_id: string
  dao_id: string
  project_id?: string
  title: string
  description?: string
  description_raw?: string
  winner_count: number
  created_by: string
  visibility: Visibility
  status: JobStatus

  task_id: string
  subtask_id: string
  
  start_date?: string
  end_date?: string
  payout?: JobPayout[]
  req_people_count?: number
  poc_member_id?: string

  department?: string
  tags?: string[]
  skills?: string[]

  updated_by?: string

  created_at?: string
  updated_at?: string
}

export type Submission = {
  submission_id: string
  bounty_id: string
  member_id?: string
  clan_id?: string
  submission: string
  file: string
  status: ApplicantStatusType
  rank: number
  feedback: string

  created_at?: string
  updated_at?: string
}

export type BountyFilter = {
  dao_ids?: string[]
  tags?: string[]
  skills?: string[]
  payout_amount?: {
    min: number
    max: number
  }
}

export type BountyFile = {
  bounty_file_id: string
  bounty_id: string
  name: string
  url: string
  metadata?: Metadata

  created_at?: string
  updated_at?: string
}

export type FavouriteJob = {
  favourite_id: string
  job_id: string
  member_id: string

  created_at?: string
}

export type JobPayout = {
  payout_id: string
  name: string
  link_type: string
  link_id: string
  provider_id: string
  receiver_address?: string
  payout_amount: number
  payout_currency: string
  token_address?: string
  completed: boolean
  provider_exists?: boolean
  status: JobPayoutStatus
}
