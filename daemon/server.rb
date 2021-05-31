#!/usr/bin/env ruby

require 'sinatra'

get '/' do
  puts "test"
  'OK'
end