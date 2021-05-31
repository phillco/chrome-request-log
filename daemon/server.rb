#!/usr/bin/env ruby

require 'sinatra'

set :port, 7445

post '/' do
  puts "test"
  puts "parameters: #{params}"
  body = JSON.parse(request.body.read)
  puts "body: #{JSON.pretty_generate(body)}"
  'OK'
end