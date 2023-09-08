import { GuildInfoResponse, MemberGuilds } from '../members/types'

export interface discordData {
  guildsInfo: GuildInfoResponse[]
  memberGuilds: MemberGuilds
}
