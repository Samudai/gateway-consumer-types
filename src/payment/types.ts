import { PaymentStatus, ProviderType } from './enums'
import { IMember } from './interfaces'

export type Payment = {
  id?: number
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
  chain_id: number
  approver?: IMember

  created_at?: string
  updated_at?: string
}

export type Provider = {
  id?: number
  dao_id: string
  name: string
  provider_type: ProviderType
  address: string
  chain_id: number
  is_default: boolean
  created_by: string
  created_at?: string
  updated_at?: string
}
