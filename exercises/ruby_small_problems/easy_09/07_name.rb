def swap_name(name)
  whitespace = name.index(" ")
  "#{name[whitespace + 1..-1]}, #{name[0..whitespace - 1]}"
end
