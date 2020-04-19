class CreateContents < ActiveRecord::Migration[5.0]
  def change
    create_table :contents do |t|
      t.string :name,                   null: false
      t.string :link,                   null: false
      t.string :git,                    null: false
      t.string :topImage,               null: false
      t.string :topText,                null: false
      t.string :catchcopy,              null: false
      t.timestamps
    end
  end
end
