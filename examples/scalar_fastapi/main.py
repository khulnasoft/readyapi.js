from typing import Union
from fastapi import FastAPI
from readyapi_fastapi import get_readyapi_api_reference

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/readyapi", include_in_schema=False)
async def readyapi_html():
    return get_readyapi_api_reference(
        openapi_url=app.openapi_url,
        title=app.title + " - Readyapi",
    )


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}