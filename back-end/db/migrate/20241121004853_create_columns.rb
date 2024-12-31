class CreateColumns < ActiveRecord::Migration[7.1]
  def change
    create_table :columns do |t|
      t.string :name
      t.string :color
      t.belongs_to :workspace

      t.timestamps
    end
  end
end
