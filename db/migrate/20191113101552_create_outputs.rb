class CreateOutputs < ActiveRecord::Migration[5.2]
  def change
    create_table :outputs do |t|
      t.string :title
      t.integer :score
      t.text :explanation
      t.text :learn
      t.text :remark
      t.references :genre, null: false, foreign_key: true
      t.references :subgenre, null: false, foreign_key: true
      t.timestamps
    end
  end
end
