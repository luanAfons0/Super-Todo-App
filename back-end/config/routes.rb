Rails.application.routes.draw do
  # Acount related
  resources  :account, only: [:create, :show, :update]

  # Workspaces related
  post "account/:account_id/workspaces" => "workspace#create_workspace"
  get "account/:account_id/workspaces" => "workspace#get_related_workspaces"
  patch "account/:account_id/workspaces/:worspace_id" => "workspace#update_workspace"
  delete "account/:account_id/workspaces/:worspace_id" => "workspace#destroy_workspace"

  # Auth
  post "auth/login" => "auth#login"

  # Healthcheck
  get "up" => "rails/health#show", as: :rails_health_check
end
