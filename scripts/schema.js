class ToDoList
{
  constructor(name)
  {
    this.name = name
    this.tasks_list = []
  }
  add(task)
  {
    this.tasks_list.push(task)
  }
}

class Task
{
  constructor(name, description)
  {
    this.name = name
    this.description = description
    this.done = false
    this.date = new Date()
  }

  change_done()
  {
    this.done = !this.done
  }

  set_name(new_name)
  {
    this.name = new_name
  }

  set_des(new_des)
  {
    this.description = new_des
  }
}
