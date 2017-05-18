class Audiobook < ActiveRecord::Base

  validates :title, :author, :audio_url, presence: true
end
