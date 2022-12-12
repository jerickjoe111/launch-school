Study guide:

Purpose of core tools

Gemfiles

Materials from book + Materials from lessons

(commands to know: ruby installation, gem installation, current ruby version, ruby version manager used)

Gems
  - What are gems?
  - the local library

Ruby Version Managers
  - What are RVMs?
  - RVM
  - rbenv

Bundler
  - What is Bundler?
  - the Gemfile

Rake
  - What is Rake?
  - the Rakefile

(not covered in this lesson:)
- Minitest
- RSpec
- simplecov

## What gets installed with Ruby?

- The core library
- The standard Library
- The irb REPL (Read Evaluate Print Loop)
- The rake utility: a tool to automate Ruby development tasks
- The gem command: a tool to manage RubyGems
- Documentation tools (rdoc and ri)

## Gems

RubyGems, often just called Gems, are packages of code that you can download, install, and use in your Ruby programs or from the command line. The gem command manages your Gems.

The basics of Gems are pretty simple: you can search the RubyGems website to find a Gem you want to install, and then run gem install to install the Gem on your system. Once installed, you can start using most Gems immediately, though you may have to read the documentation first.

The Remote Library

The gem command connects to the remote library, downloads the appropriate Gems, and installs them. If you specify additional remote libraries, gem also connects to those libraries to find the Gems you want.

The Local Library

When gem installs a Gem, it places the files that comprise the Gem on your local file system in a location where Ruby and your system can find the files and commands it needs. This location is the local library.

Precisely where gem creates the local library depends on several factors, including whether you are using a system Ruby that needs root access, a user maintainable Ruby, the specific Ruby version number, and whether you use a Ruby version manager, e.g., rbenv or RVM. 

`$ gem env` : This prints a longish list of information about your RubyGems installation.

## Ruby Version Managers

Ruby version managers are programs that let you install, manage, and use multiple versions of Ruby. Eventually, you're going to write or use a Ruby program that needs a different version of Ruby, and that's when you will find that you need a Ruby version manager.

Another reason to use Ruby version managers is when working on multiple applications. Software applications tend to standardize on a specific Ruby version in order to guarantee developers don't use unsupported language features. 

There are two major ruby version managers in common use: RVM and rbenv. They take different approaches to the problem of using multiple versions of Ruby, but the result is the same: you can easily use multiple versions of Ruby on the same system.

Summary

Ruby version managers let you manage multiple versions of Ruby, the utilities (such as irb) associated with each version, and the RubyGems installed for each Ruby. With version managers, you can install and uninstall ruby versions and gems, and run specific versions of ruby with specific programs and environments.

The two main version managers, RVM and rbenv, are similar in function, with little to distinguish between the two for most developers. By default, RVM has more features, but rbenv plugins provide much of the functionality not provided by the base install of rbenv. RVM works by dynamically managing your environment, mostly by modifying your PATH variable and replacing the built-in cd command with an RVM-aware shell function; rbenv works by just modifying your PATH and some other environment variables.

As we've seen, Ruby programs often need a specific version of Ruby, and specific versions of the Gems it uses. Ruby version managers take care of most of the issues arising from these differing requirements, but sometimes you'll find that they aren't enough. For example, you may need to use Ruby 2.2.2 for two different projects instead of your default 2.3.1, but you may also need separate versions of the Rails Gem, say 4.2.7 for one project, and version 5.0.0 for the other. While both RVM and rbenv (with the aid of a plugin) can handle these requirements, the easier and more common path is to use a RubyGem called Bundler. We discuss Bundler in the next chapter.

## Bundler

You can also use your version manager to manage Gem dependencies, but the favored approach is to use a dependency manager.

The most widely used dependency manager in the Ruby community, by far, is the Bundler Gem. This Gem lets you configure which Ruby and which Gems each of your projects need.

Bundler is a Gem, so you must use the gem command to install it. If you use a Ruby version manager, you must install the Gem in each version of Ruby for which you wish to use Bundler. 

Gemfile and Gemfile.lock

Bundler relies on a text file named Gemfile to tell it which version of Ruby and its Gems it should use. This file is a simple Ruby program that uses a Domain Specific Language (DSL) to provide details about the Ruby and Gem versions. It's the configuration or instruction file for Bundler.

After you create Gemfile, the bundle install command scans it, downloads and installs all the dependencies listed, and produces a Gemfile.lock file. Gemfile.lock shows all the dependencies for your program; this includes the Gems listed in Gemfile, as well as the Gems they depend on (the dependencies), which may not be explicitly listed in the Gemfile. It's very common for RubyGems you install for use in your project to rely on many other gems, creating a large dependency tree.

Running Apps with Bundler

Once Bundler creates your Gemfile.lock, add `require 'bundler/setup'` to the beginning of your app, before any other Gems.  This ensures that the specific Gem and version your app depends on is loaded, and not a conflicting version of that Gem.

`bundle exec`

An app that relies on Bundler should require the bundler/setup package before it loads any Gems. This package ensures that the app loads the desired Gems.

Unfortunately, you will surely encounter situations where you can't just add require 'bundler/setup' to the code, or the program itself may run code that has conflicting needs. When this happens, you need the often mysterious bundle exec command.

You can use bundle exec to run most any command in an environment that conforms to the Gemfile.lock versioning info. 

When Should You Use bundle exec?

We use it above with env primarily to demonstrate what bundle exec does. Using bundle exec with a non-Ruby command is rare, though. You usually use bundle exec with commands written in Ruby and installed as Gems, e.g., Rake, Pry, and Rackup. But, exactly when would one need to use it?

We use it to resolve dependency conflicts when issuing shell commands. 

`binstubs`

Earlier, we mentioned the binstubs feature. binstubs is an alternative to using bundle exec. It sets up a directory of short Ruby scripts (wrappers) with the same names as executables installed by your Gems. By default, binstubs names this directory as bin, but you should override that if your app also needs a bin directory of its own.

Summary 

Bundler lets you describe exactly which Ruby and Gems you want to use with your Ruby apps. Specifically, it lets you install multiple versions of each Gem under a specific version of Ruby and then use the proper version in your app.

Bundler is a RubyGem, so you must install it like a normal Gem: gem install bundler.

To use Bundler, you provide a file named Gemfile that describes the Ruby and Gem versions you want for your app. You use a DSL described on the Bundler website to provide this information.

Bundler uses the Gemfile to generate a Gemfile.lock file via the bundle install command. Gemfile.lock describes the actual versions of each Gem that your app needs, including any Gems that the Gems listed in Gemfile depend on. The bundler/setup package tells your Ruby program to use Gemfile.lock to determine which Gem versions it should load.

The bundle exec command ensures that executable programs installed by Gems don't interfere with your app's requirements. For instance, if your app needs a specific version of rake but the default version of rake differs, bundle exec ensures that you can still run the specific rake version compatible with your app.

In the next chapter, we'll take a look at Rake, Ruby's answer to the long time Unix development tool, Make. Rake lets you automate a lot of tasks common to many Ruby development projects.

## Rake

Rake is a Rubygem that automates many common functions required to build, test, package, and install programs; it is part of every modern Ruby installation, so you don't need to install it yourself.

Here are some common Rake tasks that you may encounter:

- Set up required environment by creating directories and files
- Set up and initialize databases
- Run tests
- Package your application and all of its files for distribution
- Install the application
- Perform common Git tasks
- Rebuild certain files and directories (assets) based on changes to other files and directories

In short, you can write Rake tasks to automate anything you may want to do with your application during the development, testing, and release cycles.

How Do You Use Rake?

Rake uses a file named Rakefile that lives in your project directory; this file describes the tasks that Rake can perform for your project, and how to perform those tasks.

One very important thing to notice is that Rakefile is actually a Ruby program. You can put any Ruby code you want in a Rakefile and run it as part of a task. 

Why Do I Need Rake?

One reason why you need Rake is that nearly every Ruby project you can find has a Rakefile, and the presence of that file means you need to use Rake if you want to work on that project. 

While you can always opt-out of using Rake in your projects, there is little point to doing so. Every project that aims to produce a finished project that either you or other people intend to use in the future has repetitive tasks the developer needs. For instance, to release a new version of an existing program, you may want to:

Run all tests associated with the program.
Increment the version number.
Create your release notes.
Make a complete backup of your local repo.

Your Rakefile likely has each of these as a separate task, as well as a single overall task (call it release, for instance) that steps through the tasks one at a time. The release task would stop only when it completes all the tasks or one task fails.

## Relationships

One thing to keep in mind as you become more comfortable with the Ruby tools is how they relate to each other.

Your Ruby Version Manager is at the top level -- it controls multiple installations of Ruby and all the other tools.

Within each installation of Ruby, you can have multiple Gems -- even 1000s of Gems if you want. Each Gem becomes accessible to the Ruby version under which it is installed. If you want to run a Gem in multiple versions of Ruby, you need to install it in all of the versions you want to use it with.

Each Gem in a Ruby installation can itself have multiple versions. This frequently occurs naturally as you install updated Gems, but can also be a requirement; sometimes you just need a specific version of a Gem for one project, but want to use another version for your other projects.

Ruby projects are programs and libraries that make use of Ruby as the primary development language. Each Ruby project is typically designed to use a specific version (or versions) of Ruby, and may also use a variety of different Gems.

The Bundler program is itself a Gem that is used to manage the Gem dependencies of your projects. That is, it determines and controls the Ruby version and Gems that your project uses, and attempts to ensure that the proper items are installed and used when you run the program.

Finally, Rake is another Gem. It isn't tied to any one Ruby project, but is, instead, a tool that you use to perform repetitive development tasks, such as running tests, building databases, packaging and releasing the software, etc. The tasks that Rake performs are varied, and frequently change from one project to another; you use the Rakefile file to control which tasks your project needs.