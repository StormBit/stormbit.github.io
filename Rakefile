require 'digest/md5'
require 'date'

task :default => :build

desc 'Build site'
task :build do
  `jekyll build #{ARGV}`
end

desc 'Build site in dev environment'
task :dev do
  `jekyll build --config _config.yml,_config-dev.yml #{ARGV}`
end

desc 'Create a new post with the current user'
task :addpost do
  now = DateTime.now

  title = ask 'Post Title:'
  slug  = now.strftime('%Y-%m-%d') + '-'
  slug << title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  File.write("./_posts/#{slug}.md", <<-FRONTMATTER
---
layout: post
title: #{title}
date: #{now.strftime '%Y-%m-%d %H:%M'}
author: #{File.read('./_whoami')}
---
FRONTMATTER
  )
end

def ask prompt
  print prompt + ' '
  STDIN.gets.chomp
end

desc 'Sets the current user into the _whoami file'
task :setuser do
  if File.exists? './_whoami'
    whoami = File.read('./_whoami')
    puts "Changing user; current is #{whoami}"
  else
    puts "Setting user..."
  end
  File.write('./_whoami', ask('New username:'))
end

desc 'Create a new user in the config file'
task :adduser do
  puts 'Creating new user:'
  username = ask 'username?'
  realname = ask 'real name?'
  email = ask 'email address?'
  nick = ask 'IRC nick?'
  website = ask 'Website? (optional)'
  twitter = ask 'Twitter handle? (leave off the @)'
  gravatar = ask 'Gravatar email? (default is same as email)'
  location = ask 'Location?'
  role = ask 'Job Title?'

  File.write("./_data/people/#{username}.yml", <<-NEWUSER
name: #{realname}
email: #{email}
nick: #{nick}#{
if not website.empty? then "
website: #{website}"
end}
twitter: #{twitter}
gravatar: #{Digest::MD5.hexdigest(gravatar.empty? ? email : gravatar)}
location: #{location}
role: #{role}
NEWUSER
  )
end
