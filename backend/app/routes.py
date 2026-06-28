from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter()


# Home
@router.get("/")
def home():
    return {"message": "Todo API is working!"}


# Create Todo
@router.post("/todos", response_model=schemas.TodoResponse)
def create_todo(todo: schemas.TodoCreate, db: Session = Depends(get_db)):
    return crud.create_todo(db, todo)


# Get All Todos
@router.get("/todos", response_model=list[schemas.TodoResponse])
def get_todos(db: Session = Depends(get_db)):
    return crud.get_todos(db)


# Get Todo by ID
@router.get("/todos/{todo_id}", response_model=schemas.TodoResponse)
def get_todo(todo_id: int, db: Session = Depends(get_db)):
    todo = crud.get_todo_by_id(db, todo_id)

    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    return todo


# Update Todo
@router.put("/todos/{todo_id}", response_model=schemas.TodoResponse)
def update_todo(
    todo_id: int,
    todo: schemas.TodoUpdate,
    db: Session = Depends(get_db)
):
    updated_todo = crud.update_todo(db, todo_id, todo)

    if not updated_todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    return updated_todo

# Patch Todo
@router.patch("/todos/{todo_id}", response_model=schemas.TodoResponse)
def patch_todo(
    todo_id: int,
    todo: schemas.TodoPatch,
    db: Session = Depends(get_db)
):
    updated_todo = crud.patch_todo(db, todo_id, todo)

    if not updated_todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    return updated_todo


# Delete Todo
@router.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, db: Session = Depends(get_db)):
    deleted_todo = crud.delete_todo(db, todo_id)

    if not deleted_todo:
        raise HTTPException(
            status_code=404,
            detail="Todo not found"
        )

    return {"message": "Todo deleted successfully"}