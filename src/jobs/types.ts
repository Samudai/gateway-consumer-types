import {
  ApplicantStatusType,
  JobFormat,
  JobStatus,
  JobType,
  OpportunityOpenTo,
  Visibility,
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
  created_by: string
  visibility: Visibility
  status: JobStatus
  req_people_count: number

  start_date?: string
  end_date?: string

  project_id?: string
  task_id?: string
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

  payout_amount: number
  payout_currency: string
}

export type Applicant = {
  applicant_id: string
  job_id: string
  member_id: string
  clan_id: string
  answers: Answers
  status: ApplicantStatusType
  applicant: string

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
  project_id: string
  title: string
  description: string
  payout_amount: number
  payout_currency: string
  winner_count: number
  created_by: string
  visibility: Visibility
  status: JobStatus

  start_date?: string
  end_date?: string

  req_people_count: number
  poc_member_id: string

  tags: string[]
  skills: string[]

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
