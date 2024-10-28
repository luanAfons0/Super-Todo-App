class AccountController < ApplicationController
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

    def create
        @account = Account.create(account_params)
        @token = encode_token(account_id: @account.id)
        if @account.save
            render json: { **@account.as_json, token: @token}, status: :created
        else
            render json: { message: "Error creating account", errors: @account.errors.full_messages }
        end
    end

    def index
        render json: { accounts: Account.all.map(&:as_json) }
    end

    private

    def account_params
        params.permit(:email, :password, :first_name, :last_name)
    end

    def handle_invalid_record(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
