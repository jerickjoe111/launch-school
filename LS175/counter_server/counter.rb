require 'socket'

PORT = 3037

def parse_request(request_line)
  http_method, path_and_parameters, http = request_line.split(' ')
  path, parameters = path_and_parameters.split('?')

  parameters = split_to_hash(parameters)

  [http_method, path, parameters]
end

def split_to_hash(parameters)
  (parameters || '').split('&').each_with_object({}) do |pair, hash|
    name, value = pair.split('=')
    hash[name] = value
  end
end

server = TCPServer.new('localhost', PORT)

loop do
  client = server.accept

  request_line = client.gets
  puts request_line
  
  next unless request_line

  http_method, path, parameters = parse_request(request_line)
  number = parameters['number'].to_i

  client.puts 'HTTP/1.0 200 OK'
  client.puts "Content-Type: text/html; charset=utf-8\r\n\r\n"
  client.puts "<!DOCTYPE html>
                <html>
                  <head>
                    <title>🤖 Counter Server 🤖</title>
                  </head>
                  <body>
                
                    <h1>Your request:</h1>
                    <p>Method: #{http_method}</p>
                    <p>Path: #{path}</p>
                    <p>Parameters: #{parameters}</p>
                    <h1>Counter: #{number}</h1>
                    
                    <a href='?number=#{number + 1}'>Add one!</a>
                    <a href='?number=#{number - 1}'>Substract one!</a>
                  </body>
                </html>"
  client.close
end