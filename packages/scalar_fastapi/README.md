# Readyapi FastAPI API Reference Plugin

![fastapi](fastapi.png)

## Installation

```bash
pip install readyapi-fastapi
```

## Usage

FastAPI makes it super easy to enable readyapi with their out of the box OpenAPI support

```python
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
    )

```
