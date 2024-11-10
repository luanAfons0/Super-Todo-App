class WorkspaceController < ApplicationController
    def get_related_workspaces
        @workspaces = Workspace.where(account_id: params[:account_id])

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

    def update_workspace
        @workspace = Workspace.where(id: params[:worspace_id]).update(workspaces_update_params)

        render json: { workspace: @workspace.as_json }, status: :ok
    end

    def destroy_workspace
        @workspace = Workspace.find_by(id: params[:worspace_id]).destroy

        render json: { workspace: @workspace.as_json, message: "Workspace deleted successfully!" }, status: :ok
    end

    private

    def workspaces_params
        params.permit(:name, :description, :account_id)
    end

    def workspaces_update_params
        params.permit(:name, :description)
    end
end
