class AuthController < ApplicationController
  skip_before_action :authorized, only: [:login]
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found

  def login
    @account = Account.find_by!(email: login_params[:email])
    @token = encode_token(user_id: @account.id)
    if @account.authenticate(login_params[:password])
      render json: { **@account.as_json, token: @token}, status: :accepted
    else
      render json: {message: 'Invalid data! Please check again.'}, status: :unauthorized
    end
  end

  private

  def login_params
      params.permit(:email, :password)
  end
  
  def handle_record_not_found(e)
    render json: { message: "Account doesn't exist" }, status: :unauthorized
  end
end