import { FormType, QuestionType } from './enums'

export type Form = {
  form_id: string
  dao_id: string
  name: string
  type: FormType
  questions: Question[]
  created_by: string
  updated_by?: string

  created_at?: string
  updated_at?: string
}

export type Question = {
  question: string
  type: QuestionType
  select: string[]
  required: boolean
  description?: string
}

export type FormResponse = {
  response_id: string
  form_id: string
  wallet: string
  responses: Response[]
  metadata?: SupportData
  created_at?: string
}

export type Response = {
  question: string
  type: QuestionType
  select: string[]
  answer: string[]
  attachment: string
}

export type SupportData = {
  member_id: string
  user_agent: string
}
