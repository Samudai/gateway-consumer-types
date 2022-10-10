export type GuildData = {
  id: string
  name: string
  icon: string | null
  available: boolean
  splash: string | null
  banner: string | null
  description: string | null
  member_count: number
  joined_at: string
  max_members: number | null
  owner_id: string
  features: string[]
}

export type GuildMemberData = {
  id: string
  bot: boolean
  username: string
  discriminator: string
  avatar: string | null
  guild_id: string
  joined_at: string
  nickname: string | null
  roles: string[]
}

export type RoleData = {
  id: string
  guild_id: string
  name: string
  color: number
  hoist: boolean
  raw_position: number
  permissions: string
  position: number
  managed: boolean
  mentionable: boolean
  tags: {
    bot_id: string | undefined
    integration_id: string | undefined
    premium_subscriber_role: boolean | undefined
  } | null
}

export type UserData = {
  id: string
  bot: boolean | undefined
  username: string | undefined
  discriminator: string | undefined
  avatar: string | null | undefined
  created_at: string
}

export type EventData = {
  id: string
  guildId: string
  channelId: string | null
  creatorId: string | null
  name: string
  description: string | null
  scheduledStartTimestamp: number | null
  scheduledEndTimestamp: number | null
  privacyLevel: number
  status: number | null
  entityType: number | null
  entityId: string | null
  userCount: number | null
  creator: UserData | null
  entityMetadata: {
    location: string | null
  } | null
  image: string | null
  //subscribers: string[]
}
