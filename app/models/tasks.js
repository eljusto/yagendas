export default class TaskModel {
  getTask(id) {
    const data = [
      {id: 1, title: "Keep calm"},
      {id: 2, title: "and code react"}
    ]
    return data.find((item) => item.id == id)
  }
}