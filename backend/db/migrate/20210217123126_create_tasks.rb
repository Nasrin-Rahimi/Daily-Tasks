class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :image_url
      t.boolean :done
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
