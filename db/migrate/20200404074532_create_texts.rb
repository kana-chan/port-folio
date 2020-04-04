class CreateTexts < ActiveRecord::Migration[5.0]
  def change
    create_table :texts do |t|
      t.string :text,                     null: false
      t.string :heading,                   null: false
      t.references :content,               foreign_key: true
      t.timestamps
    end
  end
end
