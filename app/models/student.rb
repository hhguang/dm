class Student < ActiveRecord::Base
  attr_accessible :bj, :name, :tel, :attend

  serialize :tel

  before_save :remove_blank

  private

  def remove_blank
    self.tel.delete('')
  end
end
