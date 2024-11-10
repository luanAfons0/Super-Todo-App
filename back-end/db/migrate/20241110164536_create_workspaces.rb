class CreateWorkspaces < ActiveRecord::Migration[7.1]
  def change
    create_table :workspaces do |t|
      t.string :name
      t.string :description
      t.belongs_to :account

      t.timestamps
    end
  end
end
