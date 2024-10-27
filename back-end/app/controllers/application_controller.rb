require "dotenv"

Dotenv.load

class ApplicationController < ActionController::API
    before_action :authorized
    skip_before_action :authorized, only: [:create]

    def encode_token(payload)
        JWT.encode(payload, ENV["JWT_SECRET"]) 
    end

    def decoded_token
        header = request.headers['Authorization']
        if header
            token = header.split(" ")[1]
            begin
                JWT.decode(token, ENV["JWT_SECRET"], true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_account
        if decoded_token
            account_id = decoded_token[0]['account_id']
            @account = Account.find_by(id: account_id)
        end
    end

    def authorized
        unless !!current_account
        render json: { message: 'Please log in' }, status: :unauthorized
        end
    end
end