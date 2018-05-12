class ToDoList
{
  constructor(name)
  {
    this.name = name
    this.tasks_list = []
  }
  add(task)
  {
    if(task instanceof Task)
    {
      this.tasks_list.push(task)
    }
    else
    {
      alert("Error");
    }
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
