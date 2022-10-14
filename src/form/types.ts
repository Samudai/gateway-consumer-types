import { FormType, QuestionType } from './enums'

export type Form = {
  form_id: string
  dao_id: string
  type: FormType
  questions: Question[]
}

export type Question = {
  question_id: string
  question: string
  type: QuestionType
  select: string[]
}

export type FormResponse = {
  response_id: string
  form_id: string
  member_id: string
  question: string
  type: QuestionType
  select: string[]
  answer: string
}
