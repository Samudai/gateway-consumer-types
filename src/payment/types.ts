import { PaymentStatus, ProviderType } from './enums'

export interface IMember {
  member_id: string
  username: string
}

export type Payment = {
  id?: string
  payment_id?: string
  sender: string //Safe Address
  receiver: string //Receiver
  dao: string
  amount: string
  currency: string
  task_id?: string
  transaction_hash: string
  payment_type: ProviderType
  initiated_at: string
  completed_at?: string
  created_by: string
  status: PaymentStatus
  approver?: IMember

  created_at?: string
  updated_at?: string
}

export type Provider = {
  id?: string
  dao_id: string
  name: string
  provider_type: ProviderType
  address: string
  chain_id: number
  default: boolean
  created_by: string
  created_at?: string
  updated_at?: string
}
