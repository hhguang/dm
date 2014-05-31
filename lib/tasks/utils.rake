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

end