# This is the application itself:

require_relative 'advice'
require_relative 'monroe'

class HelloWorld < Monroe
  def call(env)
    response_content =
      case env['REQUEST_PATH']
      when '/' then ['200', { 'Content-Type' => 'text/html' }, erb(:index)]
      when '/advice' then ['200', { 'Content-Type' => 'text/html' }, erb(:advice, message: Advice.new.generate)]
      else
        ['404', { 'Content-Type' => 'text/html', 'Content-Length' => '60' }, erb(:not_found)]
      end

    response(*response_content)
  end
end
