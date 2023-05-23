import { ClanRole, FetchMemberType, InviteStatus, RewardType } from './enums';

export interface MemberSocial {
    [key: string]: string;
}

// Member
export type Member = {
    member_id: string;
    username: string;
    did: string;
    present_role: string;
    open_for_opportunity: boolean;
    captain: boolean;

    //optionals
    name?: string;
    email?: string;
    about?: string;
    domain_tags_for_work: string[];
    currency: string;
    hourly_rate: string;
    skills: string[];
    profile_picture?: string;
    ceramic_stream?: string;
    subdomain?: string;
    tags?: string[];
    invite_code?: string;

    created_at?: string;
    updated_at?: string;
};

export type MemberResponse = {
    member_id: string;
    username: string;
    did: string;
    present_role: string;
    open_for_opportunity: boolean;
    captain: boolean;

    //optionals
    name?: string;
    email?: string;
    about?: string;
    domain_tags_for_work: string[];
    currency: string;
    hourly_rate: string;
    skills: string[];
    featured_projects?: FeaturedProjects[];
    profile_picture?: string;
    socials?: MemberSocial[];
    invite?: InviteStatus;
    message?: string;
    ceramic_stream?: string;
    subdomain?: string;
    tags?: string[];
    discord: MemberDiscord;
    wallets: WalletView[];
    default_wallet_address: string;
    dao_worked_profile_pictures: string[];
    dao_worked_count: number;
    dao_worked_with: DaoWorked[];
    overdue_tasks: number;
    ongoing_tasks: number;
    total_tasks_taken: number;
    pending_admin_reviews: number;

    isconnection?: boolean;
    invite_code?: string;
    invite_count: number;

    created_at?: string;
    updated_at?: string;
};

export type FeaturedProjects = {
    url: string;
    about?: string;
};

export type MemberWorkProgress = {
    overdue_tasks: number;
    ongoing_tasks: number;
    total_tasks_taken: number;
    pending_admin_reviews: number;
};

// MemberDiscord
export type MemberDiscord = {
    discord_user_id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string | null;
    banner_color: string | null;
    accent_color: number | null;
    locale: string;
    mfa_enabled: boolean;
    email: string;
    verified: boolean;
};

//Wallets
export type Wallet = {
    id: string;
    member_id: string;
    wallet_address: string;
    chain_id: string;
    default: boolean;
};

export type DaoWorked = {
    name: string;
    profile_picture: string;
};

export type Chain = {
    id: string;
    network: string;
    name: string;
    chain_id: string;
    type: string;
    currency: string;
};

export type WalletView = {
    wallet_id: string;
    wallet_address: string;
    chain_id: string;
    default: boolean;
};

//Socials

export type Social = {
    id: string;
    member_id: string;
    type: string;
    url: string;

    created_at?: string;
    updated_at?: string;
};

export type Onboarding = {
    member_id: string;
    admin: boolean;
    contributor: boolean;
    invite_code: string;
};

export type MemberFilter = {
    skills: string[];
};

//Connections
export type ConnectionRequest = {
    id: string;
    sender_id: string;
    receiver_id: string;
    status: InviteStatus;
    message?: string;

    created_at?: string;
    updated_at?: string;
};

export type Connection = {
    member: Member;
    id: string;
    sender_id?: string;
    receiver_id?: string;
    status: InviteStatus;
    message?: string;
};

//Clans

export type Clan = {
    clan_id: string;
    name: string;
    visbility: string;
    avatar: string;
    created_by: string;

    created_at?: string;
    updated_at?: string;
};

export type ClanMember = {
    clan_id: string;
    member_id: string;
    role: ClanRole;
    username: string;
    profile_picture: string;
    notification: boolean;

    created_at?: string;
};

export type ClanView = {
    clan_id: string;
    name: string;
    visbility: string;
    avatar: string;
    created_by: string;

    members: ClanMember[];

    created_at?: string;
    updated_at?: string;
};

export type ClanInvite = {
    id: string;
    clan_id: string;
    sender_id: string;
    invite_code: string;
    status: InviteStatus;
    receiver_id: string;

    created_at?: string;
    updated_at?: string;
};

export type ClanMemberInfo = {
    member_id: string;
    username: string;
    profile_picture: string;
};

export type ClanProjectInfo = {
    project_id: string;
    title: string;
    progress?: number;
};

export type ClanBountyInfo = {
    value: number;
    data: number[];
};

export type ClanResponse = {
    clan_id: string;
    name: string;
    visbility: string;
    avatar: string;
    created_by: string;

    members: ClanMemberInfo[];
    admin: ClanMemberInfo;

    projects?: {
        active: ClanProjectInfo[];
        completed: ClanProjectInfo[];
    };

    earned_badges?: string[];
    skills?: string[];
    reviews?: string[];
    applications?: string[];
    total_bounty?: ClanBountyInfo;
    chat_id?: string;

    created_at?: string;
    updated_at?: string;
};

export type MemberFetch = {
    type: FetchMemberType;
    value: string;
};

export type GuildForMember = {
    id: string;
    bot: boolean;
    username: string;
    discriminator: string;
    avatar: string | null;
    guild_id: string;
    joined_at: string;
    nickname: string | null;
    roles: string[];
    guild_data: GuildData[];
};

export type GuildData = {
    id: string;
    name: string;
    icon: string | null;
    available: boolean;
    splash: string | null;
    banner: string | null;
    description: string | null;
    member_count: number;
    joined_at: string;
    max_members: number | null;
    owner_id: string;
    features: string[];
};

export type MapDiscordParams = {
    member_id: string;
    guild_info: GuildInfo[];
};

export type GuildInfo = {
    guild_id: string;
    discord_roles: string[];
    joined_at: string;
};

export type MemberReview = {
    id: string;
    member_id: string;
    reviewer_id: string;
    content: string;
    rating: number;
};

export type MemberReviewResponse = {
    id: string;
    member_id: string;
    reviewer_id: string;
    content: string;
    rating: number;

    created_at?: string;

    name: string;
    username: string;
    profile_picture: string;
};

export type MemberReward = {
    member_id: string;
    dao_id: string;
    link_id: string;
    type: RewardType;
    amount: number;
    currency: string;

    created_at?: string;
};
