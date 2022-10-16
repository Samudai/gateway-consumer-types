import { FormType, QuestionType } from './enums'

export type Form = {
  form_id: string
  dao_id: string
  type: FormType
  questions: Question[]
}

export type Question = {
  question: string
  type: QuestionType
  select: string[]
}

export type FormResponse = {
  response_id: string
  form_id: string
  wallet: string
  question: string
  type: QuestionType
  select: string[]
  answer: string
  attachment: string
}
