class Video < ActiveRecord::Base
   include VideoUploader.attachment(:video)
end
