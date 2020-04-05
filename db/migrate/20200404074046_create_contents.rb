class CreateContents < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string :name,                   null: false
      t.string :image,                  null: false
      t.string :text,                   null: false
      t.string :link,                   null: false
      t.timestamps
    end
  end
end
