Rails.application.routes.draw do
  # Acount related
  resources  :account, only: [:create, :show, :update]

  # Workspaces related
  get "account/:id/workspaces" => "workspace#get_related_workspaces"
  post "account/:id/workspaces" => "workspace#create_workspace"

  # Auth
  post "auth/login" => "auth#login"

  # Healthcheck
  get "up" => "rails/health#show", as: :rails_health_check
end
