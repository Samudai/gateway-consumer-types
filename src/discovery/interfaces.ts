import {
  DAOView,
  FavouriteDAOResponse,
  IUser,
  MemberResponse,
  MostActiveResponse,
  MostViewedResponse,
} from '..'

export interface DiscoveryDaoResp {
  message: string
  error?: any
  data?: {
    daos: DAOView[]
  }
}
export interface DiscoveryMemberResp {
  message: string
  error?: any
  data?: MemberResponse[]
}

export interface FavDAOReq {
  favouriteDAO: {
    dao_id: string
    member_id: string
  }
}

export interface FavouriteDaoRes {
  message: string
  error?: any
  data?: { favourite_list: FavouriteDAOResponse[] }
}

export interface getMostActiveResponse {
  message: string
  error?: any
  data?: MostActiveResponse
}

export interface getMostViewedResponse {
  message: string
  error?: any
  data?: MostViewedResponse
}

export interface DiscoveryViewRequest {
  newView: {
    type: 'dao' | 'contributor'
    link_id: string
  }
}

export interface getAllSkillsResponse {
  message: string
  error?: any
  data?: {
    skills: string[]
  }
}

export interface getAllDomainTagsResponse {
  message: string
  error?: any
  data?: {
    domainTags: string[]
  }
}

export interface getAllTagsResponse {
  message: string
  error?: any
  data?: {
    tags: string[]
  }
}

export interface DiscoveryTags {
  mostViewedDAO: DAOView[]
  mostActiveDAO: DAOView[]
  mostViewedContributor: MemberResponse[]
  mostActiveContributor: MemberResponse[]
}

export interface getDiscoveryTagsResponse {
  message: string
  error?: any
  data?: DiscoveryTags
}

export interface getBulkDiscoveryDaoRequest {
  daoIds: string[]
  memberId: string
}

export interface getBulkDiscoveryDaoResponse {
  message: string
  error?: any
  data?: {
    data: DAOView[]
  }
}

export interface getBulkDiscoveryMemberRequest {
  memberIds: string[]
  memberId: string
}

export interface getBulkDiscoveryMemberResponse {
  message: string
  error?: any
  data?: {
    data: MemberResponse[]
  }
}

export interface DiscoveryUser {
  id: string
  user: IUser
  dao_id: string
  team_size: number
  open_bounties: number
  projects_ongoing: number
  bounty_earned: number
  tasks_ongoing?: number
}

export interface IVerifiableCredential {
  issuanceDate: string
  badges: [
    {
      provider: string //DAO Name
      badgePhoto: string
      credential: {
        type: ['VerifiableCredential']
        proof: {
          jws: string
          created: string //Timestamp
          proofPurpose: 'assertionMethod'
        }
        issuer: 'Samudai'
        '@context': ['https://www.w3.org/2018/credentials/v1']
        issuanceDate: string //DATE
        credentialSubject: {
          task: string
          project: string
          bounty: string
          Clan: string //empty
          skill: string[] //tags
          timeSpent: string //''
          '@context': [
            {
              hash: 'https://schema.org/Text'
              provider: 'https://schema.org/Text'
            }
          ]
        }
      }
    }
  ]
}
