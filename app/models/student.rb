class Student < ActiveRecord::Base
  attr_accessible :bj, :name, :tel

  serialize :tel
end
