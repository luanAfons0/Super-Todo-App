class ColumnsController < ApplicationController
    def get_all_columns
        @columns = Column.where(workspace_id: params[:worspace_id])

        render json: { columns: @columns }
    end
end
