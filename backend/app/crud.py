from sqlalchemy.orm import Session
from app import models, schemas


# Create Todo
def create_todo(db: Session, todo: schemas.TodoCreate):
    db_todo = models.Todo(
        title=todo.title,
        description=todo.description
    )
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo


# Get All Todos
def get_todos(db: Session):
    return db.query(models.Todo).all()


# Get Todo by ID
def get_todo_by_id(db: Session, todo_id: int):
    return db.query(models.Todo).filter(models.Todo.id == todo_id).first()


# Update Todo
def update_todo(db: Session, todo_id: int, todo: schemas.TodoUpdate):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    if not db_todo:
        return None

    if todo.title is not None:
        db_todo.title = todo.title

    if todo.description is not None:
        db_todo.description = todo.description

    if todo.completed is not None:
        db_todo.completed = todo.completed

    db.commit()
    db.refresh(db_todo)

    return db_todo


# Delete Todo
def delete_todo(db: Session, todo_id: int):
    db_todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    if not db_todo:
        return None

    db.delete(db_todo)
    db.commit()

    return db_todo

def patch_todo(db: Session, todo_id: int, todo_data):
    todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()

    if not todo:
        return None

    if todo_data.completed is not None:
        todo.completed = todo_data.completed

    db.commit()
    db.refresh(todo)

    return todo
    return db_todo