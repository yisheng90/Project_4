class Video < ActiveRecord::Base
   include VideoUploader.attachment(:video)
   belongs_to :course
end
