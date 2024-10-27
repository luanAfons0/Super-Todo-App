class AccountController < ApplicationController
    def create
        @account = Account.create(user_params)
        if @account.save
            render json: @account.as_json
        else
            render json: { message: "Error creating account", errors: @account.errors.full_messages }
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
