class AccountController < ApplicationController
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    def create
        @account = Account.create(account_params)
        @token = encode_token(account_id: @account.id)
        if @account.save
            render json: { **@account.as_json, token: @token}, status: :created
        else
            render json: { message: "Error creating account", errors: @account.errors.full_messages }, status: :internal_server_error
        end
    end

    def show
        @account = Account.find_by(params[:id])
        render json: @account.as_json
    end

    def update
        @account.update(account_params)
        @token = encode_token(account_id: @account.id)
        if @account.save
            render json: { **@account.as_json, token: @token}, status: :ok
        else
            render json: { message: "Error updating account", errors: @account.errors.full_messages }, status: :internal_server_error
        end
    end

    private

    def account_params
        params.permit(:email, :password, :first_name, :last_name)
    end

    def handle_invalid_record(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
