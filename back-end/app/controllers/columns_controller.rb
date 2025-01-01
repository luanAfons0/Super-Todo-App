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

    def update_positions
        @columns = []
        for column in params[:columns] do
            @column = Column.where(id: column[:id]).update(position: column[:position])
            @columns.push(@column)
        end

        render json: { message: @columns.as_json }
    end

    private

    def columns_params
        params.permit(:name, :workspace_id, :color, :position)
    end
end
