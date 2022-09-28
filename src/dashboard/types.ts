import { WidgetList } from './enums'

export type Dashboard = {
  dashboard_id: string
  dao_id: string
  dashboard_name: string
  description: string
  default: boolean
  visibility: string

  created_at?: string
  updated_at?: string
}

// export type Widget = {
//     widget_id: number;
//     widget_name: string;
//     description: string;

//     created_at?: string;
//     updated_at?: string;
// };

export type DashboardWidget = {
  id: number
  dashboard_id: string
  type: WidgetList
  active: boolean
  row: number
  column: number
  order: number
  draggable: boolean
  popup_id: string
  resizable: boolean

  created_at?: string
  updated_at?: string
}

export type DashboardResponse = {
  dashboard_id: string
  dao_id: string
  dashboard_name: string
  description: string
  default: boolean
  visibility: string

  widgets: DashboardWidget[]

  created_at?: string
  updated_at?: string
}

// export type DashboardWidgetView = {
//     dashboard_widget_id: number;
//     dashboard_id: string;
//     widget_id: number;
//     active: boolean;
//     row: number;
//     column: number;
//     order: number;
//     draggable: boolean;
//     popup_id: string;
//     name: string;
// };
