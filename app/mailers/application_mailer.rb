class ApplicationMailer < ActionMailer::Base
  def sample_email(user)
    @user = user
    mg_client = Mailgun::Client.new ENV['api_key']
    mail( {:from    => ENV['gmail_username'],
                      :to      => @user.email,
                      :subject => 'Sample Mail using Mailgun API',
                      :text    => 'This mail is sent using Mailgun API via mailgun-ruby'})
  end
end
