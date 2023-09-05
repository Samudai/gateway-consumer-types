import { PaymentEnums } from '..'
import { PayoutCurrency } from '../jobs/types'
import { Auth, TxData } from '../parcel/types'
import { Provider } from './types'

export interface providerResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data?: {
    message: string
    data: Provider[]
  }
}

export interface IChainList {
  id: number
  network: string
  name: string
  chain_id: number
  type: string
  currency: string
  value: string
}

export interface IChainListResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data?: IChainList[]
}

export interface addProviderRequest {
  provider: {
    dao_id: string
    provider_type: string
    address: string
    created_by: string
    chain_id: number
    is_default: boolean
    name: string
  }
}

export interface addProviderResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data?: {
    id: string
    provider_id: string
    dao_id: string
    provider_type: string
    address: string
    created_by: string
    created_at: string
    updated_at: string | null
    chain_id: number
    is_default: boolean
  }
}

export interface getPaymentBYDaoResponse {
  message: string
  error?: {
    message: string
    error: string
  }

  data?: daoPaymentObject[]
}

export interface getPendingPaymentBYDaoResponse {
  message: string
  error?: {
    message: string
    error: string
  }

  data?: awaitingPaymentObject[]
}

export interface daoPaymentObject {
  id: string
  payment_id: string
  sender: string
  receiver: string
  dao: string
  amount: string
  value: {
    amount: string
    currency: string
    contract_address: string
    logo: string
    name: string
  }
  currency: string
  task_id: string
  transaction_hash: string
  initiated_at: string
  completed_at: string | null
  created_at: string
  updated_at: string | null
  payment_type: string
  created_by: string
  status: string
  chain_id: number
}

export interface awaitingPaymentObject {
  payout_id: string
  dao_id: string
  link_type: string
  link_id: string
  project_id: string
  member_id: string
  provider_id: string
  receiver_address: string
  payout_amount: string
  payout_currency: string
  token_address: string
  payment_created: boolean
  completed: boolean
}

export interface addPaymentsRequest {
  payment: {
    sender: string
    sender_safe_owner: string[]
    receiver: string
    dao_id: string
    value: {
      amount: string
      currency: PayoutCurrency
      contract_address: string
    }
    task_id?: string
    job_id?: string
    bounty_id?: string
    safe_transaction_hash: string
    payment_type: string
    initiated_at: string
    created_by: string
    status: string
    chain_id: number
    payout_id?: string
    link_type?: string
    type?: string
  }
  reward?: any
}

export interface addPaymentsResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data: {
    data: paymentResObj
  }
}

interface paymentResObj {
  id: string
  payment_id: string
  sender: string
  receiver: string
  dao: string
  amount: string
  currency: string
  task_id: string
  transaction_hash: string
  initiated_at: string
  completed_at: string | null
  created_at: string
  updated_at: string | null
  payment_type: string
  created_by: string
  status: string
}

export interface parcelBalanceRequest {
  auth: Auth
  chainId: number
  safeAddress: string
}

// export interface parcelBalanceResponse {
//   message: string
//   error?: {
//     message: string
//     error: string
//   }
//   data?: {
//     balances: GnosisTypes.SafeBalanceUsdResponse[]
//     count: number
//   }
// }

export interface createParcelTransactionRequest {
  auth: Auth
  chainId: number
  safeAddress: string
  txData: TxData
}

export interface createParcelTransactionResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data?: {
    result: {
      status: string
      proposalId: string
    }
  }
}

export interface updatePaymentStatusRequest {
  paymentId: string
  completedAt: string
  updatedAt: string
  status: PaymentEnums.PaymentStatus
}

export interface updatePaymentStatusResponse {
  message: string
  error?: {
    message: string
    error: string
  }
  data?: any
}

export interface updateProviderRequest {
  provider: {
    name: string
    id: number
    address: string
    updated_at: string
    chain_id: number
    is_default: boolean
  }
}

export interface getParcelSafesRequest {
  auth: {
    walletAddress: string
    signature: string
    auth_msg: string
  }
  chainId: number
}
export interface getParcelSafesResponse {
  data?: {
    count: number
    safes: {
      safeAddress: string
    }[]
  }
}

export interface updateStatusReq {
  paymentId: string
  completedAt: string
  updatedAt: string
  status: string
}

export interface IPaymentProvider {
  id: string
  icon: string
  name: string
  address: string
}

export interface IPaymentWallet {
  id: string
  icon: string
  name: string
  address: string
}

export interface IPaymentCurrency {
  // id: string;
  currency: string
  symbol?: string
  balance: string
  token_address: string
  name: string
  decimal: number
  logo_uri: string
}

export interface IPayment {
  id: string
  user: {
    id: string
    name: string
  }
  provider: IPaymentProvider
  amount: number
  currency: IPaymentCurrency
  status: string
  updated_at: string
  created_at: string
}
