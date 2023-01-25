require 'sinatra'
require 'yaml'

DATA_FILE = 'data/users.yaml'

helpers do
  def valid_user?(name)
    @users.include? name.downcase.to_sym
  end

  def list
    @users.keys.map { |name| name.to_s.capitalize }
  end

  def others(current_user)
    @user_name_list
  end

  def interests(user)
    total = @users[user.to_sym][:interests].map(&:capitalize)
    
    "#{total[0..-2].join(', ')} and #{total.last}"
  end

  def total_interests
    @users.each_with_object([]) do |(_, user_info), list|
      user_info[:interests].each { |interest| list << interest unless list.include? interest }
    end
  end
end

before do
  @users = YAML.load_file(DATA_FILE)
  @users_name_list = list
  @number_of_users = @users_name_list.size
  @number_of_interests = total_interests.size
end

get '/' do
  erb :home
end

get '/user/:name' do |name|
  @name = name
  redirect '/not_found' unless valid_user?(@name)

  erb :user
end

get '/not_found' do
  erb :not_found
end

