class Workspace < ApplicationRecord
    validates :name, :description,:account_id, :presence => true
end
