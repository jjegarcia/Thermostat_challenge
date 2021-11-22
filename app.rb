require 'sinatra/base'
require 'json'
# require_relative './lib/thermostat'

class ThermostatApp < Sinatra::Base
  get '/' do
    # File.read('./index.html')
    erb :thermostat
  end

  # get '/temperature' do
  #   @thermostatData = ThermostatData.fetch
  # end
  #
  # post '/temperature' do
  #   ThermostatData.save(params[:temperature])
  # end

  run! if app_file == $0
end
