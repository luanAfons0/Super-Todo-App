class AccountController < ApplicationController
    def create
        puts account_params
        @account = Account.create(account_params)
        if @account.save
            render json: @account.as_json
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
end
