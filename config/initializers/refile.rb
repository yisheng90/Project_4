require 'refile/s3'

aws = {
  access_key_id: ENV.fetch('AWS_ACCESS_KEY_ID'),
  secret_access_key:  ENV.fetch('AWS_SECRET_ACCESS_KEY'),
  region: 'ap-southeast-1',
  bucket: 'project4-dev-yisheng',
}
Refile.cache = Refile::S3.new(prefix: "cache", **aws)
Refile.store = Refile::S3.new(prefix: "store", **aws)
