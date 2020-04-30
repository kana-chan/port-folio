class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.string :name,                  null: false
      t.string :text,                 null: false
      t.integer :number,                null: false
      t.string :icon
      t.timestamps
    end
  end
end
