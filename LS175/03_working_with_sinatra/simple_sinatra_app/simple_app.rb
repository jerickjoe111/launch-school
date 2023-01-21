require 'sinatra'

HTML = "
<html>
<body>
  <h2>Aloha. This is just a simple app 👋</h2>
</body>
</html>
"

get '/' do
  HTML
end

get '/alakazam' do
  'Alakazam! 🧙‍♂️'
end

get '/git' do
  send_file '_Git cheat sheet dark (FINAL).png'
end

get '/file' do
  send_file 'a_file.txt'
end

get '/hello/:name' do |name|
  "Hi, #{name}! 🙂"
end

get '/redirect' do
  redirect to('/alakazam')
end

get '/dangerous' do
  666
end

