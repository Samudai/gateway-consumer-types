import { IMember } from './interfaces'
import { PaymentStatus, ProviderType } from './enums'

export type Payment = {
  dao_id: string
  payment_id: string
  sender: string
  receiver: string
  value: [
    {
      amount: string
      currency: string
      contract_address: string
    }
  ]
  task_id: string
  transaction_hash: string
  initiated_at: string
  completed_at: string
  payment_type: string
  created_by: string
  status: PaymentStatus
  chain_id: number
  updated_by: string

  approver?: IMember

  created_at: string
  updated_at: string
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
