class Column < ApplicationRecord
    def as_json(options = {})
        super(options.merge(only: [:name, :color, :id, :position]))
    end
end
