require 'socket'

PORT = 3028

REQUEST_PARSE_FORMAT = 
  /(?<http_method>[A-Z]{3,}) (?<path>\/[\w\/]*)\??(?<parameters>(\w+=\w+&?)+)?/

def parse_request(request_line)
  request = request_line.match REQUEST_PARSE_FORMAT
  
  {
    http_method: request[:http_method],
    path: request[:path],
    parameters: parse_parameters(request[:parameters])
  }
end

def parse_parameters(parameters)
  return {} if parameters.nil?
  
  parameters.split('&').each_with_object({}) do |parameter, output_hash|
    name = parameter.match(/(\w+)=/i)[1].to_sym
    value = parameter.match(/\=(\w+)/)[1]
    output_hash[name] = value
  end
end

def dice_to_string(parameters)
  return "<p> No dice thrown! </p>\n" if parameters.empty?

  sides = parameters[:sides].to_i
  output_string = ""
  parameters[:rolls].to_i.times do
    output_string << "<p> 🎲 #{throw_dice(sides)}</p>\n"
  end
  output_string
end

def throw_dice(sides)
  rand(1..sides)
end

server = TCPServer.new('localhost', PORT)
loop do
  client = server.accept
  
  # The request the client sends to this server
  # will be displayed on the terminal.
  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  
  puts request_line

  request = parse_request(request_line)

  http_method = request[:http_method]
  path = request[:path]
  parameters = request[:parameters]
  dice_string = dice_to_string(parameters)

  # Response sent from the server (this application) 
  # to the client (our browser):
  client.puts "HTTP/1.0 200 OK"
  client.puts "Content-Type: text/html; charset=utf-8\r\n\r\n"
  client.puts "<!DOCTYPE html>
                <html>
                  <head>
                    <title>🤖 Simple Echo Server 🤖</title>
                  </head>
                  <body>
                
                    <h1>Your request:</h1>
                    <p>#{request_line}</p>
                    <h1>Dice thrown:</h1>
                    #{dice_string}
                
                  </body>
                </html>"
  client.close
end