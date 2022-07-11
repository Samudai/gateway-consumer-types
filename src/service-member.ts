export type Member = {
  name: string | null
  phone: string | null
  email: string
  about: string | null
  skills: string[] | null
  wallet_address: string
  profile_picture: string | null
  discord: Discord
}

export type Discord = {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: string | null
  banner_color: string | null
  accent_color: string | null
  locale: string
  mfa_enabled: boolean
  email: string
  verified: boolean
}

export type Roles = {
  guild_id: string
  role_id: string
  role_name: string
  admin: boolean
  view_access: boolean
}
