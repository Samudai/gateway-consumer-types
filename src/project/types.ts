//import { Provider } from '../../paymentController/utils/types'
import { Provider } from '../payment/types'
import {
  ApplicantType,
  CommentType,
  LinkType,
  ProjectType,
  ResponseType,
  Visibility,
} from './enums'

interface Metadata {
    [key: string]: string;
}

export interface IMember {
    member_id: string;
    username: string;
    profile_picture?: string;
    name?: string;
}

export interface IExtras {
    [key: string]: any;
}

export type Project = {
    project_id?: string;
    link_id: string;
    type: LinkType;
    project_type: ProjectType;
    title: string;
    description?: string;
    visibility?: Visibility;
    start_date?: string;
    end_date?: string;
    created_by: string;
    updated_by?: string;
    department?: string;
    columns?: ProjectColumn[];
    total_col?: number;
    pinned?: boolean;

    github_repos?: string[];
    poc_member_id?: string;
    discord_channel?: string;
    captain?: string;
    budget_amount?: number;
    budget_currency?: string;
    completed?: boolean;

    contributors?: string[];
    contributor_list?: IMember[];

    created_at?: string;
    updated_at?: string;
};

export type ProjectFile = {
    project_file_id: string;
    folder_id: string;
    name: string;
    url: string;
    metadata?: Metadata;

    created_at?: string;
    updated_at?: string;
};

export type Task = {
    task_id?: string;
    project_id: string;
    title: string;
    description?: string;
    description_raw?: string;
    col: number;
    created_by: string;
    updated_by?: string;
    position: number;

    poc_member_id?: string;
    github_issue?: number;
    notion_page?: string;
    notion_property?: string;
    tags?: string[];
    deadline?: string;
    assignee_member?: string[];
    assignee_clan?: string[];
    feedback?: string;
    payout?: Payout[];
    vc_claim?: string[];
    payment_created?: boolean;
    created_at?: string;
    updated_at?: string;
    github_pr?: GithubPR;
    archived?: boolean;
    associated_job_type?: string;
    associated_job_id?: string;
    //Formresponse optional fields
    response_id?: string;
    response_type?: ResponseType;
    mongo_object?: string;
    discussion_id?: string;
    // extra field
    payoutids?: string[];
};

export type GithubPR = {
    id: string;
    title: string;
    html_url: string;
    state: string;
};

export type Payout = {
    payout_id: string;
    name: string;
    member_id: string;
    link_type: string;
    link_id: string;
    provider_id: string;
    receiver_address?: string;
    payout_amount: number;
    payout_currency: string;
    token_address?: string;
    completed: boolean;
    provider_exists?: boolean;
};

export type TaskFile = {
    task_file_id: string;
    task_id: string;
    name: string;
    url: string;
    metadata?: Metadata;

    created_at?: string;
    updated_at?: string;
};

export type SubTask = {
    subtask_id?: string;
    project_id: string;
    task_id: string;
    title: string;
    created_by: string;
    updated_by?: string;
    description?: string;
    description_raw?: string;
    deadline?: string;
    completed?: boolean;
    poc_member_id: string;
    assignee_member?: string[];
    github_issue?: string;
    position: number;
    notion_page?: string;
    notion_property?: string;
    col?: number;
    payout?: Payout[];
    payment_created?: boolean;
    github_pr?: string;
    archived?: boolean;
    associated_job_type?: string;
    associated_job_id?: string;
    // extra field
    payoutids?: string[];

    created_at?: string;
    updated_at?: string;
};

export type Comment = {
    id: string;
    link_id: string;
    body: string;
    author: string;
    type: CommentType;

    author_member?: IMember;

    tagged_members?: string[];

    created_at?: string;
    updated_at?: string;
};

export type TaskAssign = {
    type: string;
    task_id: string;
    assignee_member?: string[];
    assignee_clan?: string[];
    updated_by: string;
};

export type DAODetail = {
    dao_id: string;
    roles: string[];
};

export type Pagination = {
    offset: number;
    limit: number;
};

export type ProjectColumn = {
    column_id: number;
    name: string;
};

//Responses

export type ProjectResponse = {
    project_id?: string;
    link_id: string;
    type: LinkType;
    project_type: ProjectType;
    title: string;
    description?: string;
    visibility?: Visibility;
    start_date?: string;
    end_date?: string;
    created_by: string;
    updated_by?: string;
    department?: string;
    columns?: ProjectColumn[];
    total_col?: number;
    pinned?: boolean;

    github_repos?: string[];
    poc_member_id?: string;
    discord_channel?: string;
    captain?: string;
    budget_amount?: number;
    budget_currency?: string;
    completed?: boolean;

    access?: string;
    task_count?: number;
    completed_task_count?: number;

    poc_member?: IMember;
    captain_member?: IMember;
    extras?: IExtras;
    tasks?: Task[];

    contributors?: string[];
    contributor_list?: IMember[];

    created_at?: string;
    updated_at?: string;
};

export type TaskResponse = {
    task_id?: string;
    project_id: string;
    title: string;
    description?: string;
    description_raw?: string;
    col: number;
    created_by: string;
    updated_by?: string;
    position: number;

    poc_member_id?: string;
    github_issue?: number;
    notion_page?: string;
    notion_property?: string;
    tags?: string[];
    deadline?: string;
    assignee_member?: string[];
    assignee_clan?: string[];
    feedback?: string;
    payout?: Payout[];
    github_pr?: GithubPR;
    archived?: boolean;
    associated_job_type?: string;
    associated_job_id?: string;
    completed_subtask_count?: number;

    vc_claim?: string[];
    payment_created?: boolean;
    poc_member?: IMember;
    assignees?: IMember[];
    created_by_member?: IMember;

    files?: TaskFile[];
    subtasks?: SubTask[];
    comments?: Comment[];

    created_at?: string;
    updated_at?: string;
};

export type SubTaskResponse = {
    subtask_id?: string;
    project_id: string;
    task_id: string;
    title: string;
    created_by: string;
    updated_by?: string;
    description?: string;
    description_raw?: string;
    deadline?: string;
    completed?: boolean;
    poc_member_id: string;
    assignee_member?: string[];
    github_issue?: string;
    position: number;
    notion_page?: string;
    notion_property?: string;
    col?: number;
    payout?: Payout[];
    payment_created?: boolean;
    github_pr?: string;
    archived?: boolean;
    associated_job_type?: string;
    associated_job_id?: string;

    poc_member?: IMember;
    assignees?: IMember[];
    created_by_member?: IMember;

    created_at?: string;
    updated_at?: string;
};

export type TaskFormResponse = {
    response_id: string;
    project_id: string;
    response_type: ResponseType;
    mongo_object: string;
    title: string;
    col: number;
    position: number;

    discussion_id?: string;
    assignee_member?: string[];
    assignee_clan?: string[];
    updated_by?: string;

    created_at?: string;
    updated_at?: string;
};

export type UpdateResponseColumn = {
    response_id: string;
    col: number;
    updated_by: string;
};

export type AssignResponse = {
    type: ApplicantType;
    response_id: string;
    assignee_member?: string[];
    assignee_clan?: string[];
    updated_by: string;
};

export type UpdateResponsePosition = {
    response_id: string;
    position: number;
    updated_by: string;
    project_id: string;
};

export type UpdateProjectPinned = {
    project_id: string;
    pinned: boolean;
    updated_by: string;
    link_id: string;
};

export type FileFolder = {
    folder_id: string;
    project_id: string;
    name: string;

    description?: string;
    created_by?: string;
    updated_by?: string;

    created_at?: string;
    updated_at?: string;
};

export type TaskCredentials = {
    task_id: string;
    member_id: string;
    claim: boolean;

    created_at?: string;
};
