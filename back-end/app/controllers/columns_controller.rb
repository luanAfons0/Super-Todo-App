class ColumnsController < ApplicationController
    def get_all_columns
        @columns = Column.where(workspace_id: params[:workspace_id])

        render json: { columns: @columns.as_json }
    end

    def create_column
        @column = Column.create(columns_params)

        if @column.save
            render json: { column: @column.as_json }, status: :created
        else
            render json: { message: "Error creating column", errors: @column.errors.full_messages }, status: :internal_server_error
        end
    end

    private

    def columns_params
        params.permit(:name, :workspace_id, :color)
    end
end
