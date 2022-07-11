export type Opportunity = {
  job_id: string
  name: string
  description: string | null
  dao_id: string
  guild_id: string
  task_id: string
  poc_member_id: string
  status: string
  start_date: string
  end_date: string
  skills: string[]
  tags: string[]
  job_profile: string[]

  created_at: string
  updated_at: string

  bounty_amount: number
  bounty_currency: string
}

export type Applicant = {
  applicant_id: string
  job_id: string
  member_id: string
  message: string
  status: string

  created_at: string
  updated_at: string
}

export type Skill = {
  skill_id: string
  name: string
}

export type Tag = {
  tag_id: string
  name: string
}

export type JobPofile = {
  profile_id: string
  profile: string
}
