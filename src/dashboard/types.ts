export type Dashboard = {
  dashboard_id: string
  dao_id: string
  dashboard_name: string
  description: string
  default: boolean

  created_at?: string
  updated_at?: string
}

export type Widget = {
  widget_id: number
  widget_name: string
  description: string

  created_at?: string
  updated_at?: string
}

export type DashboardWidget = {
  dashboard_widget_id: number
  dashboard_id: string
  widget_id: number
  active: boolean
  row: number
  column: number
  order: number
  draggable: boolean
  popup_id: string

  created_at?: string
  updated_at?: string
}

export type DashboardView = {
  dashboard_id: string
  dao_id: string
  dashboard_name: string
  description: string
  default: boolean

  widgets: DashboardWidgetView[]

  created_at?: string
  updated_at?: string
}

export type DashboardWidgetView = {
  dashboard_widget_id: number
  dashboard_id: string
  widget_id: number
  active: boolean
  row: number
  column: number
  order: number
  draggable: boolean
  popup_id: string
  name: string
}
