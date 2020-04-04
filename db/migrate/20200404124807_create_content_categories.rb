class CreateContentCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :content_categories do |t|
      t.references :content,                 foreign_key: true
      t.references :category,                foreign_key: true
      t.timestamps
    end
  end
end
