from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(title="Todo API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Todo API"
    }


@app.get("/about")
def about():
    return {
        "project": "Todo Full Stack Application",
        "backend": "FastAPI",
        "database": "MySQL"
    }


# Include all Todo routes
app.include_router(router)