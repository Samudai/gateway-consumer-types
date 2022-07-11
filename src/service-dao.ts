export type DAO = {
  dao_id: string
  name: string
  guild_id: string
  about: string
  profile_picture: string
  contract_address: string
  wallet_address: string
  onwer_id: string
  created_at: string
  updated_at: string
}

export type DAOMember = {
  dao_id: string
  member_id: string
  dao_roles: string[]
  created_at: string
  updated_at: string
}

export type DAORole = {
  dao_id: string
  role_id: string
  role: string
}

export type DAOPartner = {
  dao_id: string
  dao_partner_id: string
  name: string
  logo: string
  website: string
  email: string
  phone: string

  created_at: string
  updated_at: string
}

export type DAOSocial = {
  dao_id: string
  type: string
  url: string
  created_at: string
  updated_at: string
}

export type DAOPartnerSocial = {
  dao_partner_id: string
  type: string
  url: string
  created_at: string
  updated_at: string
}
