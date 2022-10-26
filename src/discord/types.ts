export type EventData = {
  id: string
  guild_id: string
  channel_id: string | null
  creator_id: string | null
  name: string
  description: string | null
  scheduled_start_timestamp: string | null
  scheduled_end_timestamp: string | null
  privacy_level: number
  status: number | null
  entity_type: number | null
  entity_id: string | null
  user_count: number | null
  creator: UserData | null
  entity_metadata: {
    location: string | null
  } | null
  image: string | null
  users?: UserData[]
}

export type UserData = {
  id: string
  bot: boolean | undefined
  username: string | undefined
  discriminator: string | undefined
  avatar: string | null | undefined
  created_at: string
}
