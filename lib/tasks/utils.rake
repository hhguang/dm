namespace :utils do

  

  desc "import_score_item2 "
  task(:import_students  => :environment) do
    require 'csv'
    bj=1
    
    CSV.foreach('d:\2.csv') do |row|
      if row[0]         
        
        Student.create(name:row[0],tel:["#{row[2]}","#{row[3]}"])
      end
    end
  end

end