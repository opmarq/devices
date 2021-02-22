
from fastapi import FastAPI
from typing import List
from .model import Device, generate_device
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3001",
    "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:80",
    "http://localhost",
]

app = FastAPI(
    title=f"GUI Test App",
    version="1.0",
    debug=True,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/devices", response_model=List[Device])
async def get_devices(n: int = 1) -> List[Device]:
    return [generate_device() for i in range(n)]
