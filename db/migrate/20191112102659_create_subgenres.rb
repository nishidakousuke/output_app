class CreateSubgenres < ActiveRecord::Migration[5.2]
  def change
    create_table :subgenres do |t|
      t.string :name, null: false
      t.references :genre, null: false, foreign_key: true
      t.timestamps
    end
  end
end
