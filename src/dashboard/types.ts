import { WidgetList } from './enums'

export type Dashboard = {
  dashboard_id?: string
  dao_id: string
  dashboard_name: string
  description: string
  default: boolean
  visibility: string

  created_at?: string
  updated_at?: string
}

export type DashboardName = {
  dashboard_name: string;
  dashboard_id: string;
};

export type DashboardWidget = {
  dashboard_widget_id: number
  dashboard_id: string
  id: WidgetList
  name: string
  active: boolean
  row_id: number
  col_id: number
  order: number
  draggable: boolean
  popup_id: number

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
