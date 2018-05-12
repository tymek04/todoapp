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

  changeDone()
  {
    this.done = !this.done
  }

  setName(newName)
  {
    this.name = newName
  }

  setDesc(newDesc)
  {
     this.description = newDesc
  }
}
