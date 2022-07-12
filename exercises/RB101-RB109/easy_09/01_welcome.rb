def greetings(name_array, job_hash)
  format(
    'Hello, %<name>s! Nice to have a %<job>s here',
    name: name_array.join(' '),
    job: job_hash.values.join(' ')
  )
end

p greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
