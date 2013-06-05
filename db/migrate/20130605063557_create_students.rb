class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :bj
      t.text :tel

      t.timestamps
    end
  end
end
