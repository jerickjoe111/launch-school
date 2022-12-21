
## Overview

- [RubyGems](https://rubyGems.org/) provides a library of code packages called Gems. These can be downloaded and either run from the command line or within Ruby programs, with the `require` keyword. Use the `gem` command from the command line interface to manage, install, and otherwise manipulate these code packages.
  - RubyGems also provides us with a standardized template, format, and structure for releasing our own Gems. In face, all Ruby projects are packaged using the RubyGems format.

- [Ruby Version Managers](#ruby-version-managers) are pieces of software that help us deal with the fact that we may have multiple versions of Ruby installed on our local system. We want to make sure that our project Ruby (often standardized when multiple developers are working on the same project) is the right version, as well as matching the Ruby that we may be running in our environnement. Ruby Version managers such as RVM and Rbenv can help us deal with the complications that can arise from this.

- **Bundler** is a gem that manages dependencies in a Ruby project. In the project's main folder the developer includes a `Gemfile` that contains all the information regarding the Ruby version, the Gems the project relies on, and what version of those Gems the project will need to work properly. Then, when distributing the program to other systems, Bundler will know what Gems and version to install, as well as making sure to utilize the correct version of Ruby and the Gems.

- **Rake** is a gem that allows us to automate tasks, mostly about the having to do with the building, testing, packaging, and installation of a program. We define these tasks in a `Rakefile` which uses a simple DSL (Domain Specific Language) to define _tasks_, small Ruby programs, that can be executed from the command line with `rake`.

- `.gemspec` is a file included in all Gem projects. It provides information such as name, authors, contact info, etc about a released Gem. If we want to release a program or library as Gem we must include a `.gemspec` file.

## Installing Ruby

_Note: The following installation notes are specific to Linux._

Use a [Ruby Version Manager](#ruby-version-managers) (such as _RVM_ or _rbenv_) to install Ruby onto your local machine. This is preferable to using a system version of Ruby, which are often outdated and can sometimes require root access.

We can use the command `which ruby` to see where our system finds the `ruby` command. If `/usr/bin/ruby` is output, we are using the system version of Ruby.

We can use the command `ruby -v` to find out what version of Ruby is currently running.

These are the tools that come with the Ruby installation

- the `ruby` command to run Ruby programs
- The core library
- The standard Library
- The `irb` REPL (Read Evaluate Print Loop)
- The `rake` utility: a tool to automate Ruby development tasks
- The `gem` command: a tool to manage RubyGems
- Documentation tools (`rdoc` and `ri`)

## Relationships

The Ruby Version Manager its at the top of the hierarchy: it controls multiple installations of Ruby and all the other tools.

Within each installation of Ruby (each Ruby version), there can be many different Gems, and each Gem becomes accessible to the Ruby version in which it was installed. To use the same Gem in different versions of Ruby, we will have to install the Gem in each version we'd like to use it with. There can be many versions of the same Gem under the same Ruby installation: sometimes some projects need specific versions of Gems, different from the ones we usually use or the most recent.

Each Ruby project (a program or library that uses Ruby as its main language) is designed to be used under a specific version of Ruby, often with specific Gems and Gems versios.

Bundler is a Gem used to manage the Gem dependencies of our projects. It is very useful because it determines and controls the Ruby version and Gems our projects use, and makes sure that all the necessary components and dependencies are present for the correct working of our programs.

Fake is a Gem for general use, not tied to specific projects. With this tool, we can write repetitive development tasks, such as running tests, building databases, packaging and releasing the software, etc. Rake uses a `Rakefile` file to determine what tasks should be performed for a particular project.

## Ruby Version Managers

Ruby version managers are programs that let us install, manage, and use multiple versions of Ruby: It's not rare to to write or use a Ruby program that needs a different version of Ruby.

Also, when when working on multiple applications, usually there is the tendendy to standardize on a specific Ruby version in order to guarantee developers don't use unsupported language features. 

There are two major common Ruby version managers : RVM and rbenv.

- RVM includes more features, and works by dynamically managing the command line environment 

- rbenv does not include as many features, but allows us to install 'plugins' that give more functionality. Works mostly by modifying the environment variables (`$PATH`).

## Gems

### What are Gems?

RubyGems, or just Gems, are packages of code that can be downloaded, installed and used in our Ruby programs or from the command line. The `gem` command manages the Gems.

The basics of Gems are pretty simple: we can search the RubyGems website to find a Gem we want to install, and then run `gem install` to install the Gem on our system. Once installed, we can start using most Gems immediately, though we may have to read the documentation first.

The Remote Library

The `gem` command connects to the remote library, downloads the appropriate Gems, and installs them. If we specify additional remote libraries, `gem` also connects to those libraries to find the Gems we want.

The Local Library

When `gem` installs a Gem, it places the files that comprise the Gem on the local file system in a location where Ruby and our system can find the files and commands it needs. This location is the local library.

Precisely where `gem` creates the local library depends on several factors, including whether you are using a system Ruby that needs root access, a user maintainable Ruby, the specific Ruby version number, and whether you use a Ruby version manager, e.g., rbenv or RVM. 

`$ gem env` : This prints a long list of information about your RubyGems installation.

- `RUBY VERSION`: shows the version number of the Ruby associated with the `gem` command (recall that each Ruby has it's own version of `gem`)
- `RUBY EXECUTABLE`: location of the `ruby` command you should use with this particular `gem` command.
- `INSTALLATION DIRECTORY`: where `gem` installs Gems
- `USER INSTALLATION DIRECTORY`: if `gem` installs Gems in your home directory instead of on a system level
- `EXECUTABLE INSTALLATION DIRECTORY`: Where `gem` stores commands that can be used directly from the command line interface. Should be included in the shell `PATH` variable (this is usually handled by RVM)
- `REMOTE SOURCES`: Remove lib used by the `gem` installation
- `SHELL PATH`: value of the shell `PATH` variable

Gems, like Ruby, also have specific versions. Different programs may rely on different versions and running the wrong version of a Gem with a given program may cause issues.

The full path name of the gem your program loaded can provide information about the specific Gem version. Use `puts $LOADED_FEATURES.grep(/<name_of_gem>\.rb/)` somewhere in the program after `require` to output the full pathname for the Gem in question.

Bundler is a gem that helps us manage programs that rely on features from different versions of Gems.

## Bundler

Many times our programs will use determined Gems and specefic versions that the program user won't have installed in the system. The needed Gems and versions for a program to run are called its dependencies (and those Gems can have their own dependencies too) We can use our version manager to manage Gem dependencies, but the simplest and most common approach is to use a dependency manager: Bundler

Bundler is itself a gem: it makes much easier to set the installation and environment use of different multiple versions of Ruby and Gems for a specific project. It can:

- Specify which Ruby and which Gems we want to use with a Ruby program
- Install that specific versions of each Gem under a the appropiate version of Ruby

Bundler does not come with Ruby, and it needs to be installed with the command `gem install bundler`. Note that it needs to be installed for each version of Ruby that we want to use with the project.

### Gemfile and Gemfile.lock

To use Bundler, we must include a `Gemfile` in our project's main folder, a configuration file for Bundler. This utilizes a specific DSL to Bundler indicate what Ruby version and Gems will. It can inlude the folowing data:

- `source`: the remote library where any Gems to be installed can be found (most usually, `https://rubyGems.org`).
- `ruby`: tells what Ruby version we want the program to use.
- `gem`: tells the gem name and the version we want the project to use (Note that each individual gem the project utilizes needs it's own `gem` statement.
- plus an optional `~>` argument after the name of the game: for example `gem 'minitest', '~> 5.10'` means that we want a version of at least 5.10 of minitest, but prior to version 6.0.

- `Gemspec`: statement that tells the `Gemfile` if a `Gemspec` file is available

For example:

```ruby
source 'https://rubyGems.org'

ruby '2.7.5'
gem 'rack'
gem 'paint'
gem 'rake', '~>10.4.0'
```
Then, we run we run `bundle install` on the command line to create a `Gemfile.lock`. This will include information on _all_ the dependencies within a project, including any other Gems that the Gems listed in the `Gemfile` will need to function.

If there are any changes made to the `Gemfile`, the `bundle install` command must be executed again so a new updated `Gemfile.lock` is created with the updated information.

### Using Bundler

We have to add `require 'bundler/setup'` to the beginning of all our source files (even tests) in order to use Bundler, before any other required Gems, otherwise these Gems will not be added with Bundler. This statement makes sure that the program uses what is listed in the `Gemfile.lock`, instead of defaulting to the most recent version when the Gems.

Bundler is really simple: it does not modify how Ruby versions and Gems are stored. This is determined by the Ruby Version Manager.

### bundle exec

We used `bundle exec` rake instead of just rake; you should use `bundle exec rake` whenever you use Rake with a project that uses Bundler. Although you use `bundle exec rake` to run the `rake` command, Rake itself is not a component of Bundler. We use `bundle exec` just to make sure we're using the Bundler environment with any code we run from the `Rakefile`.

Use the `bundle exec` command from the command line when we can't add the `require 'bundler/setup'` statement directly to the source files (such as with the `Rakefile`), or when there are dependency conflicts within the project itself, or conflicts between the Gems used in the environment by default and those used in the project.

The `bundle exec` command makes sure that the command we are executing will execute in an environment that includes the versions outlined in the `Gemfile.lock`. This is normally used for Gems that run directly from the command line, like `pry`, `rake`, etc., which may have different versions of Ruby and Gems than the ones in the `Gemfile.lock`. Because the shell can't access the `Gemfile.lock` file, we use `bundle exec` to ensure the environment uses the correct version, and not the system default.

If we see an error message like:

```
Gem::LoadError: You have already activated rake 11.3.0, but your Gemfile requires rake 10.4.2. Prepending `bundle exec` to your command may solve this.
```
(In this case, our default version of `rake` is version 11.3.0, but the `Gemfile` in the directory requires the version 10.4.2 )

We can fix it by running `bundle exec` with the command in question.

## Rake

Rake is a gem that help us writing automated tasks, such as building, testing, packaging and installing programs. Specifically, these can include setting up an environment (building directories and files), running tests, common Git tasks, packaging for distribution, as well as any number of other things.

Rake comes with recent versions of Ruby and it's not necessary to install it to use it.

We can define the tasks to be executed in for a particular project by adding a `Rakefile` to the project's main folder. This file will include the name, description, and actual code behind any of the tasks we want to automate. It is written in Ruby with some specific DSL methods that belong to Rake:

- `desc`: With a string that gives a short description of the task
- `task`: which defines the task with a code block (or list of task dependencies)

```ruby
desc 'Task description'
task :name do
  # ruby code that implements the task goes here
end
```

Each of the tasks described in the `Rakefile` can be executed from the command line interface using the `rake` command + the name of the task in the rakefile (i.e. `rake name`). We can also define a default task within the `Rakefile` that will be executrd if no specific task name is provided to the `rake` command.

```ruby
desc 'description here'
task :default => [ :task_1, :task_2 ]
```

Run the command `rake -T` from the command line interface to list all the commands Rake can run along with their associated descriptions.

If our program uses Bundler, we should run the command `bundle exec` with `rake` to ensure that the command line interface environment corresponds to the dependencies of our project.