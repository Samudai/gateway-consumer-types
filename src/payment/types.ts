import { PayoutCurrency } from '../jobs/types'
import { IMember } from '../project/interfaces'
import { ProviderType } from './enums'

export type Payment = {
  dao_id: string
  payment_id: string
  sender: string
  receiver: string
  value: [
    {
      amount: string
      currency: PayoutCurrency
      contract_address: string
    }
  ]
  task_id: string
  job_id?: string
  bounty_id?: string
  safe_transaction_hash: string
  initiated_at: string
  completed_at: string
  payment_type: string
  created_by: string
  status: string
  chain_id: number
  payout_id?: string
  link_type?: string
  type?: string
  updated_by: string

  approver?: IMember

  created_at: string
  updated_at: string
}

// export type Payment = {
//     id?: number;
//     payment_id?: string;
//     sender: string; //Safe Address
//     receiver: string; //Receiver
//     dao: string;
//     amount: string;
//     currency: string;
//     task_id?: string;
//     transaction_hash: string;
//     payment_type: ProviderType;
//     initiated_at: string;
//     completed_at?: string;
//     created_by: string;
//     status: PaymentStatus;
//     chain_id: number;

//     created_at?: string;
//     updated_at?: string;
// };

export type Provider = {
  provider_id: string
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
