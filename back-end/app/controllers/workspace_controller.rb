class WorkspaceController < ApplicationController
    def get_related_workspaces
        @workspaces = Workspace.where(account_id: params[:id])

        render json: { workspaces: @workspaces.as_json }     
    end

    def create_workspace
        @workspace = Workspace.create(workspaces_params)

        if @workspace.save
            render json: { workspace: @workspace.as_json }, status: :created
        else
            render json: { message: "Error creating workspace", errors: @workspace.errors.full_messages }, status: :internal_server_error
        end
    end

    private

    def workspaces_params
        params.permit(:name, :description, :account_id)
    end
end
