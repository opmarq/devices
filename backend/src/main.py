
from fastapi import FastAPI
from typing import List
from .model import Device, generate_device

app = FastAPI(
    title=f"GUI Test App",
    version="1.0",
    debug=True,
)



@app.get("/devices", response_model=List[Device])
async def get_devices(n: int=1) -> List[Device]:
    return [generate_device() for i in range(n)]
