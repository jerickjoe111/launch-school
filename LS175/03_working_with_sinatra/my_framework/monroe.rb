# Our custom framework

class Monroe
  private

  def erb(filename, local = {})
    message = local[:message]
    b = binding
    content = File.read("views/#{filename}.erb")
    ERB.new(content).result(b)
  end

  def response(status, headers, body = '')
    [status, headers, [body]]
  end
end