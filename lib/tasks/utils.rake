namespace :utils do

  

  desc "import_score_item2 "
  task(:import_students  => :environment) do
    require 'csv'
    bj=3
    
    CSV.foreach('d:\g33.csv') do |row|
      if row[0]         
        
        Student.create(bj:bj,name:row[0],tel:["#{row[2]}","#{row[3]}"])
      end
    end
  end

end