class AddAttendToStudent < ActiveRecord::Migration
  def change
    add_column :students, :attend,  :boolean, :default=>false
  end
end
