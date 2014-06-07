namespace :utils do

  desc "import_score_item2 "
  task(:import_students  => :environment) do
    require 'csv'
    bj=5

    CSV.foreach('d:\5.csv') do |row|
      if row[0]

        Student.create(bj:bj,name:row[0],tel:["#{row[2]}","#{row[3]}","#{row[4]}","#{row[5]}"])
      end
    end
  end

  desc "edit_student "
  task(:edit_students  => :environment) do
    require 'csv'
    path = ENV["path"]
    CSV.foreach('d:\g33.csv') do |row|
      if row[0]
        if student = Student.find_by_name(row[1])
          student.update_attributes(name: row[0]+row[1])
        end
      end
    end
  end

end