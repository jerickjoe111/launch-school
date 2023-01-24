require 'sinatra'

get '/' do
  @files = Dir.glob('public/*').select { |file| File.file?(file) }.map { |file| File.basename(file) }.sort

  @descending = params['order'] == 'descending'

  @files.reverse! if @descending

  erb :home
end
