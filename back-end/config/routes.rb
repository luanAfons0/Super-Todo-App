Rails.application.routes.draw do
  # Acount related
  resources  :account, only: [:create, :show, :update]

  # Workspaces related
  post "account/:account_id/workspaces" => "workspace#create_workspace"
  get "account/:account_id/workspaces" => "workspace#get_related_workspaces"
  patch "account/:account_id/workspaces/:worspace_id" => "workspace#update_workspace"
  delete "account/:account_id/workspaces/:worspace_id" => "workspace#destroy_workspace"

  # Columns related
  post "account/:account_id/workspaces/:workspace_id" => "columns#create_column"
  get "account/:account_id/workspaces/:workspace_id" => "columns#get_all_columns"
  patch "account/:account_id/workspaces/positions/:workspace_id" => "columns#update_positions"
  patch "account/:account_id/workspaces/:workspace_id/column/:column_id" => "columns#update_column_info"

  # Auth
  post "auth/login" => "auth#login"

  # Healthcheck
  get "up" => "rails/health#show", as: :rails_health_check
end
